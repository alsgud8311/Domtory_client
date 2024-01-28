import DailyMenuCard from "@/components/Main/DailyMenucard";
import ShortcutButtons from "@/components/Main/ShortcutButtons";

const Home = () => {
  return (
    <>
      <main className="w-full flex sm:hidden items-center">
        <div className="w-full flex flex-col justify-center items-center">
          <DailyMenuCard />
          <ShortcutButtons />
        </div>
      </main>
      <main className="w-full hidden sm:flex flex-col">
        <div className="w-1/2">
          <DailyMenuCard />
          <ShortcutButtons />
        </div>
      </main>
    </>
  );
};

export default Home;
