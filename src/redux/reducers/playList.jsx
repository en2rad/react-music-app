import { LIKE_TRACK } from '../actionTypes'
import allSongs from '../../components/songs'

const initState  = {
    favoritePlayList: {
        id: "favoritePlayList",
        title: "Мой любимые",
        img_src: "./images/mujuice.jpg",
        src: "./music/Mujuice - Энтропия.mp3",
        favorite: true,
        tracks: []
    },
    allSongs: {
        id: "2",
        title: "Вся",
        img_src: "./images/mujuice.jpg",
        src: "./music/Mujuice - Энтропия.mp3",
        favorite: true, 
        tracks: allSongs
    },
};

const playList = (state = initState, action) => {
    const { type, payload } = action;

    switch(type) {
        case LIKE_TRACK:  {
            
            const { newValue } = payload;
            const value = { ...newValue, favorite: !newValue.favorite}
            if( newValue.favorite ) {
                return {
                    ...state,
                    favoritePlayList: {
                        ...state.favoritePlayList,
                        tracks: state.favoritePlayList.tracks.filter(item => item !== newValue)
                    },
                    allSongs: {
                        ...state.allSongs,
                        tracks: [ ...state.allSongs.tracks.map(item => {
                            if(item === newValue) {
                                return {
                                    ...item,
                                    favorite: !item.favorite,
                                }
                            }
                            return item;
                        })]
                    }
                }   
            } 
            if( !newValue.favorite ) {
                return {
                    ...state,
                    favoritePlayList: {
                        ...state.favoritePlayList,
                        tracks: [...state.favoritePlayList.tracks, value]
                    },
                    allSongs: {
                        ...state.allSongs,
                        tracks: [ ...state.allSongs.tracks.map(item => {
                            if(item === newValue) {
                                return {
                                    ...item,
                                    favorite: !item.favorite,
                                }
                            }
                            return item;
                        })]
                    }
                }
            }         
        }

        default: {
            return state;
        }
    }
};  

export default playList;