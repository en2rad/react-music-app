import All_song from './songs'

import React, { useState } from 'react';
export const Context = React.createContext({});

const Provider = Context.Provider;

const ContextApp = ({ children }) => {
    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [page, setPage] = useState(true) 
    const [playerState, setPlayerState] = useState({
        playing: false,
        muted: false,
        volume: 1,
        played: 0,
        seeking: false,
        loop: false,
        fovarite: false,
    });

    const [songs, setSongs] = useState(All_song); 

    const [playList, setPlayList]  = useState({
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
            tracks: All_song
        },
    })

    const PickPlayList = (value) => {
        setSongs(value);
        setCurrentSongIndex(0);
    } 

    const PickSong = (index) => {
        if(currentSongIndex === index) {
            handlePlayPause()
        } else {
            setCurrentSongIndex(index) 
            setPlayerState( { ...playerState, playing: true});
        }
    } 

    const handleFovorite = () => {
        if(songs[currentSongIndex].favorite) {
            setPlayList({
                ...playList, 
                    favoritePlayList: {
                        ...playList.favoritePlayList, 
                        tracks: [ ...playList.favoritePlayList.tracks.filter(track => track !== songs[currentSongIndex]) ]
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
            setPlayerState,
            playList,
        }}>
            {children}
        </Provider>
    );
};

export default ContextApp;
