import { MoveRight, ArrowUpRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="flex flex-col gap-2 justify-center items-center my-36">
      <div className="border-[0.25px] border-white rounded-full bg-gray-800">
        <div className="flex justify-center items-center gap-2 py-1 px-3">
          <h2 className="text-[15px]">Unlock Cross-chain Payments! </h2>
          <span>
            <MoveRight size={15} />
          </span>
        </div>
      </div>
      <div>
        <h1 className="text-[54px] font-bold mt-8">
          Multi-chain Payments Unified Instantly
        </h1>
      </div>
      <div>
        <h3 className="text-[20px] font-medium">
          Accept payments in any crypto, from any chain, and settle
          automatically in the asset you choose
        </h3>
      </div>
      <div className="flex gap-4 mt-10">
        <div>
          <button className="bg-gray-800 px-4 py-2 rounded-full text-[18px] flex gap-2 justify-center items-center">
            Open App{" "}
            <span>
              <ArrowUpRight size={18} />
            </span>
          </button>
        </div>
        <div>
          <button className="bg-white text-gray-800 px-4 py-2 rounded-full text-[18px]">
            Discover More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
