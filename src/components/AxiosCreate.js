import axios from "axios";
import React from "react";

const client = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/posts" 
  });

const AxiosCreate = () =>  {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    client.get("/3").then((response) => {
        setPost(response.data);
      console.log(response.data);
    });
  }, []);

  function updatePost() {
    client
      .put("/3", {
        title: "Hello World! with UPDATE!!",
        body: "This is an updated post using create Axios instance."
      })
      .then((response) => {
        setPost(response.data);
        console.log(response.data);
      });
  }

  if (!post) return "No post!"

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <button onClick={updatePost}>Update Post</button>
    </div>
  )
};
export default AxiosCreate;