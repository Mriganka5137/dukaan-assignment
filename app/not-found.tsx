import Link from "next/link";
import Navbar from "./components/Navbar";
import Overview from "./components/Overview";
import Transactions from "./components/Transactions";
import Sidebar from "./components/Sidebar";

export default function NotFound() {
  return (
    <>
      <Sidebar />
      <section className="dashboard bg-black_98 h-fit">
        <Navbar />
        <div className=" w-full text-center mx-auto h-screen mt-60">
          <h1 className="text-3xl">
            The requested page is under maintainance !!
          </h1>
          <h3 className=" mt-5 italic">
            Go to the{" "}
            <Link href="/payments" className=" text-primary_blue underline">
              Payments
            </Link>{" "}
            page
          </h3>
        </div>
      </section>
    </>
  );
}
