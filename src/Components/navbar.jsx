import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div className="border-2 ">
      <div className="flex justify-between p-5 ">
        <h1 className="font-bold text-2xl ml-10 font-sans">Dibelanjain</h1>
        <h3 className="mr-10 font-semibold text-xl font-mono">
          Login/Register
        </h3>
      </div>
    </div>
  );
}
