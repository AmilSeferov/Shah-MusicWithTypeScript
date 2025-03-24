import { Link } from "react-router"

function ProfileCard({data}:{data:any}) {
  return (
    <Link to={'/player'}>
    <div className="w-[150px] sm:w-[170px] md:w-[175px] lg:w-[190px] xl:w-[200px] h-fit flex flex-col items-center mr-[10px] ">
        <div className="w-[100%] flex justify-center "><img className="rounded-full w-[100%] h-[150px] sm:h-[170px] md:h-[175px] lg:h-[190px] xl:h-[200px] " src={data?.data.visuals.avatarImage?.sources[0].url?data?.data.visuals.avatarImage?.sources[0].url:"https://lh3.googleusercontent.com/a-/ALV-UjVFEZNLRXQNP8iw2vXja-5C1VSaRH59wP2p4-wxrOJlDExqpqMv=w544-h544-l90-rj" }  alt="" /></div>
        <div className="flex flex-col items-center text-[14px] sm:text-[15px] md:text-[16px]">
            <p>{data?.data.profile.name?data?.data.profile.name:'Private'}</p>
            <p className="text-stone-400 text-[12px] sm:text-[14px] md:text-[15px]">22.3b abone</p>
        </div>
    </div>
    </Link>
  )
}

export default ProfileCard