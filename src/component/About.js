import data from "../data";

function About(){
	let {about}=data;

	const aboutD=about.map((d, i) => {
		// console.log(d, i);
		
		return(
			<div key={i} className="txt">
				<p>{d.p1}</p>
				<p className="serif">{d.p2}</p>
			</div>
		)
	});

	return(
		<div className="main-about">
			<div className="main-typo">
				<div><span className="serif">YOUR EFFORTS,</span></div>
				<div><span className="serif">YOUR</span> development</div>
			</div>
			<div className="flex-cont">
				<div className="img">
					<div className="img-wrap scale-ani">
						<img src="/images/main_about1.jpg" alt="main about1" />
					</div>
				</div>
				<div className="con">
					<div className="main-tit serif">curiosity</div>
					{/* <div className="txt">
						<p>새로운 시도를 두려워하지 않고 모르는 것이 있으면 알 때까지 노력하는 개발자입니다.</p>
						<p className="serif">I am a developer who is not afraid to try new things and keeps trying until I figure out what I don't know.</p>
					</div> */}
					{aboutD[0]}
				</div>
			</div>
			<div className="main-typo">
				<div><span className="serif">NEXT MOBILE DEVICE</span></div>
				<div>designdigit</div>
			</div>
			<div className="flex-cont reserve">
				<div className="img">
					<div className="img-wrap scale-ani">
						<img src="/images/main_about2.jpg" alt="main about2" />
					</div>
				</div>
				<div className="con">
					<div className="main-tit serif">Frontend</div>
					{/* <div className="txt">
						<p>빠르게 변하는 웹개발 트랜드 속에서,다양한 시도와 함께 사용자 입장을 고려하며, 성실하게 성장하는 프론트엔드 개발자가 되겠습니다.</p>
						<p className="serif">In the midst of rapidly changing web development trends, I will become a front-end developer who grows faithfully while considering the user's position and making various attempts.</p>
					</div> */}
					{aboutD[1]}
				</div>
			</div>
		</div>
	);
}

export default About;