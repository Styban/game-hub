import APICLIENT from "./api-client";

export interface Platform{
    id: number;
    name: string;
    slug: string;
}

export default new APICLIENT<Platform>("/platforms/lists/parents");