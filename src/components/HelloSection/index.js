import React, { Fragment } from 'react';
import { bool } from 'prop-types';

import Bride from '@assets/images/eka.jpg';
import Groom from '@assets/images/hakim.jpg';

import { styWrapper } from './styles';

function HelloSection({ isInvitation }) {
  

  return (
	<Fragment>
	  <div id="fh5co-couple" css={styWrapper}>
		<div className="container">
		  <div className="row">
			<div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
			  <h2 className="main-font">Assalamualaikum Wr. Wb</h2>
			  
			  <p className="info">
			  		Maha Suci Allah,
				Yang telah menciptakan makhluknya berpasang-pasangan
				Ya Allah perkenankanlah dan ridhoilah 
				pernikahan kami :
			  </p>
			</div>
		  </div>
		  <div className="couple-wrap">
			<div className="couple-half">
			  <div className="groom">
				<img src={Bride} alt="groom" className="img-responsive" loading="lazy" />
			  </div>
			  <div className="desc-groom">
				<h3 className="main-font">Eka Novitasari</h3>
				<p className="parent-name parent-name__top">
				  Putri Bapak Zainal Arifin <br />& Ibu Rukmi
				</p>
			  </div>
			</div>
			<p className="heart text-center">
			  <i className="icon-heart2"></i>
			</p>
			<div className="and-love">
			  <i>&</i>
			</div>
			<div className="couple-half">
			  <div className="bride">
				<img src={Groom} alt="groom" className="img-responsive" loading="lazy" />
			  </div>
			  <div className="desc-bride">
				<h3 className="main-font">Muhammad Hakim Setyobudi</h3>
				<p className="parent-name">
				  Putra Bapak Asmadi (Alm.) <br />& Ibu Mardiyah
				</p>
			  </div>
			</div>
		  </div>
		</div>
	  </div>
	</Fragment>
  );
}

HelloSection.propTypes = {
  isInvitation: bool.isRequired,
};

export default HelloSection;
