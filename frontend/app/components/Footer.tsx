import Image from "next/image";
import ShinyText from "./ui/ShinyText";

const Footer = () => {
  return (
    <div className="flex justify-center items-center gap-16 mt-4">
      <div className="flex justify-center items-center gap-2">
        <Image alt="ethglobal" src="/ethglobal.png" width={48} height={48} />
        <ShinyText
          text="ETHGlobal"
          speed={2}
          delay={0}
          color="#b5b5b5"
          shineColor="#ffffff"
          spread={120}
          direction="left"
          yoyo={true}
          pauseOnHover={false}
          disabled={false}
          className="text-[24px]"
        />
      </div>
      <div className="flex justify-center items-center">
        <Image alt="lifi" src="/li.png" width={64} height={64} />
        <ShinyText
          text="LI.FI"
          speed={2}
          delay={0}
          color="#b5b5b5"
          shineColor="#ffffff"
          spread={120}
          direction="left"
          yoyo={true}
          pauseOnHover={false}
          disabled={false}
          className="text-[24px]"
        />
      </div>
      <div className="flex justify-center items-center">
        <Image alt="ens" src="/ens.png" width={60} height={60} />
        <ShinyText
          text="ENS"
          speed={2}
          delay={0}
          color="#b5b5b5"
          shineColor="#ffffff"
          spread={120}
          direction="left"
          yoyo={true}
          pauseOnHover={false}
          disabled={false}
          className="text-[24px]"
        />
      </div>
    </div>
  );
};

export default Footer;
