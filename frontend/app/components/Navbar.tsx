const Navbar = () => {
  return (
    <div className="flex justify-between gap-8 bg-linear-to-b from-neutral-900 to-slate-800 px-6 py-3 rounded-full font-[550]">
      <div className="relative cursor-pointer group">
        Home
        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 ease-out group-hover:w-full"></span>
      </div>
      <div className="relative cursor-pointer group">
        About
        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 ease-out group-hover:w-full"></span>
      </div>
      <div className="relative cursor-pointer group">
        Contact
        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 ease-out group-hover:w-full"></span>
      </div>
      <div className="relative cursor-pointer group">
        Features
        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 ease-out group-hover:w-full"></span>
      </div>
      <div className="relative cursor-pointer group">
        Sponsors
        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 ease-out group-hover:w-full"></span>
      </div>
      <div className="relative cursor-pointer group">
        FAQ
        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 ease-out group-hover:w-full"></span>
      </div>
    </div>
  );
};

export default Navbar;
