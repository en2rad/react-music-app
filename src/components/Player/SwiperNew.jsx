// import Swiper core and required modules
import React, { useEffect, useState } from 'react'
import SwiperCore, { Navigation, Pagination, Scrollbar, EffectCoverflow} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.css';

import { connect } from 'react-redux';

import { 
    handlePickPlayList, 
    handleProgress, 
    handleSeekMouseUp, 
    handleSeekChange, 
    handleSkipTrack 
} from "../../redux/action";



SwiperCore.use([Navigation, Pagination, Scrollbar, EffectCoverflow]);

function SwiperNew({playerState,  onSkipTrack}) {
	const {
		currentPlayList,
		currentSongIndex,
		prevSongIndex,
		nextSongIndex,
		playing,
		muted,
		volume,
		played,
		seeking,
		loop,
		infoPlayList,
		fovarite,
	} = playerState

	// const src = currentPlayList[currentSongIndex].img_src
	// const prevSrc = currentPlayList[prevSongIndex].img_src
	// const nextSrc = currentPlayList[nextSongIndex].img_src

	// next
	// prev
	const [state,setState] = useState({
		cuRsrc: null,
		prevSrc: null,
		nextSrc: null,
	})

	useEffect(() => {
		setState({
			cuRsrc: currentPlayList[currentSongIndex]?.img_src, 
			prevSrc: currentPlayList[prevSongIndex]?.img_src,
			nextSrc: currentPlayList[nextSongIndex]?.img_src,
		})
	},[playerState])

	function onChange(val) {
		const a = val === 'next' ? true : false
		onSkipTrack(a)
	}

	return (
		<div className="wraps">
			<Swiper
				initialSlide={1}
				stretch={1}
				onSlideChange={(swiper) => onChange(swiper.swipeDirection)}
				
				effect="coverflow"
				grabCursor={true}
				centeredSlides={true}
				slidesPerView="auto"
				coverflowEffect={{
					rotate: 50,
					stretch: 0,
					depth: 120,
					modifier: 1,
					slideShadows: true
				}}
   			>
				{/* <SwiperSlide>	
					<img
						src={src}
						alt={`Thumbnail ${3}`}
					>
					</img>
				</SwiperSlide>	
				<SwiperSlide>	
					<img
						src={src}
						alt={`Thumbnail ${3}`}
					>
					</img>
				</SwiperSlide>	
				<SwiperSlide>	
					<img
						src={src}
						alt={`Thumbnail ${3}`}
					>
					</img>
				</SwiperSlide>	 */}
			
				
					<SwiperSlide >	
						<img
							src={state.prevSrc}
							alt={`Thumbnail ${1}`}
						>
						</img>
					</SwiperSlide>
			
						<SwiperSlide>	
							<img
								src={state.cuRsrc}
								alt={`Thumbnail ${2}`}
							>
							</img>
						</SwiperSlide>
			
						<SwiperSlide>	
							<img
								src={state.nextSrc}
								alt={`Thumbnail ${3}`}
							>
							</img>
						</SwiperSlide>	
				
			
    		</Swiper>
		</div>  
  	);
};

const mapStateToProps = (store) => {
    const { playList } = store;
    const { playerState } = store;
    return {
        playerState: playerState,
        playList: playList,
    };
};

export default connect(
    mapStateToProps, 
    { 
        handleProgress, 
        handleSeekMouseUp, 
        handleSeekChange, 
        handleSkipTrack, 
        handlePickPlayList 
    }
)(SwiperNew);


