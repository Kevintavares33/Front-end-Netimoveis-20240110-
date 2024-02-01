import { PlaceType } from "../types";

export interface PlacesRepository {
    getAll(): PlaceType[];
    searchMany(query: string): PlaceType[];
}
