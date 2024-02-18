"use client";
import React from "react";
import { HiOutlineTrash } from "react-icons/hi";
// import { useRouter } from "next/navigation";

export default function Removebtn({ id }) {
  // const router = useRouter();
  const removeBook = async () => {
    const confirmed = confirm("Are you sure ?");
    if (confirmed) {
      const res = await fetch(`http://localhost:3000/api/books?id=${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        window.location.reload();
      } else {
        throw new Error("Failed to delete the book");
      }
    }
  };
  return (
    <button onClick={removeBook} className="text-red-400">
      <HiOutlineTrash size={24} />
    </button>
  );
}
