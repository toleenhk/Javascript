// "use client";
// import EditReview from "/Users/Tulin/Projects/task-com/task/src/components/EditReview";

// const getBookById = async (id) => {
//   try {
//     const res = await fetch(`http://localhost:3000/api/books/${id}`, {
//       cache: "no-store",
//     });
//     return res.json();
//   } catch (error) {
//     console.log("error");
//   }
// };

// export default async function EditReview({ params }) {
//   const { id } = params;
//   const { book } = await getBookById(id);
//   const { review, readingProgress } = book;
//   return (
//     <div>
//       <EditReview id={id} review={review} readingProgress={readingProgress} />
//     </div>
//   );
// }
