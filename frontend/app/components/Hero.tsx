import { MoveRight, ArrowUpRight } from "lucide-react";
import BlurText from "./ui/BlurText";
import SplitText from "./ui/SplitText";
import ShinyText from "./ui/ShinyText";

const Hero = () => {
  return (
    <div className="flex flex-col gap-2 justify-center items-center my-24">
      <div className="border-[0.25px] border-white rounded-full bg-slate-800">
        <div className="flex justify-center items-center gap-2 py-1 px-3">
          <ShinyText
            text="Unlock Cross-chain Payments!"
            speed={2}
            delay={0}
            color="#b5b5b5"
            shineColor="#ffffff"
            spread={120}
            direction="left"
            yoyo={true}
            pauseOnHover={false}
            disabled={false}
          />
          <span className="text-[#b5b5b5]">
            <MoveRight size={16} />
          </span>
        </div>
      </div>
      <div>
        <BlurText
          text="Multi-chain Payments Unified Instantly"
          delay={200}
          animateBy="words"
          direction="top"
          className="text-[60px] font-bold mt-8"
        />
      </div>
      <div>
        <SplitText
          text="Accept payments in any crypto, from any chain, and settle
          automatically in the asset you choose"
          className="text-[20px] font-medium"
          delay={50}
          duration={1}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
        />
      </div>
      <div className="flex gap-4 mt-10">
        <a
          href="https://t.me/unipayETH_bot"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="relative bg-gray-800 px-4 py-2 rounded-full text-[18px] flex gap-2 justify-center items-center cursor-pointer text-white transition-all duration-300 hover:bg-gray-900 hover:shadow-[0_0_25px_rgba(56,189,248,0.35)] group">
            <span className="relative z-10">Open App</span>
            <span className="relative z-10 group-hover:translate-x-0.5 transition-transform">
              <ArrowUpRight size={18} />
            </span>
            <span className="absolute inset-0 rounded-full opacity-0 bg-linear-to-r from-sky-500/30 to-emerald-500/30 blur-xl transition-opacity duration-300 group-hover:opacity-100" />
          </button>
        </a>

        <button className="bg-white text-gray-800 px-4 py-2 rounded-full text-[18px] cursor-pointer transition-all duration-300 hover:bg-gray-100 hover:shadow-[0_0_20px_rgba(16,185,129,0.35)] hover:-translate-y-0.5">
          Discover More
        </button>
      </div>
    </div>
  );
};

export default Hero;
