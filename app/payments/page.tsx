import Navbar from "../components/Navbar";
import Overview from "../components/Overview";
import Sidebar from "../components/Sidebar";
import Transactions from "../components/Transactions";

export default function Home() {
  return (
    <>
      <Sidebar />
      <section className="dashboard bg-black_98 h-fit">
        <Navbar />
        <div className=" p-8 flex flex-col gap-8">
          <Overview />
          <Transactions />
        </div>
      </section>
    </>
  );
}
