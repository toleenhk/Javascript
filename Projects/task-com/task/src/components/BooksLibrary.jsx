"use client";
import React, { useEffect, useState } from "react";
import Removebtn from "@/components/Removebtn";
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";

const getBooks = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/books", {
      catch: "no-store",
    }); // so we could get the updated data
    if (!res.ok) {
      throw new Error("Failed to fetch books");
    }
    return res.json();
  } catch (error) {
    console.log("Error Loading Books", error);
    throw error; // rethrow the error so it can be caught by the caller
  }
};

export default function BooksLibrary() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getBooks();
        setBooks(data.books);
      } catch (error) {
        console.error("Failed to fetch books:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {books.map((b) => (
        <div
          key={b._id} // Make sure to provide a unique key for each element in the array
          className="p-9 border border-slate-300 my-3 flex flex-col lg:w-3/5 relative"
        >
          <div className="flex justify-between items-start">
            <div>
              <h2 className="font-bold text-2xl text-orange-600 pb-3">
                {b.title}
              </h2>
              <div>{b.genre}</div>
              <div className="pb-4">{b.pagecount}</div>
              <hr />
              <div className="mt-4 mb-3 flex gap-4">
                <span className=" text-purple-800 font-bold ">
                  Your Review:{" "}
                </span>{" "}
                {b.review}
              </div>
            </div>

            {/* Delete and Edit icons */}
            <div className="flex gap-2">
              <Removebtn id={b._id} />
              <Link href={`/editbook/${b._id}`}>
                <HiPencilAlt size={24} />
              </Link>
            </div>
          </div>

          {/* Progress */}
          <div className="flex justify-center items-center mt-auto ">
            <div className="font-bold text-xl text-purple-700">
              Progress: {b.readingProgress}%
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
