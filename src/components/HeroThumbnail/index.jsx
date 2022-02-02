/* eslint-disable no-mixed-spaces-and-tabs */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  FlexBox,
  Size, Thumbnail,
} from '@lumx/react';

// import { Card } from 'react-bootstrap';
import './index.scss';

const HeroThumbnail = ({
  heroId, heroName, heroDescription, heroImgURL,
}) => (
	<FlexBox className="heroItem" key={heroId} wrap="false">
		<Link
			className="imageLink"
			to={`/Hero/${heroId}`}
		>
			<Thumbnail image={heroImgURL} alt="XL" size={Size.xl} />
		</Link>
		<div className="contentHero">
			<Link
				to={`/Hero/${heroId}`}
			>
				<h1>
					{heroName}
				</h1>
			</Link>
			<br />
			{'Description : '}
			<div>
				{heroDescription}
			</div>
		</div>
	</FlexBox>
);


HeroThumbnail.propTypes = {
  heroId: PropTypes.number,
  heroName: PropTypes.string,
  heroDescription: PropTypes.string,
  heroImgURL: PropTypes.string,
};


HeroThumbnail.defaultProps = {
  heroId: 0,
  heroName: '',
  heroDescription: '',
  heroImgURL: '',
};

export default HeroThumbnail;
