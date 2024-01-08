import Navbar from "./components/Navbar";
import Overview from "./components/Overview";

export default function Home() {
  return (
    <section className="dashboard bg-black_98">
      <Navbar />
      <div className=" p-8">
        <Overview />
      </div>
    </section>
  );
}
