import { useSelector } from "react-redux"
import { RootState } from "../redux/store"

function ProfilePage() {
    const data=useSelector((state:RootState)=>state.music.profile)
  return (
    <div className="w-full">
        <img className="w-full h-[350px] text-center" src={data.img} alt="" />
    </div>
  )
}

export default ProfilePage