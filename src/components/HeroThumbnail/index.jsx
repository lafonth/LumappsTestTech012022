/* eslint-disable no-mixed-spaces-and-tabs */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

//TODO use https://design.lumapps.com/product/components/image-block/ for the thumbnails

const HeroThumbnail = ({ heroId }) => (

	<Link
		to={`/Hero/${heroId}`}
	>
		{'Hero number '}
		{heroId}
	</Link>
);

HeroThumbnail.propTypes = {
  heroId: PropTypes.number.isRequired,
};

export default HeroThumbnail;
