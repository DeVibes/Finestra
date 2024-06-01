import Image from "next/image";
import FinButton from "../components/FinButton";

const WelcomePage = () => {
  const centerElementStyle =
    "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2/3 lg:w-1/3 xl:w-1/4 h-2/3 flex flex-col justify-between text-center glass-effect p-4";
  return (
    <div className={centerElementStyle}>
      <p className="h-1/6 flex justify-center items-end text-5xl">Finestra</p>
      <div className="relative w-full h-1/2">
        <Image
          src="/wbg.png"
          priority={true}
          alt="logo"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <p className="my-3">A window to your account.</p>
      <FinButton className="w-full h-14">
        <a href="/api/login" className="h-full flex justify-center items-center">Lets start</a>
      </FinButton>
    </div>
  );
};

export default WelcomePage;
