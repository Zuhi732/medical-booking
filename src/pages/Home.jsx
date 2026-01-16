import { useEffect } from "react"; // <--- ১. এটা ইম্পোর্ট করুন
import Banner from "../components/Banner";
import Stats from "../components/Stats";
import TopDoctors from "../components/TopDoctors";

const Home = () => {
  // ২. এই useEffect টুকু যোগ করুন
  useEffect(() => {
    document.title = "MedicalApp | Home";
  }, []);

  return (
    <div>
      <Banner />
      <Stats />
      <TopDoctors />
    </div>
  );
};

export default Home;
