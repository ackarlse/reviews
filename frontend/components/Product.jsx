import { useEffect, useState } from "react";
import {
  fetchAllProducts,
  fetchProductBySlug,
} from "../sanity/services/productServices";
import { Link, useParams } from "react-router-dom";
import Comment from "./Comment";
import CommentForm from "./CommentForm";

export default function Product() {
  const { product } = useParams();
  const [singleProduct, setSingleProduct] = useState([]);

  const getProductBySlug = async (slug) => {
    const data = await fetchProductBySlug(slug);
    setSingleProduct(data[0]);
    console.log(data[0]);
  };

  useEffect(() => {
    getProductBySlug(product);
  }, [product]);

  return (
    <section>
      <h1>{singleProduct?.name}</h1>
      <section>
        <h3>Legg igjen en kommentar</h3>
        <CommentForm />
      </section>
      <section className="comments">
        <h3>Kommentarer</h3>
        {singleProduct?.comments?.map((comment) => (
          <Comment comment={comment} key={comment._id} />
        ))}
      </section>
    </section>
  );
}
