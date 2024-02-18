import EditBook from "/Users/Tulin/Projects/task-com/task/src/components/EditBook";

const getBookById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/books/${id}`, {
      cache: "no-store",
    });
    return res.json();
  } catch (error) {
    console.log("error");
  }
};

export default async function Editbook({ params }) {
  const { id } = params;
  const { book } = await getBookById(id);
  const { title, genre, pagecount, readingProgress, review } = book;
  return (
    <div>
      <EditBook
        id={id}
        title={title}
        genre={genre}
        pagecount={pagecount}
        review={review}
        readingProgress={readingProgress}
      />
    </div>
  );
}
