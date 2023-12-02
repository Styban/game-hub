import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../store";

const SearchInput = () => {
  const setSearchInput = useGameQueryStore((s) => s.setSearchInput);
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) setSearchInput(ref.current.value);
        console.log(ref.current);
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={ref}
          borderRadius={20}
          placeholder="Search Games..."
          variant="filled"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
