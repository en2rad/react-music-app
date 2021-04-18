import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Controller, Thumbs } from 'swiper';
import 'swiper/swiper-bundle.css';
// import './styles.css';
import { connect } from 'react-redux';

import { 
  handleProgress, 
} from "../../redux/action";

SwiperCore.use([Navigation, Pagination, Controller, Thumbs]);

function SwiperNew(playerState, playList) {

  const {   
    currentPlayList,
    currentSongIndex,
    playing,
    muted,
    volume,
    played,
    loop,
} = playerState;

  const [thumbsSwiper, setThumbsSwiper] = useState(null);
//   const [controlledSwiper    , seatControlledSwiper] = useState(null);

//   const slides = [];
//   for (let i = 0; i < 5; i += 1) {
//     slides.push(
//         <SwiperSlide key={`slide-${i}`} tag="li">
//             <img
//             src={`https://picsum.photos/id/${i + 1}/500/300`}
//             style={{ listStyle: 'none' }}
//             alt={`Slide ${i}`}
//             />
//         </SwiperSlide>
//     );
//   }


 
  const thumbs = [];
  for (let i = 0; i < 3; i += 1) {
    thumbs.push(
        <SwiperSlide key={`thumb-${i}`} tag="li" style={{ listStyle: 'none' }}>
            <img
            src={`./images/mujuice.jpg`}
            alt={`Thumbnail ${i}`}
            ></img>
        </SwiperSlide>
    );
  }

  const src = "./images/mujuice.jpg"

  return (
    <React.Fragment>
        <div className="lel">
      <Swiper
        id="thumbs"
        spaceBetween={5}
        slidesPerView={3}
        onSwiper={setThumbsSwiper}
      >
        {thumbs}
      </Swiper>

    
	<Swiper
	className="c-player-slider"
	// spaceBetween={10}
	slidesPerView={1}	
	navigation
	pagination
	// onClick={() => onSkipTrack(false)}
	// onSlideChange={() => onSkipTrack()}
	// onSwiper={(swiper) => onSkipTrack(swiper)}
	>
	\

		{/* {currentPlayList.currentSongIndex ?
			<>
			<SwiperSlide slot="container-start" className="c-player-slider__slide" >
			<img className="c-player-info__img" src={currentPlayList.currentSongIndex.img_src} title="img"/>
			</SwiperSlide>
			
			<SwiperSlide slot="wrapper-end" className="c-player-slider__slide" >
				<img className="c-player-info__img" src={currentPlayList.currentSongIndex.img_src} title="img"/>
			</SwiperSlide>


			<SwiperSlide slot="wrapper-end" className="c-player-slider__slide" >
				<img className="c-player-info__img" src={currentPlayList.currentSongIndex.img_src} title="img"/>
			</SwiperSlide>
			</>
			:
			null
		}
	 */}
	</Swiper>


        </div>
    </React.Fragment>
  );
}



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
  }
)(SwiperNew);
