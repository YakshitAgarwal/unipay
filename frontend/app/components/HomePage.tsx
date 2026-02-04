import Header from "./Header";
import Hero from "./Hero";

const HomePage = () => {
  return (
    <div className="h-screen overflow-hidden p-8 flex flex-col">
      {/* Header */}
      <div>
        <Header />
      </div>

      {/* Hero Section */}
      <div className="flex-1 relative rounded-2xl my-4 p-8 overflow-hidden bg-linear-to-tr from-slate-950 via-slate-900 to-slate-800">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -left-24 h-84 w-84 rounded-full bg-sky-500/10 blur-3xl" />
          <div className="absolute top-40 right-84 h-84 w-84 rounded-full bg-sky-500/10 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 h-84 w-84 rounded-full bg-emerald-500/10 blur-2xl" />
          <div className="absolute bottom-0 left-60 h-84 w-84 rounded-full bg-emerald-500/10 blur-2xl" />
          <div className="absolute -top-36 left-130 h-84 w-84 rounded-full bg-emerald-500/10 blur-2xl" />
        </div>

        {/* content */}
        <div className="relative z-10">
          <Hero />
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-center items-center gap-8">
        <div>ETHGlobal</div>
        <div>LI.FI</div>
        <div>ENS</div>
      </div>
    </div>
  );
};

export default HomePage;
