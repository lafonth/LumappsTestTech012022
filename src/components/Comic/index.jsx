import React from 'react';

import './index.scss';

import PropTypes from 'prop-types';
import moment from 'moment';


const Comic = ({
  comicData,
}) => {
  const tsOnsaleDate = new Date(Date.parse(comicData.dates.find((comic) => comic.type === 'onsaleDate').date));
  const onsaleDate = moment(tsOnsaleDate).format('DD/MM/YYYY');
  const { price } = comicData.prices.find((date) => date.type === 'printPrice');
  return (
	<div key={comicData.id} className="lumx-spacing-padding-tiny">
		<div className="lumx-typography-subtitle1">
			{comicData.title}
		</div>
		<div>
			On sale:
			{' '}
			{onsaleDate}
		</div>
		<div>
			Price:
			{' '}
			{`$${price}`}
		</div>
	</div>
  );
};
Comic.propTypes = {
  comicData: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    dates: PropTypes.array,
    prices: PropTypes.array,
  }),
};


Comic.defaultProps = {
  comicData: {
    id: 0,
    title: '',
    dates: [],
    prices: [],
  },
};


export default Comic;
