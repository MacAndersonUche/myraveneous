import { BusinessType, JsonResponseType, ReturnedBusiness, YelpType } from "./Yelptype";

const apiKey: string = '65vp-x1VLzle3F0vg5xlhqlxm7DHPv9VvERGmax9Eb9GFbbdlWGFpGTfQfBq6fLWq_JGSDFbLcj6-gRliNfyd4ASPCQg9qdJpSso6qfzIj055tHs0TmCjW8Gi5miYXYx';



const Yelp: YelpType = {
    async search(term:string, location: string, sortBy: string) {
        const response = await fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        });
        const jsonResponse:JsonResponseType  = await response.json();
        if (jsonResponse.businesses) {
            return jsonResponse.businesses.map((business: BusinessType): ReturnedBusiness => ({
                id: business.id,
                imageSrc: business.image_url,
                name: business.name,
                address: business.location.address1,
                city: business.location.city,
                state: business.location.state,
                zipCode: business.location.zip_code,
                category: business.categories[0].title,
                rating: business.rating,
                reviewCount: business.review_count
            }));
        }
    }
};

export default Yelp;

