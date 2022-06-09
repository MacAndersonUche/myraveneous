export interface BusinessType {
    id: string,
    image_url: string,
    name: string,
    location: LocationType
    rating: string,
    review_count: string
    categories:Array<CategoriesType>,
 
    
}

export interface LocationType {
    address1: string,
    city: string,
    state:string,
    zip_code:string,
 

}

export interface CategoriesType {
    alias: string,
    title: string
}

export interface ReturnedBusiness {
    id: string
    name: string
    imageSrc: string
    address: string
    city: string
    state:string
    zipCode: string
    category:string
    rating: string
    reviewCount: string
}

export interface YelpType {
    search: (term:string, location: string, sortBy: string) => Promise<ReturnedBusiness[]|undefined>
}

export type JsonResponseType = {businesses:BusinessType[] }