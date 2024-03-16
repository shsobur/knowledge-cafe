import { useState } from "react";
import "./App.css";
import Blogs from "./component/Blogs/Blogs";
import Bookmarks from "./component/Bookmarks/Bookmarks";
import Header from "./component/Header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const handleAddToBookmark = (blog) => {
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks);
  };

  return (
    <>
      <Header></Header>

      <div className="md:flex p-2 max-w-6xl mx-auto">
        <Blogs handleAddToBookmark = {handleAddToBookmark} ></Blogs>
        <Bookmarks bookmarks = {bookmarks}></Bookmarks>
      </div>
    </>
  );
}

export default App;
