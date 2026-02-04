const Navbar = () => {
  return (
    <div className="relative flex justify-between gap-8 px-6 py-3 rounded-full font-[550] bg-linear-to-tr from-slate-950 via-slate-900 to-slate-800 ring-1 ring-white/10 overflow-hidden">
      {/* subtle glows */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute -left-6 top-1/2 -translate-y-1/2
          h-20 w-20 rounded-full bg-sky-500/15 blur-2xl"
        />
        <div
          className="absolute -right-6 top-1/2 -translate-y-1/2
          h-20 w-20 rounded-full bg-emerald-500/20 blur-2xl"
        />
      </div>

      {/* nav items */}
      {["Home", "About", "Contact", "Features", "Sponsors", "FAQ"].map(
        (item) => (
          <div
            key={item}
            className="relative z-10 cursor-pointer group text-white/90 hover:text-white transition"
          >
            {item}
            <span
              className="absolute left-0 -bottom-1 w-0 h-0.5 
              bg-linear-to-r from-sky-400 to-emerald-400
              transition-all duration-300 ease-out group-hover:w-full"
            />
          </div>
        ),
      )}
    </div>
  );
};

export default Navbar;
