import Image from "next/image";
import { MdLocalPhone } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import { BsGlobe2 } from "react-icons/bs";

const Logo = () => {
  return (
    <div className="w-full h-[40%] bg-primary_10 flex flex-col justify-center items-center shadow-lg shadow-[#00000065]">
      <div className="w-full h-[82%] flex justify-center items-center">
        <Image
          src="/icons/logo-purehouse-farm.png"
          height={200}
          width={200}
          className="object-cover"
        />
      </div>
      <div className="w-full h-[18%] bg-[#eceff1] text-primary_10 shadow-inner shadow-[#00000065] flex justify-center items-center gap-5">
        <div className="flex justify-center items-center gap-3">
          <MdLocalPhone size={20} />
        </div>
        <div className="flex justify-center items-center gap-3">
          <IoIosMail size={20} />
        </div>
        <div className="flex justify-center items-center gap-3">
          <BsGlobe2 size={15} />
        </div>
      </div>
    </div>
  );
};

export default Logo;
