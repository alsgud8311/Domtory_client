import { HomeIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import dorm from "public/images/dorm.png";
import tools from "public/images/tools.png";
import night from "public/images/night.png";

export default function ShortcutButtons() {
  return (
    <div className="w-full flex justify-center p-2">
      <div className="w-20 flex justify-center flex-col gap-2 items-center">
        <div className="w-[70%] items-center">
          <Image src={dorm} alt="dorm" />
        </div>
        <p>충북학사</p>
      </div>
      <div className="w-20 flex justify-center flex-col gap-2 items-center">
        <div className="w-[70%] items-center">
          <Image src={dorm} alt="dorm" />
        </div>
        <p>충북학사</p>
      </div>
      <div className="w-20 flex justify-center flex-col gap-2 items-center">
        <div className="w-[70%] items-center">
          <Image src={dorm} alt="dorm" />
        </div>
        <p>충북학사</p>
      </div>
      <div className="w-20 flex justify-center flex-col gap-2 items-center">
        <div className="w-[70%] items-center">
          <Image src={dorm} alt="dorm" />
        </div>
        <p>충북학사</p>
      </div>
    </div>
  );
}
