import Sidebar from "./components/Sidebar";

export default function Home() {
  return (
    <main className=" w-screen h-screen flex">
      <Sidebar />
      <div className="dashboard"></div>
    </main>
  );
}
