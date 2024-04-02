export interface Grament {
    _id: string,
    model: string,
    img: string,
    color: string,
    price: string,
    gender: string,
    size: string,
    description: string,
    comments: string[],
    _ownerId: string
}

export interface Detailed {
    _id: string,
    model: String,
    img: String,
    color: String,
    price: string,
   gender: String,
    size: String,
    description: String,
}