import Logos from "@/components/Logos";
import { HEADING } from "@/constants/Heading";

function App() {
  return (
    <div className="flex h-[100vh] flex-col items-center justify-center gap-y-10 bg-[#1a1a1a] text-white">
      <Logos />
      <h1 className="text-5xl">{HEADING}</h1>
    </div>
  );
}

export default App;
