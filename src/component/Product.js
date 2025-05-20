import data from "../data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

function Product(){
	let {portfolio}=data;

	return(
		<div className="main-product">
			<div className="main-tit serif">Our Portfolio</div>
			<Swiper
				loop={true}
				speed={2000}
				slidesPerView={1.5}
				centeredSlides={true}
				spaceBetween={20}
				autoplay= {{
					delay: 2000
				}}
				breakpoints={{
					769: {
							slidesPerView: 3,
							spaceBetween: 20
						},
						1025: {
							slidesPerView: 4.5,
							spaceBetween: 50
						}
				}}
				modules={{Autoplay}}
				className="productSwiper"
			>
				{
				[...portfolio, ...portfolio].map((d, i) =>
					<SwiperSlide key={i+1}>
						<div className="porduct" >
							<div className="thumb">
								<a href=""><img src={`/images/${d.image}`} alt={d.alt} /></a>
							</div>
							<div className="desc">
								<div className="name serif">{d.title}</div>
								<p>
									{
										d.description.map((e, j) =>
											<span key={j+1}>{e}</span>
										)
									}
								</p>
								<a href="" className="btn">View More</a>
							</div>
						</div>
					</SwiperSlide>
				)
				}
			</Swiper>
		</div>
	);
}

export default Product;