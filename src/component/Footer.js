import data from "../data";

function Footer(){
	let {footer}=data;
	// console.log(footer);
	
	let footerData = footer.info.map((d, i) => {
    return (
			<div key={i} className="ft-info">
				<p>
						<span><strong>{d.label[0]}</strong>{d.label[1]}</span>
						<span><strong>{d.description[0]}</strong>{d.description[1]}</span>
				</p>
			</div>
    );
	});


	return(
		<>
			<div className="footer">
				<div className="ft-wrap">
					<div className="ft-left">
						<div className="ft-logo">
							<a href="">designdigit</a>
						</div>
						{footerData}
						<p className="copyright">{footer.copyright}</p> {/* COPYRIGHT을 따로 렌더링 */}
					</div>
					<div className="ft-right">
						<div className="ft-link">
							<a href="">About Us</a>
							<a href="" className="privacy-btn"><strong>개인정보처리방침</strong></a>
						</div>
						<div className="ft-sns">
							<a href=""><i className="xi-linkedin"></i></a>
							<a href=""><i className="xi-facebook-official"></i></a>
						</div>
					</div>
				</div>
    	</div>
			<div id="custom-cursor">
				<div className="custom-hover-circle"></div>
			</div>
			<div id="custom-cursor-text">
				<div className="custom-hover-text"><span className="serif">View More</span></div>
			</div>
			<div id="page-top">
				<button type="button" className="btn-top"><span className="serif">TOP</span></button>
			</div>
		</>
	);
}

export default Footer;