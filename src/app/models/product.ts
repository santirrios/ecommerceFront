export interface Product {
    id:string;
    category:string;
    description:string;
    name:string;
    images:string[];
    price:string;
}
export interface CreateProduct extends Omit<Product,'id'>{
}