import DailyMenuCard from "@/components/Main/DailyMenucard";
import ShortcutButtons from "@/components/Main/ShortcutButtons";

const Home = () => {
  return (
    <>
      <main className="flex lg:hidden w-full items-center">
        <div className="w-full flex flex-col justify-center items-center">
          <DailyMenuCard />
          <ShortcutButtons />
        </div>
      </main>
      <main className="lg:flex hidden w-full flex-col">
        <div className="w-[50%] flex flex-col justify-start">
          <DailyMenuCard />
          <ShortcutButtons />
        </div>
      </main>
    </>
  );
};

export default Home;
