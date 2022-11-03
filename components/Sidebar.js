import { FaMicrophoneAlt } from "react-icons/fa";
import { RiCompassFill } from "react-icons/ri";
import { HiHome, HiChartBar, HiClock, HiDotsHorizontal } from "react-icons/hi";
import Image from "next/image";

function Sidebar() {
  return (
    <section>
      <div className="fixed top-0 z-40 flex flex-col pt-4  bg-black w-[70px] md:w-[90px] h-screen space-y-8 overflow-hidden hover:w-[270px] hover:z-[100] transition-all duration-300 group/side peer">
        <Image
          src="https://cdn.worldvectorlogo.com/logos/spotify-2.svg"
          width={42}
          height={42}
          objectFit="contain"
          className="ml-[24px] mt-3"
        />
        <div className="flex flex-col">
          <div className="hover:bg-[#333333] w-full h-[55px] relative flex items-center ease-in duration-100 cursor-pointer group/bar">
            <HiHome className="sidebarIcon text-2xl group-hover/bar:text-white/[0.87] transition-colors ml-8" />
            <span className="uppercase absolute left-[110px] text-[#808080] group-hover/bar:text-white/[0.87] transition-colors tracking-wide font-semibold">
              Home
            </span>
          </div>

          <div className="hover:bg-[#333333] w-full h-[55px] relative flex items-center ease-in duration-100 cursor-pointer group/bar">
            <RiCompassFill className="sidebarIcon text-2xl group-hover/bar:text-white/[0.87] transition-colors ml-8" />
            <span className="uppercase absolute left-[110px] text-[#808080] group-hover/bar:text-white/[0.87] transition-colors tracking-wide font-semibold">
              Explore
            </span>
          </div>

          <div className="hover:bg-[#333333] w-full h-[55px] relative flex items-center ease-in duration-100 cursor-pointer group/bar">
            <FaMicrophoneAlt className="sidebarIcon group-hover/bar:text-white/[0.87] transition-colors ml-9" />
            <span className="uppercase absolute left-[110px] text-[#808080] group-hover/bar:text-white/[0.87] transition-colors tracking-wide font-semibold">
              My Library
            </span>
          </div>

          <div className="hover:bg-[#333333] w-full h-[55px] relative flex items-center ease-in duration-100 cursor-pointer group/bar">
            <HiChartBar className="sidebarIcon text-xl group-hover/bar:text-white/[0.87] transition-colors ml-8" />
            <span className="uppercase absolute left-[110px] text-[#808080] group-hover/bar:text-white/[0.87] transition-colors tracking-wide font-semibold">
              Top Charts
            </span>
          </div>

          <div className="hover:bg-[#333333] w-full h-[55px] relative flex items-center ease-in duration-100 cursor-pointer group/bar">
            <HiClock className="sidebarIcon text-xl group-hover/bar:text-white/[0.87] transition-colors ml-8" />
            <span className="uppercase absolute left-[110px] text-[#808080] group-hover/bar:text-white/[0.87] transition-colors tracking-wide font-semibold">
              Trending
            </span>
          </div>

          <div className="hover:bg-[#333333] w-full h-[55px] relative flex items-center ease-in duration-100 cursor-pointer group/bar">
            <HiDotsHorizontal className="sidebarIcon text-xl group-hover/bar:text-white/[0.87] transition-colors ml-8" />
            <span className="uppercase absolute left-[110px] text-[#808080] group-hover/bar:text-white/[0.87] transition-colors tracking-wide font-semibold">
              Account
            </span>
          </div>
        </div>
      </div>

      <div className="w-full h-full z-20 hidden fixed left-0 top-0 bg-black/[0.6] peer-hover:block transition ease-in duration-100"></div>
    </section>
  );
}

export default Sidebar;
