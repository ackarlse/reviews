import { client } from "../client";

export async function fetchAllUsers() {
  const data = await client.fetch(`*[_type == 'users']
                {_id,
                name,
                "image": image.asset -> url,
                "slug": slug.current
            }`);
  return data;
}

export async function fetchUserBySlug(slug) {
  const data = await client.fetch(
    `*[_type == 'users' && slug.current == $slug]{
                _id,
                name,
                "image": image.asset -> url,
                slug
            }`,
    { slug }
  );
  return data;
}
