
function ProfileCard() {
  return (
    <div className="w-[150px] flex flex-col items-center ">
        <div className="w-[100%] flex justify-center "><img className="rounded-full" src="https://lh3.googleusercontent.com/a-/ALV-UjVFEZNLRXQNP8iw2vXja-5C1VSaRH59wP2p4-wxrOJlDExqpqMv=w544-h544-l90-rj" alt="" /></div>
        <div className="flex flex-col items-center">
            <p>Josep Abbas</p>
            <p className="text-stone-400">22.3b abone</p>
        </div>
    </div>
  )
}

export default ProfileCard