import Navbar from "./Navbar";
import Image from "next/image";

const Header = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex justify-center items-center">
        <div>
          <Image alt="logo" src="/4.ico" width={80} height={80} />
        </div>
        <div className="text-[30px] font-bold text-emerald-500">
          <span className="text-sky-500">Uni</span>Pay
        </div>
      </div>
      <Navbar />
      <div>Connect Wallet</div>
    </div>
  );
};

export default Header;
