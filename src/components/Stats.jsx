import { Activity, Smile, Trophy, Users } from "lucide-react"; // আমরা আইকনের জন্য lucide-react ব্যবহার করছি
import CountUp from "react-countup";

const Stats = () => {
  const statsData = [
    {
      id: 1,
      icon: <Users className="w-10 h-10 text-white" />,
      count: 5000,
      title: "Happy Patients",
      bgColor: "bg-blue-500",
    },
    {
      id: 2,
      icon: <Smile className="w-10 h-10 text-white" />,
      count: 200,
      title: "Expert Doctors",
      bgColor: "bg-green-500",
    },
    {
      id: 3,
      icon: <Trophy className="w-10 h-10 text-white" />,
      count: 15,
      title: "Years Experience",
      bgColor: "bg-orange-500",
    },
    {
      id: 4,
      icon: <Activity className="w-10 h-10 text-white" />,
      count: 1200,
      title: "Successful Surgeries",
      bgColor: "bg-purple-500",
    },
  ];

  return (
    <div className="my-16 px-4 md:px-12">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-10">
        Our Achievements
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsData.map((stat) => (
          <div
            key={stat.id}
            className={`card ${stat.bgColor} shadow-xl text-white transform hover:scale-105 transition-transform duration-300`}
          >
            <div className="card-body items-center text-center">
              <div className="p-3 bg-white/20 rounded-full mb-2">
                {stat.icon}
              </div>
              <h2 className="card-title text-4xl font-bold">
                <CountUp end={stat.count} duration={3} />+
              </h2>
              <p className="font-medium text-lg">{stat.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
