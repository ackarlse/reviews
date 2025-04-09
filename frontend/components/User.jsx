import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchUserBySlug } from "../sanity/services/userServices";

export default function User() {
  const { user } = useParams();
  const [userData, setUserData] = useState([]);

  const getUserBySlug = async (slug) => {
    const data = await fetchUserBySlug(slug);
    setUserData(data[0]);
  };

  useEffect(() => {
    getUserBySlug(user);
  }, [user]);

  return <h1>{userData.name}</h1>;
}
