import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  fetchAllCommentsFromUser,
  fetchUserBySlug,
} from "../sanity/services/userServices";

export default function User() {
  const { user } = useParams();
  const [userData, setUserData] = useState([]);
  const [comments, setComments] = useState([]);

  const getUserBySlug = async (slug) => {
    const data = await fetchUserBySlug(slug);
    setUserData(data[0]);
  };

  useEffect(() => {
    getUserBySlug(user);
  }, [user]);

  const getCommentsFromUser = async (id) => {
    const data = await fetchAllCommentsFromUser(id);
    setComments(data);
    console.log(data);
  };

  useEffect(() => {
    userData && userData._id ? getCommentsFromUser(userData._id) : null;
  }, [userData]);

  return (
    <>
      <h1>{userData.name}</h1>
      <ul>
        {comments?.map((comment) => (
          <li key={comment._id}>
            <article>
              <h3>{comment.product}</h3>
              {comment.comments.map((text) => (
                <p>{text.comment}</p>
              ))}
            </article>
          </li>
        ))}
      </ul>
    </>
  );
}
