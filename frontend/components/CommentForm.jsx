import { useState } from "react";
import { updateComments } from "../sanity/services/productServices";

export default function CommentForm({ productid, loggedInUser }) {
  const [comment, setComment] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await updateComments(loggedInUser._id, comment, productid);

    if (result === "Success") {
      console.log("Din kommentar er sendt!");
    }
  };

  const handleComment = (e) => {
    setComment(e.target.value);
  };

  console.log("fra comment", loggedInUser, productid);
  return (
    <form>
      <label>
        Brukernavn
        <input
          type="text"
          name="user"
          defaultValue={loggedInUser?.name}
          placeholder={loggedInUser?.name}
        />
      </label>
      <label>
        Kommentar
        <textarea name="comment" onChange={handleComment}></textarea>
      </label>
      <button onClick={handleSubmit}>Send</button>
    </form>
  );
}
