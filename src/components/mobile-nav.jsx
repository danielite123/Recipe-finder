import { useState } from "react";

const MobileNav = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Globe icon is active by default

  const navItems = [
    { icon: "fi fi-rr-home", index: 0 },
    { icon: "fi fi-rr-heart", index: 1 },
    { icon: "fi fi-rr-globe", index: 2, isCenter: true },
    { icon: "fi fi-rr-bookmark", index: 3 },
    { icon: "fi fi-rr-user", index: 4 },
  ];

  return (
    <div className="relative w-full bg-white border-t border-gray-200 min-h-20 px-6 py-3 md:hidden flex items-center justify-between">
      {navItems.map((item) => (
        <button
          key={item.index}
          onClick={() => setActiveIndex(item.index)}
          className="flex items-center justify-center transition-all duration-200"
        >
          {item.isCenter ? (
            <div className="absolute -top-12 w-24  h-24 flex justify-center items-center rounded-full transition-all duration-200 bg-white-smoke text-white">
              <i
                className={`${
                  item.icon
                } text-3xl rounded-full p-5 flex justify-center ${
                  activeIndex === item.index
                    ? "bg-primary"
                    : "bg-white text-primary"
                }`}
              ></i>
            </div>
          ) : (
            <i
              className={`${
                activeIndex === item.index
                  ? item.icon.replace("rr", "sr")
                  : item.icon
              } text-2xl transition-colors duration-200 ${
                activeIndex === item.index
                  ? "text-primary"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            ></i>
          )}
        </button>
      ))}
    </div>
  );
};

export default MobileNav;
