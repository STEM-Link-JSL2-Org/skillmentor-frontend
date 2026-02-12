import LogoImg from "../assets/logo.png";

export default function NavBar() {
  return (
    <nav className="bg-black w-full">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-5 ">
        
        {/* Left Section */}
        <div className="flex items-center gap-10">
          
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src={LogoImg} className="w-15" />
            <p className="text-xl font-bold text-white">SkillMentor</p>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-6 font-semibold text-white">
            <a href="#" className="hover:text-amber-200 transition">
              Tutors
            </a>
            <a href="#" className="hover:text-amber-200 transition">
              About Us
            </a>
            <a href="#" className="hover:text-amber-200 transition">
              Resources
            </a>
          </div>
        </div>

        {/* Right Section buttons*/}
        <div className="flex items-center font-semibold gap-6">
          <a href="#" className="text-gray-300 hover:text-white transition">
            Login
          </a>

          <button className="bg-yellow-400 text-black font-sans px-5 py-2 rounded-md hover:bg-yellow-300 transition">
            Sign up
          </button>
        </div>

      </div>
    </nav>
  );
}
