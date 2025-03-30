export interface stateType {
  isLoading: boolean;
  error: boolean;
  data:any; 
  menu: boolean;
  addPlayList: boolean;
  player: any;
  playLists:playListType[];
  profile:profileType;
  playList:playListType;
}
export interface playListType {
  name:string;
  img:string;
  musics:musicType[]
}
export interface musicType {
  name:string;
  img:string;
}
export interface profileType {
  name:string;
  img:string;
}