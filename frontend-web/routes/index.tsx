import MainLayout from "../components/MainLayout.tsx";
import data from "../data/example.ts";
import dailyData from "../data/index.ts";

export default function Home() {
  const dates = Object.keys(dailyData).toSorted();
  return <MainLayout data={data} />;
}
