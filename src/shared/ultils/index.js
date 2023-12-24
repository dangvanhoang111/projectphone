import { base_URL } from "../constants/app"

export const getImageProducs = (imageName)=>{
    return `${base_URL}assets/uploads/products/${imageName}`
}