import PropTypes from "prop-types";

const Bookmark = ({ bookmark }) => {
  const { title, id } = bookmark;

  return (
    <div className="bg-slate-200 p-2 m-4 rounded-2xl">
      <h3 className="text-2xl font-bold p-2">
        {id} .{title}
      </h3>
    </div>
  );
};

Bookmark.propTypes = {
  bookmark: PropTypes.object,
};

export default Bookmark;
