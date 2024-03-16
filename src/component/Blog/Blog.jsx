import PropTypes from "prop-types";
import { CiBookmark } from "react-icons/ci";

const Blog = ({ blog, handleAddToBookmark }) => {
  const { cover, author_img, author, post_date, reading_time, hashtag, title } =
    blog;

  return (
    <div>
      <img className="mt-20 rounded-2xl" src={cover} alt="jani na vai" />
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2 my-3">
          <img className="w-14" src={author_img} alt="jani na vai" />

          <ul>
            <li className="text-1xl font-bold">{author}</li>
            <li className="text-sm text-zinc-500">{post_date}</li>
          </ul>
        </div>

        <div className="flex items-center gap-2">
          <p className="text-zinc-500">{reading_time}</p>
          <button
            className="text-2xl font-semibold"
            onClick={() => handleAddToBookmark(blog)}
          >
            <CiBookmark />
          </button>
        </div>
      </div>

      <h1 className="text-2xl font-bold py-2"> {title} </h1>
      <span className="text-zinc-500">
        <a href="#">
          #{hashtag[0]} #{hashtag[1]}
        </a>
      </span>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func,
};

export default Blog;
