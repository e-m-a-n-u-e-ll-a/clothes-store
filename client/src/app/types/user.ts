import { Grament } from "./garment";

export interface User {
    _id: string,
    email: string,
    password: string,
    posts: Grament[],

}