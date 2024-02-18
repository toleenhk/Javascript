import { connect } from "@/dbConfig/dbConfig";
import Book from "../../../../models/bookModel";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  try {
    const { id } = params;
    const { newTitle, newgenre, newpagecount, newreadingProgress, newreview } =
      await request.json();
    await connect();
    await Book.findByIdAndUpdate(id, {
      title: newTitle,
      genre: newgenre,
      pagecount: newpagecount,
      readingProgress: newreadingProgress,
      review: newreview,
    });
    return NextResponse.json({ message: "Book Updated" }, { status: 201 });
  } catch (error) {
    console.error("Error updating book", error);
    return NextResponse.json(
      { error: "Failed to update book" },
      { status: 500 }
    );
  }
}

export async function GET(request, { params }) {
  try {
    const { id } = params;
    await connect();
    const book = await Book.findById(id); // Corrected to findById
    return NextResponse.json({ book }, { status: 200 });
  } catch (error) {
    console.error("Error fetching book", error);
    return NextResponse.json(
      { error: "Failed to fetch book" },
      { status: 500 }
    );
  }
}
