// import Navbar from "@/components/Navbar";
// import React from "react";
// import AddBook from "@/components/addBook";

// const addBook = () => {
//   return (
//     <div>
//       {" "}
//       <Navbar></Navbar>
//       <AddBook />
//     </div>
//   );
// };

// export default addBook;

"use client";
import Navbar from "@/components/Navbar";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function addBook() {
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [pagecount, setPagecount] = useState("");
  const [readingProgress, setreadingProgress] = useState("");
  const [review, setreview] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !genre || !pagecount || !readingProgress || !review) {
      alert("title, genre, and page count are required ");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/books", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          title,
          genre,
          pagecount,
          readingProgress,
          review,
        }),
      });

      if (res.ok) {
        router.push("/profile");
      } else {
        throw new Error("Failed to create a book");
      }
    } catch (error) {
      console.log("Error creating a book", error);
    }
  };

  return (
    <>
      <Navbar />
      <form className="flex flex-col gap-3 items-center py-5" action="">
        <input
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          className="border border-slate-500 px-8 py-2 lg:w-1/2"
          typeof="text"
          placeholder="Add Book"
        />
        <input
          onChange={(e) => setGenre(e.target.value)}
          type="text"
          className="border border-slate-500 px-8 py-2 lg:w-1/2"
          typeof="text"
          placeholder="Add genre"
        />
        <input
          onChange={(e) => setPagecount(e.target.value)}
          type="text"
          className="border border-slate-500 px-8 py-2 lg:w-1/2"
          typeof="text"
          placeholder="Add Page count"
        />

        <textarea
          onChange={(e) => setreview(e.target.value)}
          className="border border-slate-500 px-8 py-2 lg:w-1/2 rounded-lg focus:border-blue-500"
          placeholder="Write your review here..."
        />
        <input
          onChange={(e) => setreadingProgress(e.target.value)}
          type="number"
          className="border border-slate-500 px-8 py-2 lg:w-1/2 rounded-lg focus:border-blue-500"
          placeholder="Add Reading Progress"
        />

        <div className="flex flex-row items-end gap-3">
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-green-600 font-bold text-white py-3 px-6 w-fit"
          >
            Add Book
          </button>
          <Link
            href={"/profile"}
            className="bg-red-500 font-bold text-white py-3 px-6 w-fit"
          >
            Return back
          </Link>
        </div>
      </form>
    </>
  );
}
