import { useEffect } from "react";
import { useState } from "react";

const Blogs = () => {

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("Blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="md:w-2/3">

      <h1 className="text-2xl">All Blogs :  {blogs.length} </h1>

    </div>
  );
};

export default Blogs;
