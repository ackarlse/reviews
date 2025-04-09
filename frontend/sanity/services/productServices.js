import { comments } from "../../../sanity/schemaTypes/comments";
import { client, writeClient } from "../client";

export async function fetchAllProducts() {
  const data = await client.fetch(
    `*[_type == 'products']{name, _id, comments, "slug": slug.current}`
  );
  return data;
}

export async function fetchProductBySlug(slug) {
  const data = await client.fetch(
    `*[_type == 'products' && slug.current == $slug]{name, _id, 
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
    }`,
    { slug }
  );
  return data;
}

export async function updateComments(user, comment, productid) {
  const result = await writeClient
    .patch(productid)
    .setIfMissing({ comments: [] })
    .append("comments", [{ user: user, comment: comment }])
    .commit({ autoGenerateArrayKeys: true })
    .then(() => {
      return "Success";
    })
    .catch((error) => {
      return "Errorr" + error.message;
    });

  return result;
}
