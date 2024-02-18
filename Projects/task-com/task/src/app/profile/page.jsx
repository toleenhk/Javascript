import Navbar from "../../components/Navbar";
import BooksLibrary from "../../components/BooksLibrary";

export default function ProfilePage() {
  return (
    <div className="">
      <Navbar></Navbar>
      <div className="flex flex-col items-center  min-h-screen py-2">
        <BooksLibrary></BooksLibrary>
      </div>
    </div>
  );
}
