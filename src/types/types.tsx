export interface stateType {
  isLoading: boolean;
  error: boolean;
  data: any;
  menu: boolean;
  addPlayList: boolean;
  player: any;
  playLists: playListType[];
  profile: profileType;
  playList: playListType;
  selectedMusic:{music: null | musicType;
    toPlayList:boolean
  };
}
export interface playListType {
  name: string;
  img: string;
  musics: musicType[];
}
export interface musicType {
  name: string;
  img: string;
  artists:string
}
export interface profileType {
  name: string;
  img: string;
}
