import { FlatType } from "../types";

export interface FlatsRepository {
    getAll(): FlatType[];
    searchMany(query: {
        location?: string;
        roomQuantity?: number;
    }): FlatType[] | null;
}
