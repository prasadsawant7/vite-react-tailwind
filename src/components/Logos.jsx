import viteLogo from "@/assets/vite.svg";
import reactLogo from "@/assets/react.svg";
import tailwindLogo from "@/assets/tailwind.svg";

export default function Logos() {
  return (
    <div className="flex items-center justify-center gap-x-10">
      <a
        href="https://vitejs.dev"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={viteLogo}
          className="h-34 transition-all duration-300 will-change-auto hover:drop-shadow-[0_0_2em_#646cffaa] hover:filter"
          alt="Vite logo"
        />
      </a>
      <a
        href="https://react.dev"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={reactLogo}
          className="animate-spin-slow h-34 transition-all duration-300 will-change-auto hover:drop-shadow-[0_0_2em_#61dafbaa] hover:filter"
          alt="React logo"
        />
      </a>
      <a
        href="https://tailwindcss.com"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={tailwindLogo}
          className="h-30 transition-all duration-300 will-change-auto hover:drop-shadow-[0_0_2em_#06B6D4aa] hover:filter"
          alt="Tailwind logo"
        />
      </a>
    </div>
  );
}
