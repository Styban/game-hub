import APICLIENT from "./api-client";
import { Platform } from "./platformsService";

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {platform: Platform}[];
    metacritic: number;
    rating_top: number;
}

export default new APICLIENT<Game>("/games")