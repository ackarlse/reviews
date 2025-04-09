import { client } from "../client";

export async function fetchAllProducts(){
    const data = await client.fetch(`*[_type == 'products']{name, _id, comments, "slug": slug.current}`)
    return data;
}


export async function fetchProductBySlug(slug){
    const data = await client.fetch(`*[_type == 'products' && slug.current == $slug]{name, _id, 
        comments[]{
            _key,
            comment,
            user->{
                _id,
                name,
                "image": image.asset -> url,
                slug
            }
        }
    }`,{slug})
    return data
}