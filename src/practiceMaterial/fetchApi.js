import axios from "axios";
import React, { useEffect, useState } from "react";

function FetchApi() {
  const [posts, setPosts] = useState([]);

  const getApiData = async () => {
    try {
      const posts = await axios.get(
        "https://rajafareed.com/amber-app/api/getAllProduct?page=0"
      );
      console.log(posts.data.data, "mmmmmmmmmmmmmmmmmmmmm");
      setPosts(posts.data.data);
    } catch (error) {
      console.log(error.message, "errorerrorerrorerrorerrorerrorerror");
    }
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <>
      {posts?.map((elem, index) => {
        return (
          <div style={{ border: "2px solid " }}>
            <ul>
              <li>{elem.category}</li>
              <li>{elem.name}</li>
              <li>{elem.price}</li>
              <li>{elem.discount}</li>
            </ul>
          </div>
        );
      })}
    </>
  );
}

export default FetchApi;
