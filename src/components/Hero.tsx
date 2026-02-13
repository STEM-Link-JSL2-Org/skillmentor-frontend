import { Button } from "./ui/button";

export default function Hero() {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-1 pt-50">
        <p className=" text-5xl md:text-7xl font-medium mb-3">Find your SkillMentor</p>
        <p className="font-normal text-center text-2xl text-gray-400">Empower your career with personalized mentorship for AWS Developer</p>
        <p className="font-normal text-2xl text-center text-gray-400">Associate, Interview Prep, and more.</p>
        <div className="mt-6">
            <Button className="text-black bg-amber-400 text-2xl font-medium px-8 py-6 hover:bg-amber-300 cursor-pointer">Sign up to See All Tutors</Button>
        </div>
    </div>
  )
}
