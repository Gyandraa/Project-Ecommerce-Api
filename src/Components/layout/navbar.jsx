import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div className="border-2 ">
      <div className="flex justify-between p-5 ">
        <h1 className="font-bold text-2xl p-5 font-sans">Dibelanjain</h1>
        <img
          className="w-15 h-full  rounded-full transition duration-300 cursor-pointer"
          src="/assets/logo-user.jpg"
          alt="logo"
        />
      </div>
    </div>
  );
}
