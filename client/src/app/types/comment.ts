import { Grament } from "./garment";

export interface Comment {
    _id: string,
    email: string,
    text: string,
    garmentId: string
}