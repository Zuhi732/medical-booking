import { useEffect } from "react";
import Banner from "../components/Banner";
import Stats from "../components/Stats";
import TopDoctors from "../components/TopDoctors";
// এই লাইনটি ঠিক করা হয়েছে (../ দেওয়া হয়েছে)
import Doctors from "../Doctors";

const Home = () => {
  useEffect(() => {
    document.title = "MedicalApp | Home";
  }, []);

  return (
    <div>
      <Banner />
      <Stats />
      <TopDoctors />

      {/* আমাদের নতুন ডাক্তার সেকশন */}
      <Doctors />
    </div>
  );
};

export default Home;
