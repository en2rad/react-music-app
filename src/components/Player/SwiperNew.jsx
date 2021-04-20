// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, EffectCoverflow} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.css';


SwiperCore.use([Navigation, Pagination, Scrollbar, EffectCoverflow]);

function SwiperNew({src}) {

	return (
		<div className="wraps">
			<Swiper
				initialSlide={1}
				stretch={1}
				slideNextTransitionEnd={() => console.log('slide =>')}
				onSwiper={(swiper) => console.log(swiper)}
				onSlideChange={() => console.log('slide change')}
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
				<SwiperSlide >	
					<img
						src={src}
						alt={`Thumbnail ${1}`}
					>
					</img>
				</SwiperSlide>
				<SwiperSlide initialSlide={1}>	
					<img
						src={src}
						alt={`Thumbnail ${2}`}
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
    	</Swiper>
	</div>  
  );
};


export default SwiperNew 




