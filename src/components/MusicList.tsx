import MusicCard from "./MusicCard";

function MusicList() {
  return (
    <div className="flex flex-col w-[100%]" >
        <div className="flex flex-row justify-between w-[100%] py-[10px]">
            <h2 className="text-[30px] font-bold">
            Hip Hop
            </h2>
            <button>Diger</button>
        </div>
      <div className="flex flex-row overflow-x-auto w-[100%] pb-[30px]">
        <MusicCard />
        <MusicCard />
        <MusicCard />
        <MusicCard />
        <MusicCard />
        <MusicCard />
        <MusicCard />
        <MusicCard />
        <MusicCard />
        <MusicCard />
        <MusicCard />
        <MusicCard />
        <MusicCard />
        <MusicCard />
        <MusicCard />
        <MusicCard />
      </div>
    </div>
  );
}

export default MusicList;
