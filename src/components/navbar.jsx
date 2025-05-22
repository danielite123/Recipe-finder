import { Heart, Search, UserRound } from "lucide-react";

const Navbar = () => {
  return (
    <div className="flex flex-row items-center justify-between font-urbanist bg-primary min-h-16 p-4 md:px-10 lg:px-18 w-full">
      <div className="w-full flex flex-col gap-3 items-center md:items-start text-center md:text-left">
        <h1 className="font-bold text-[26px]">
          Recipe <span className="font-medium">finder</span>
        </h1>

        <div className="w-full relative flex items-center md:hidden">
          <input
            name="search"
            type="text"
            placeholder="Search recipes"
            className="w-full pl-10 pr-4 py-2 bg-white rounded-md placeholder:text-quick-silver outline-none"
          />
          <Search
            size={22}
            className="absolute left-3 text-quick-silver pointer-events-none"
          />
        </div>
      </div>

      <div className="hidden md:flex flex-row items-center gap-8">
        <Search />
        <Heart />
        <UserRound />
      </div>
    </div>
  );
};

export default Navbar;
