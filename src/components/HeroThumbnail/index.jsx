/* eslint-disable no-mixed-spaces-and-tabs */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Size, Thumbnail, Button,
} from '@lumx/react';

import './index.scss';

const HeroThumbnail = ({
  heroData,
}) => (
	<div className="heroItem" key={heroData.id} wrap="false">
		<Link
			className="imageLink"
			to={{
			  pathname: `/Hero/${heroData.id}`,
			  state: {
			    heroData,
			  },
			  }}
		>
			<Thumbnail image={heroData.imgURL} alt="XL" size={Size.xl} />
		</Link>
		<div className="contentHero">
			<Link
				to={{
				  pathname: `/Hero/${heroData.id}`,
				  state: {
				    heroData,
				  },
				  }}
				  className="lumx-typography-display1"
			>
				{heroData.name}
			</Link>
			<div className="heroDescription">
				{heroData.description}
			</div>
			<Link
				to={{
				  pathname: `/Hero/${heroData.id}`,
				  state: {
					  heroData,
				  },
				}}
			>
				<Button>See more details</Button>
			</Link>
		</div>
	</div>
);


HeroThumbnail.propTypes = {
  heroData: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    imgURL: PropTypes.string,
	  }),
};


HeroThumbnail.defaultProps = {
  heroData: {
    id: 0,
    name: '',
    description: '',
    imgURL: '',
  },
};

export default HeroThumbnail;
