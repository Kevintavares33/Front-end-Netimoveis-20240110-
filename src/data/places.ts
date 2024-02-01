import { PlacesRepository } from "./places-repository";
import { PlaceType } from "../types";

export class Places implements PlacesRepository {
    private items: PlaceType[] = [];

    constructor(places: PlaceType[]) {
        this.items = places;
    }

    getAll() {
        return this.items;
    }

    searchMany(query: string) {
        return this.items.filter((item) => {
            const queryToLowerCase = query.toLowerCase();

            return (
                item.name.toLowerCase().includes(queryToLowerCase) ||
                item.state.name.toLowerCase().includes(queryToLowerCase) ||
                item.state.shortname.toLowerCase().includes(queryToLowerCase)
            );
        });
    }
}
