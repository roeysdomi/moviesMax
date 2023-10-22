import { useNavigate } from 'react-router-dom';

export const NavigationBar = () => {

  const navigate = useNavigate();
  const handleLogoClick = () => {
    navigate(`/`);
  }

  return (
    <div className="bar-con bg-black w-full h-[10%]  flex-center-center sticky">
      <div className="bar  w-[95%] h-full flex justify-start items-center">
        <div className="logo text-white text-xl md:text-6xl lg:text-4xl cursor-pointer" onClick={handleLogoClick}>MOVIEMAX</div>
      </div>
    </div>
  );
};
