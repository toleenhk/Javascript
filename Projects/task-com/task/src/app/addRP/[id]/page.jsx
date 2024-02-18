// "use client";
// import Navbar from "@/components/Navbar";
// import React from "react";
// import Link from "next/link";
// import { useState } from "react";
// import { useRouter } from "next/navigation";

// export default function addRP({ params }) {
//   const { id } = params;
//   const [readingProgress, setreadingProgress] = useState("");
//   const [review, setreview] = useState("");

//   const router = useRouter();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!readingProgress || !review) {
//       alert("title, genre, and page count are required ");
//       return;
//     }

//     try {
//       const res = await fetch(`http://localhost:3000/api/books/${id}`, {
//         method: "POST",
//         headers: {
//           "Content-type": "application/json",
//         },
//         body: JSON.stringify({ readingProgress, review }),
//       });

//       if (res.ok) {
//         router.push("/profile");
//       } else {
//         throw new Error("Failed to create a review and Pg");
//       }
//     } catch (error) {
//       console.log("Error creating a review and pg", error);
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <form className="flex flex-col gap-3 items-center py-5" action="">
//         <input
//           onChange={(e) => setreadingProgress(e.target.value)}
//           type="text"
//           className="border border-slate-500 px-8 py-2 lg:w-1/2"
//           typeof="text"
//           placeholder="Add Progress as a present %  e.g 15"
//         />
//         <input
//           onChange={(e) => setreview(e.target.value)}
//           type="text"
//           className="border border-slate-500 px-8 py-2 lg:w-1/2"
//           typeof="text"
//           placeholder="Add Review"
//         />
//         <div className="flex flex-row items-end gap-3">
//           <button
//             type="submit"
//             onClick={handleSubmit}
//             className="bg-green-600 font-bold text-white py-3 px-6 w-fit"
//           >
//             Add Review
//           </button>
//           <Link
//             href={"/profile"}
//             className="bg-red-500 font-bold text-white py-3 px-6 w-fit"
//           >
//             go back
//           </Link>
//         </div>
//       </form>
//     </>
//   );
// }
