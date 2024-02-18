import { connect } from "@/dbConfig/dbConfig";
import Book from "@/models/bookModel";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { title, genre, pagecount, review, readingProgress } =
      await request.json();

    if (!title || !genre || !pagecount || !review || !readingProgress) {
      throw new Error("Title, genre, and page count are required");
    }

    await connect();
    await Book.create({ title, genre, pagecount, review, readingProgress });

    return NextResponse.json({ message: "Book created" }, { status: 201 });
  } catch (error) {
    console.error("Error creating a book", error);
    return NextResponse.json(
      { error: "Failed to create a book" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connect();
    const books = await Book.find();
    return NextResponse.json({ books }, { status: 200 });
  } catch (error) {
    console.error("Error fetching books", error);
    return NextResponse.json(
      { error: "Failed to fetch books" },
      { status: 500 }
    );
  }
}

export async function DELETE(request) {
  try {
    const id = request.nextUrl.searchParams.get("id");
    await connect();
    await Book.findByIdAndDelete(id);
    return NextResponse.json({ message: "Book deleted" }, { status: 200 });
  } catch (error) {
    console.error("Error deleting book", error);
    return NextResponse.json(
      { error: "Failed to delete book" },
      { status: 500 }
    );
  }
}
