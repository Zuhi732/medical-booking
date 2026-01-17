import { useEffect } from "react";
import Banner from "../components/Banner";
import Stats from "../components/Stats";
import TopDoctors from "../components/TopDoctors";

const Home = () => {
  useEffect(() => {
    document.title = "MedicalApp | Home";
  }, []);

  return (
    <div>
      <Banner />
      <Stats />
      <TopDoctors />
      {/* Doctors কম্পোনেন্ট এখান থেকে সরিয়ে দেওয়া হলো, যাতে ক্লায়েন্ট ফর্ম না দেখে */}
    </div>
  );
};

export default Home;
