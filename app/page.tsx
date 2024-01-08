import Navbar from "./components/Navbar";
import Overview from "./components/Overview";
import Transactions from "./components/Transactions";

export default function Home() {
  return (
    <section className="dashboard bg-black_98">
      <Navbar />
      <div className=" p-8 flex flex-col gap-8">
        <Overview />
        <Transactions />
      </div>
    </section>
  );
}
