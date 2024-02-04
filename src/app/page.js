import MainPage from "@/components/home/home";
import { connectToDataBase, isDatabaseConnected } from "@/lib/database";

export default function Home() {
  connectToDataBase();
  if (isDatabaseConnected()) {
    // Database is connected, perform your operations
    console.log("Performing database operations...");
  } else {
    console.log("Database not connected. Please check the connection.");
  }
  return (
    <>
    <MainPage/>
    </>
  );
}
