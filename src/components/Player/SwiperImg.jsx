// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles

import './swiper.css';

function SwiperImg ({src}){
  return (
	  <>
		<Swiper
		// spaceBetween={50}
		// slidesPerView={3}	
		// onSlideChange={() => console.log('slide change')}
		// onSwiper={(swiper) => console.log(swiper)}
		>
			<SwiperSlide style={{width: '100%'}}><img className="c-player-info__img" src={src} title="img"/></SwiperSlide>
			<SwiperSlide style={{width: '100%'}}><img className="c-player-info__img" src={src} title="img"/></SwiperSlide>
			<SwiperSlide style={{width: '100%'}}><img className="c-player-info__img" src={src} title="img"/></SwiperSlide>
		</Swiper>
	</>
  );
};

export default SwiperImg


