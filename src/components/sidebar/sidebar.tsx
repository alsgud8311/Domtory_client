// Sidebar.tsx
import React, { useEffect, useRef, useState, MouseEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faScrewdriverWrench,
  faCloudMoon,
  faBullhorn,
  faBook,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

type SidebarProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export default function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
  const outside = useRef<HTMLDivElement>(null);
  const [isTermsOpen, setIsTermsOpen] = useState(false);

  useEffect(() => {
    document.addEventListener("mousedown", handleOutside);
    return () => {
      document.removeEventListener("mousedown", handleOutside);
    };
  });

  const toggleSide = () => {
    setIsOpen(false);
  };

  const handleOutside = (e: MouseEvent) => {
    if (outside.current && !outside.current.contains(e.target as Node)) {
      setIsOpen(false);
    }
  };

  const onClickNightOut = () => {
    window.open(
      "http://1.246.219.13:8080/cbhs/indexstdds.html?var1=M000004116",
      "_blank"
    );
  };

  const onClickBooks = () => {
    window.open("http://www.cbhs2.kr/0000038", "_blank");
  };

  const onClickRequestRepair = () => {
    window.open(
      "http://1.246.219.13:8080/cbhs/indexstdds.html?var1=M000004115",
      "_blank"
    );
  };

  return (
    <>
      <div
        id="sidebar"
        ref={outside}
        className={`z-5 p-3 rounded-tl-lg bg-[#efd5b6] h-full w-3/4 fixed right-[-80%] top-0 transition-all duration-500 ease-in-out ${
          isOpen ? "right-0" : "right-[-80%]"
        }`}
      >
        <div className="w-full text-lg p-5 flex justify-between">
          <FontAwesomeIcon
            icon={faBars}
            onClick={toggleSide}
            onKeyDown={toggleSide}
            className="text-3xl"
          />
        </div>
        <Link href="/notice" className="p-5 w-full flex items-center">
          <FontAwesomeIcon icon={faBullhorn} className="pr-5" />
          <div className="text-lg font-bold">공지사항</div>
        </Link>
        {/* 나머지 코드도 동일한 방식으로 변환 */}
      </div>
    </>
  );
}
