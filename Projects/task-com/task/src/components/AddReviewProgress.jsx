// "use client";
// import React from "react";
// import Link from "next/link";
// import { useState } from "react";
// import { useRouter } from "next/navigation";

// export default function AddBook() {
//   const [readingProgress, setreadingProgress] = useState("");
//   const [review, setreview] = useState("");

//   const router = useRouter();
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!readingProgress || !review) {
//       alert("title , genre, and page count are required ");
//       return;
//     }
//     try {
//       const res = await fetch("http://localhost:3000/api/books", {
//         method: "POST",
//         headers: {
//           "Content-type": "application/json",
//         },
//         body: JSON.stringify({ readingProgress, review }),
//       }); // so we could get the updated data
//       // return res.json();

//       if (res.ok) {
//         router.puch("/profile");
//       } else {
//         throw new Error("Failed to create a book");
//       }
//     } catch (error) {
//       console.log("Error Loading Books", error);
//     }
//   };
//   return (
//     <form className="flex flex-col gap-3 items-center py-5 " action="">
//       <input
//         onChange={(e) => setreadingProgress(e.target.value)}
//         type="text"
//         className="border border-slate-500 px-8 py-2 lg:w-1/2"
//         typeof="text"
//         placeholder="Add Book"
//       />
//       <input
//         onChange={(e) => setreview(e.target.value)}
//         type="text"
//         className="border border-slate-500 px-8 py-2 lg:w-1/2"
//         typeof="text"
//         placeholder="Add genre"
//       />
//       <div className="flex flex-row items-end gap-3">
//         <button
//           type="submit"
//           onClick={handleSubmit}
//           className="bg-green-600 font-bold text-white py-3 px-6 w-fit"
//         >
//           Add Book
//         </button>
//         <Link
//           href={"/profile"}
//           className="bg-red-500 font-bold text-white py-3 px-6 w-fit"
//         >
//           Cancel
//         </Link>
//       </div>
//     </form>
//   );
// }
