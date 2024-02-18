// "use client";
// import React, { useState } from "react";
// import Link from "next/link";
// import Navbar from "@/components/Navbar";
// import { useRouter } from "next/navigation";

// const EditReview = ({ id, readingProgress, review }) => {
//   const router = useRouter();
//   const [newreadingProgress, setNewreadingProgress] = useState(readingProgress);
//   const [newreview, setNewreview] = useState(review);

//   const handlesubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await fetch(`http://localhost:3000/api/books/${id}`, {
//         method: "PUT",
//         headers: {
//           "Content-type": "application/json",
//         },
//         body: JSON.stringify({ newreadingProgress, newreview, newpagecount }),
//       });
//       if (!res.ok) {
//         throw new Error("falling to update");
//       }
//       router.push("/profile");
//     } catch (error) {
//       console.log("can not edit");
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <form className="flex flex-col gap-3 items-center py-5 " action="">
//         <input
//           onChange={(e) => setNewreview(e.target.value)}
//           value={newreview}
//           type="text"
//           className="border border-slate-500 px-8 py-2 lg:w-1/2"
//           typeof="text"
//           placeholder="Update Book"
//         />
//         <input
//           onChange={(e) => setNewreadingProgress(e.target.value)}
//           value={newreadingProgress}
//           type="text"
//           className="border border-slate-500 px-8 py-2 lg:w-1/2"
//           typeof="text"
//           placeholder="Update genre"
//         />
//         <div className="flex flex-row items-end gap-3">
//           <button
//             onClick={handlesubmit}
//             className="bg-green-600 font-bold text-white py-3 px-6 w-fit"
//           >
//             Update Book
//           </button>
//           <Link
//             href={"/profile"}
//             className="bg-red-500 font-bold text-white py-3 px-6 w-fit"
//           >
//             Cancel
//           </Link>
//         </div>
//       </form>
//     </>
//   );
// };

// export default EditReview;
