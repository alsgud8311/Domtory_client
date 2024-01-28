import Image from "next/image";
import dorm from "public/images/dorm.png";
import tools from "public/images/tools.png";
import night from "public/images/night.png";
import notice from "public/images/announcement.png";
import books from "public/images/books.png";
import Link from "next/link";

export default function ShortcutButtons() {
  return (
    <div className="w-full flex justify-center p-2">
      <div className="w-20 flex justify-center flex-col gap-2 items-center">
        <a
          target="_blank"
          href="http://www.cbhs2.kr/main"
          className="w-[70%] items-center"
        >
          <Image src={dorm} alt="dorm" />
        </a>
        <p>충북학사</p>
      </div>
      <div className="w-20 flex justify-center flex-col gap-2 items-center">
        <a
          target="_blank"
          href="http://1.246.219.13:8080/cbhs/indexstdds.html?var1=M000004116"
          className="w-[70%] items-center"
        >
          <Image src={night} alt="nightOut" />
        </a>
        <p>외박신청</p>
      </div>
      <div className="w-20 flex justify-center flex-col gap-2 items-center">
        <Link href="/notice" className="w-[70%] items-center">
          <Image src={notice} alt="announcement" />
        </Link>
        <p>공지사항</p>
      </div>
      <div className="w-20 flex justify-center flex-col gap-2 items-center">
        <a
          target="_blank"
          href="http://1.246.219.13:8080/cbhs/indexstdds.html?var1=M000004115"
          className="w-[70%] items-center"
        >
          <Image src={tools} alt="tools" />
        </a>
        <p>시설보수</p>
      </div>
      <div className="w-20 flex justify-center flex-col gap-2 items-center">
        <a
          target="_blank"
          href="http://www.cbhs2.kr/0000038#"
          className="w-[70%] items-center"
        >
          <Image src={books} alt="books" />
        </a>
        <p>도서관</p>
      </div>
    </div>
  );
}
