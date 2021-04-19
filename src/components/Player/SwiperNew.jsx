// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, EffectCoverflow} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
// import 'swiper/swiper.scss';
// import 'swiper/components/navigation/navigation.scss';
// import 'swiper/components/pagination/pagination.scss';
// import 'swiper/components/scrollbar/scrollbar.scss';
import 'swiper/swiper-bundle.css';
// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, EffectCoverflow]);

function SwiperNew() {
	const src = "./images/mujuice.jpg"

  return (
	<div className="wraps">
    <Swiper
	initialSlide={1}
    //   spaceBetween={50}
    centerSlides
 
	  effect="coverflow"
      pagination={{ clickable: true }}
    //   scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
		
			<SwiperSlide >	
				<img
					src={`https://picsum.photos/id/${1}/163/100`}
					alt={`Thumbnail ${1}`}
				>
				</img>
			</SwiperSlide>
			<SwiperSlide initialSlide={1}>	
				<img
					src={`https://picsum.photos/id/${2}/163/100`}
					alt={`Thumbnail ${2}`}
				>
				</img>
			</SwiperSlide>
			<SwiperSlide>	
				<img
					src={`https://picsum.photos/id/${3}/163/100`}
					alt={`Thumbnail ${3}`}
				>
				</img>
			</SwiperSlide>
		
    </Swiper>
	</div>  
  );
};


export default SwiperNew 