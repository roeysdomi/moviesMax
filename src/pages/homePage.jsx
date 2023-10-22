import HomeRouts from "../routing/homeRoutes";
import { NavigationBar } from "../components/specific/NavigationBar";

const HomePage = () => {
  return (
    <div className="home-con full-svh w-full bg-black overflow-x-hidden overflow-y-auto ">
      <NavigationBar />
      <HomeRouts />
    </div>
  );
};

export default HomePage;
