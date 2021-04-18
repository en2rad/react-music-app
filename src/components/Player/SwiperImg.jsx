// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import { connect } from 'react-redux';

import { 
    handleAddPlayList
} from "../../redux/action";

import './swiper.css';

function SwiperImg ({src, onSkipTrack}){
  return (
	<>
		<Swiper
        className="c-player-slider"
		// spaceBetween={50}
		slidesPerView={1}	
		onClick={() => onSkipTrack(false)}
		onSlideChange={() => onSkipTrack()}
		onSwiper={(swiper) => onSkipTrack(swiper)}
		>
			<SwiperSlide className="c-player-slider__slide" ><img className="c-player-info__img" src={src} title="img"/></SwiperSlide>
			<SwiperSlide className="c-player-slider__slide" ><img className="c-player-info__img" src={src} title="img"/></SwiperSlide>
			<SwiperSlide className="c-player-slider__slide" ><img className="c-player-info__img" src={src} title="img"/></SwiperSlide>
		</Swiper>
	</>
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
        handleAddPlayList,
    }
)(SwiperImg);