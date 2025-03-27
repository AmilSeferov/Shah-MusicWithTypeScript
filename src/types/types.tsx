export interface stateType {
  isLoading: boolean;
  error: boolean;
  data:any; 
  menu: boolean;
  addPlayList: boolean;
  player: boolean;
  playLists:playListType[]
}
export interface playListType {
  name:string;
  img:string;
}