import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div className="mt-3">
      <div className="flex justify-between">
        <h1 className="font-bold text-2xl ml-10">Dibelanjain</h1>
        <h3 className="mr-10 font-semibold text-xl font-mono">
          Login/Register
        </h3>
      </div>
    </div>
  );
}
