import { Link } from "react-router"

function ProfileCard() {
  return (
    <Link to={'/player'}>
    <div className="w-[150px] sm:w-[170px] md:w-[175px] lg:w-[190px] xl:w-[200px] h-fit flex flex-col items-center mr-[10px] ">
        <div className="w-[100%] flex justify-center "><img className="rounded-full" src="https://lh3.googleusercontent.com/a-/ALV-UjVFEZNLRXQNP8iw2vXja-5C1VSaRH59wP2p4-wxrOJlDExqpqMv=w544-h544-l90-rj" alt="" /></div>
        <div className="flex flex-col items-center text-[14px] sm:text-[15px] md:text-[16px]">
            <p>Josep Abbas</p>
            <p className="text-stone-400 text-[12px] sm:text-[14px] md:text-[15px]">22.3b abone</p>
        </div>
    </div>
    </Link>
  )
}

export default ProfileCard