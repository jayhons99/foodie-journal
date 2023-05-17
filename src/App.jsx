import Navbar from "./components/Navbar";
import FoodItem from "./components/FoodItem";
import mockData from "../mockData";

function App() {
  const entries = mockData.map((entry) => {
    return <FoodItem key={entry.id} entry={entry} />;
  });
  return (
    <>
      <Navbar />
      <div className="--food-list">{entries}</div>
    </>
  );
}

export default App;
