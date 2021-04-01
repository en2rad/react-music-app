import All_song from './songs'

import React, { useState, useEffect, useCallback } from 'react';
import { CodeSharp } from '@material-ui/icons';
export const Context = React.createContext({});

const Provider = Context.Provider;
const Consumer = Context.Consumer;


const ContextApp = ({ children }) => {
    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [nextSongIndex, setNextSongIndex] = useState(0);
    const [page, setPage] = useState(true)
    // const [songs, setSongs] = useState(All_song); 
    const [playerState, setPlayerState] = useState({
        playing: false,
        muted: false,
        volume: 1,
        played: 0,
        seeking: false,
        loop: false,
        fovarite: false,
    });

    const [favoriteSong, setFavoriteSong]  = useState([	
        {
            title: "Энтропия",
            artist: "Mujuice",
            img_src: "./images/mujuice.jpg",
            src: "./music/Mujuice - Энтропия.mp3",
            favorite: true,
        },
    ])
    
    const [playListIndex, setPlayListIndex] = useState(0);
    const [songs, setSongs] = useState(All_song); 

    const [playList, setPlayList]  = useState({
        favoritePlayList: {
            id: "favoritePlayList",
            title: "Мой любимые",
            img_src: "./images/mujuice.jpg",
            src: "./music/Mujuice - Энтропия.mp3",
            favorite: true,
            tracks: [	{
                title: "VO52-V1M",
                artist: "20syl",
                img_src: "./images/20syl.jpg",
                src: "./music/20syl - VO52-V1M.mp3",
                favorite: false,
            },
            {
                title: "A New Error",
                artist: "Moderat",
                img_src: "./images/moderat.jpg",
                src: "./music/Moderat - A New Error.mp3",
                favorite: false,
            },]
        },
        allSongs: {
            id: "2",
            title: "Вся",
            img_src: "./images/mujuice.jpg",
            src: "./music/Mujuice - Энтропия.mp3",
            favorite: true, 
            tracks: [		
                {
                    title: "VO52-V1M",
                    artist: "20syl",
                    img_src: "./images/20syl.jpg",
                    src: "./music/20syl - VO52-V1M.mp3",
                    favorite: false,
                },
                {
                    title: "A New Error",
                    artist: "Moderat",
                    img_src: "./images/moderat.jpg",
                    src: "./music/Moderat - A New Error.mp3",
                    favorite: false,
                },
                {
                    title: "Энтропия",
                    artist: "Mujuice",
                    img_src: "./images/mujuice.jpg",
                    src: "./music/Mujuice - Энтропия.mp3",
                    favorite: true,
                },
                {
                    title: "Faint",
                    artist: "Quok",
                    img_src: "./images/quok.jpg",
                    src: "./music/Quok - Faint.mp3",
                    favorite: false,
                },
                {
                    title: "Stressed Out",
                    artist: "Twenty One Pilots",
                    img_src: "./images/tw.gif",
                    src: "./music/Twenty One Pilots - Stressed Out.mp3",
                    favorite: false,
                },
                {
                    title: "VO52-V1M",
                    artist: "20syl",
                    img_src: "./images/20syl.jpg",
                    src: "./music/20syl - VO52-V1M.mp3",
                    favorite: false,
                },
                {
                    title: "A New Error",
                    artist: "Moderat",
                    img_src: "./images/moderat.jpg",
                    src: "./music/Moderat - A New Error.mp3",
                    favorite: false,
                },
                {
                    title: "Энтропия",
                    artist: "Mujuice",
                    img_src: "./images/mujuice.jpg",
                    src: "./music/Mujuice - Энтропия.mp3",
                    favorite: true,
                },
                {
                    title: "Faint",
                    artist: "Quok",
                    img_src: "./images/quok.jpg",
                    src: "./music/Quok - Faint.mp3",
                    favorite: false,
                },
                {
                    title: "Stressed Out",
                    artist: "Twenty One Pilots",
                    img_src: "./images/tw.gif",
                    src: "./music/Twenty One Pilots - Stressed Out.mp3",
                    favorite: false,
                },
            ]
        },
    })

    const PickPlayList = (value) => {
        setSongs(value);
    } 


    const PickSong = (index) => {
        if(currentSongIndex === index) {
            handlePlayPause()
        } else {
            setCurrentSongIndex(index) 
            setPlayerState( { ...playerState, playing: true});
        }
    } 

    useEffect(() => {
        setNextSongIndex(() => {
            if (currentSongIndex + 1 > songs.length - 1) {
                return 0;
            } else {
                return currentSongIndex + 1;
            }
        });
    }, [currentSongIndex]);

    const handleFovorite = () => {
        if(songs[currentSongIndex].favorite) {
            setPlayList({
                ...playList, 
                    favoritePlayList: {
                        ...playList.favoritePlayList, 
                        tracks: [ playList.favoritePlayList.tracks.filter(track => track !== songs[currentSongIndex]) ]
                    } 
                })
        }
        if(!songs[currentSongIndex].favorite) {
            setPlayList({
                ...playList, 
                    favoritePlayList: {
                        ...playList.favoritePlayList, 
                        tracks: [ songs[currentSongIndex], ...playList.favoritePlayList.tracks ]
                    } 
                })
        }
        
        const prevState = [...songs]
      

        prevState.forEach(song => {
            return song === songs[currentSongIndex] ? song.favorite = !song.favorite : null
        })
        setSongs([...prevState])    
    }; 

    //true
    // const handleFovorite = () => {
    //     if(songs[currentSongIndex].favorite) {
    //         setFavoriteSong(favoriteSong.filter(song => song !== songs[currentSongIndex]))
    //     }
    //     if(!songs[currentSongIndex].favorite) {
    //         setFavoriteSong([songs[currentSongIndex], ...favoriteSong])
    //     }
        
    //     const prevState = [...songs]
    //     prevState.forEach(song => {
    //         return song === songs[currentSongIndex] ? song.favorite = !song.favorite : null
    //     })
    //     setSongs([...prevState])    
    // }; 



   
    const handlePlayPause = () => {
        setPlayerState( { ...playerState, playing: !playerState.playing });
    };
    
    const handleMuted = () => {
        setPlayerState( { ...playerState, muted: !playerState.muted});
    };

    const handleLoop = () => {
        setPlayerState( { ...playerState, loop: !playerState.loop });
    }; 

    const handleVolumeChange = (ev, newValue) => {
        setPlayerState( { 
            ...playerState, 
            volume: parseFloat(newValue / 100),
            muted: newValue === 0 ? true : false,
        });
    };

    const handleProgress = (changeState) => {
        if(!playerState.seeking) {
            setPlayerState( { ...playerState, ...changeState });
        }
    };

    const handleSeekChange = (ev, newValue) => {
        console.log({ newValue });
        setPlayerState({ ...playerState, played: parseFloat(newValue / 100) });
    };

    const handleSeekMouseDown = (ev) => {
        setPlayerState({ ...playerState, seeking: true });
    };

    const SkipSong = (forwards = true) => {
        if (forwards) {
            setCurrentSongIndex(() => {
                let temp = currentSongIndex;
                temp++;

                if (temp > songs.length - 1) {
                    temp = 0;
                }

                return temp;
            });
        } else {
            setCurrentSongIndex(() => {
                let temp = currentSongIndex;
                temp--;

                if (temp < 0) {
                    temp = songs.length - 1;
                }

                return temp;
            });
        }
    }


    return (
        <Provider value={{
            PickPlayList,
            songs,
            currentSongIndex,

            page,
            setPage,

            currentSongIndex,
            setCurrentSongIndex,

            nextSongIndex,
            setNextSongIndex,

            PickSong,

            playerState,
            setPlayerState,
            handleFovorite,  
            handlePlayPause, 
            handleMuted, 
            handleLoop, 
            handleVolumeChange, 
            handleProgress, 
            handleSeekChange, 
            handleSeekMouseDown, 
            SkipSong,
            setPlayerState,
            songs,
            playerState,

            favoriteSong,
            setPlayerState,
            playList,
        }}>
            {children}
        </Provider>
    );
};

export default ContextApp;
