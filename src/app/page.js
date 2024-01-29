import Header from "@/component/Header/Header";
import Navbar from "@/component/Navbar/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Navbar/>
     <Header/>
     <footer className=" bg-gray-900 text-white p-28">
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row justify-between items-center text-white">
        <div className="mb-4 lg:mb-0">
          <h2 className="text-lg font-semibold mb-1">Recommender App</h2>
          <p className="text-sm">
            Discover personalized recommendations just for you.
          </p>
        </div>
      </div>

      <div className="mt-3 text-center">
        <p className="text-xs text-white">
          &copy; {new Date().getFullYear()} Recommender App. All rights
          reserved.
        </p>
      </div>
    </footer>
    </>
  );
}
