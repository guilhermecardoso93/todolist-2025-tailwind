import "./App.css";
import { ToDo } from "./components/ToDo";

export function App() {
  return (
    <div className="bg-stone-500 grid py-4 h-screen">
      <ToDo />
    </div>
  );
}
