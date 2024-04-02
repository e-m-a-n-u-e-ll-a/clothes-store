export interface Grament {
    _id: String,
    model: String,
    img: String,
    color: String,
    price: string,
    type: String,
    size: String,
    description: String,
    comments: String[],
    _ownerId: String
}

export interface Detailed {
    model: String,
    img: String,
    color: String,
    price: string,
   gender: String,
    size: String,
    description: String,
}