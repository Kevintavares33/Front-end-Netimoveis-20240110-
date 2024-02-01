import { FlatType } from "../types";
import { FlatsRepository } from "./flats-repository";

export class Flats implements FlatsRepository {
    private items: FlatType[] = [];

    constructor(flats: FlatType[]) {
        this.items = flats;
    }

    getAll() {
        return this.items;
    }

    searchMany({
        location,
        roomQuantity = 0,
    }: {
        location?: string;
        roomQuantity?: number;
    }) {
        return this.items.filter((item) => {
            return (
                item.City.includes(location || "") && item.Rooms >= roomQuantity
            );
        });
    }
}
