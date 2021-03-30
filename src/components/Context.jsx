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
    const [songs, setSongs] = useState(All_song); 
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


    const PickSong = (index) => {
        
        if(currentSongIndex === index) {
            handlePlayPause()
        } else {
            setCurrentSongIndex(index) 
            handlePlayPause()
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
        console.log(songs[currentSongIndex])
        if(songs[currentSongIndex].favorite) {
            setFavoriteSong(favoriteSong.filter(song => song !== songs[currentSongIndex]))
        }
        if(!songs[currentSongIndex].favorite) {
            setFavoriteSong([songs[currentSongIndex], ...favoriteSong])
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
   
    // const handlePlayPause = useCallback(
    //     () => {
    //         setPlayerState( { ...playerState, playing: !playerState.playing })
    //     },
    //     [playerState.playing],
    // );
    
    const handleMuted = () => {
        setPlayerState( { ...playerState, muted: !playerState.muted});
    };

    // const handleMuted = useCallback( 
    //     () => {
    //         setPlayerState( { ...playerState, muted: !playerState.muted })
    //     },
    //     [playerState.muted, playerState.volume],
    // );

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
        }}>
            {children}
        </Provider>
    );
};

export default ContextApp;
