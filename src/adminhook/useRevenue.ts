import { useQuery } from "@tanstack/react-query";
import PHPAPICLIENT from "../api/apiClient";

interface revenue {
  total: number;
}

const apiClient = new PHPAPICLIENT<revenue>("/get_total_revenue.php");

const useRevenue = () =>
  useQuery({
    queryKey: ["revenue"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000,
  });

export default useRevenue;
