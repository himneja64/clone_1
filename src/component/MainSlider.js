import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import data from "../data";

function MainSlider(){
	let {slider}=data;

	/*
	const imageData=[
		{
			pc: "visual_pc1.jpg",
			mobile: "visual_mobile1.jpg"
		},
		{
			pc: "visual_pc2.jpg",
			mobile: "visual_mobile2.jpg"
		}
	];
	*/

	const imageData=slider.map(d => (
		{
			pc: d.pc,
			mobile: d.mobile
		}
	));

   useEffect(() => {
      let swiperSlides=document.querySelectorAll(".main-slider .swiper-slide");

      swiperSlides.forEach(function(item, i){
         let pc=item.querySelector(".pc");
         let mobile=item.querySelector(".mobile");

         pc.style.backgroundImage=`url(/images/${imageData[i].pc})`;
         mobile.style.backgroundImage=`url(/images/${imageData[i].mobile})`;
      });
   });

	return(
		<div className="main-slider">
			<Swiper
				loop={true}
				speed={1000}
				effect="fade"
				fadeEffect={{
					crossFade: true
				}}
				autoplay={{
					delay: 5000
				}}
				pagination={{
					clickable: true,
					// <div class="swiper-pagination">
					// 		<span class="swiper-pagination-bullet">
					// </div>
					renderBullet: (index, className) => `<span class="${className}">0${index+1}</span>`
				}}
				modules={[ Pagination, Autoplay, EffectFade]}
				className="mainSwiper"
			>
				{
					slider.map((d, i) =>
						<SwiperSlide key={i+1}>
							<a href="" className="custom-hover">
								<div className="visual-tit">
									<p className="serif">{d.p1}</p>
									<h2>{d.h2}</h2>
									{
										d.p2 ? <p>{d.p2}</p> : null
									}
								</div>
								<div className="visual-img pc"></div>
								<div className="visual-img mobile"></div>
							</a>
						</SwiperSlide>
					)
				}
			</Swiper>

			{/*
			<div className="swiper-container mainSwiper">
				<div className="swiper-wrapper">
					<div className="swiper-slide">
						<a href="" className="custom-hover">
							<div className="visual-tit">
								<p className="serif">Discover our Best Seller</p>
								<h2>Purito Seoul</h2>
							</div>
							<div className="visual-img pc"></div>
							<div className="visual-img mobile"></div>
						</a>
					</div>
					<div className="swiper-slide">
						<a href="" className="custom-hover">
							<div className="visual-tit">
								<p className="serif">Filling empty space with value</p>
								<h2>GONGANGIROK</h2>
								<p>Maintenance 2022</p>
							</div>
							<div className="visual-img pc"></div>
							<div className="visual-img mobile"></div>
						</a>
					</div>
					<div className="scroll-down">
						Scroll Down <div className="bounce">↓</div>
					</div>
				</div>
			</div>
			<div className="swiper-pagination"></div>
			*/}
		</div>
	);
}

export default MainSlider;