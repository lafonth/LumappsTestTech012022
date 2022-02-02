import React, { useState, useEffect } from 'react';
import {
  useParams, useLocation, useHistory,
} from 'react-router-dom';
import {
  Size, Thumbnail, Button,
} from '@lumx/react';
import * as d3 from 'd3';
import moment from 'moment';
import Comic from '../Comic';

import { get } from '../../api';

import './index.scss';


// const { heroId } = useParams(); //ID of the hero displayed, needed for the API call

const Hero = () => {
  const { heroId } = useParams();
  const location = useLocation();
  const history = useHistory();
  const [latestComics, setLatestComics] = useState(0);
  const [statsComics, setStatsComics] = useState(0);
  const { heroData } = location.state ? location.state : '';

  useEffect(() => {
    const fetchComicsData = async () => {
      try {
        get(heroData.comics.collectionURI, { orderBy: '-onsaleDate', limit: 4 }).then((res) => {
          if (res.data.data.results.length > 0) {
            setLatestComics(res.data.data.results);
          }
        });
      } catch (error) {
        console.log(error);
      }
    };
    const fetchStatsComicsData = async () => {
      try {
        const today = moment().format('YYYY-MM-DD');
        get(heroData.comics.collectionURI, { orderBy: '-onsaleDate', limit: 100, dateRange: ['1900-01-01', today] }).then((res) => {
          if (res.data.data.results.length > 0) {
            setStatsComics(res.data.data.results);
          }
        });
      } catch (error) {
        console.log(error);
      }
    };

    const displayStats = (dates) => {
      const margin = {
        top: 30, right: 30, bottom: 70, left: 60,
      };
      const width = 460 - margin.left - margin.right;
      const height = 400 - margin.top - margin.bottom;

      const svg = d3.select('#my_dataviz')
        .append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', `translate(${margin.left},${margin.top})`);
      // X axis
      if (listYearComics.length > 0) {
        console.log();
        console.log();
        const yearRange = [Math.min(...listYearComics), Math.max(...listYearComics)];
        const yearAxis = [];
        // eslint-disable-next-line no-plusplus
        const x = d3.scaleBand()
          .range([0, width])
          .domain(yearRange);
        svg.append('g')
          .attr('transform', `translate(0, ${height})`)
          .call(d3.axisBottom(x));
      }
      // Y axis

      // bars
    };
    fetchComicsData();
    fetchStatsComicsData().then(() => displayStats());
  }, [heroData.comics.collectionURI, heroId]);
  const listComics = Object.values(latestComics).map((comic) => (<Comic key={comic.id} comicData={comic} />));
  const listYearComics = Object.values(statsComics).map((comic) => {
    const tsOnsaleDate = new Date(Date.parse(comic.dates.find((date) => date.type === 'onsaleDate').date));
    const onsaleDate = moment(tsOnsaleDate).format('YYYY');
    return onsaleDate;
  });


  return (
	<div>
		{heroData ? (
			<div className="heroDetail">
				<div>
					<Button onClick={history.goBack}>Back to results</Button>
					<div className="lumx-typography-display1">
						{heroData.name}
					</div>
					<div className="justifiedText">
						{heroData.description}
					</div>
				</div>
				<Thumbnail image={heroData.imgURL} alt="XXL" size={Size.xxl} className="imgHero" />
				<div>
					<div className="lumx-typography-headline">
						When did we see him in the last 100 comics he/she appears?
					</div>
					<div id="my_dataviz" />
				</div>
				<div className="latestComicsContainer">
					<div className="lumx-typography-display1">
						Latest comics
					</div>
					<div className="lumx-spacing-padding-huge">
						{ listComics }
					</div>
				</div>
			</div>
		) : (
			<div>
				No hero found with ID
				{' '}
				{heroId}
			</div>
		)}
	</div>
  );
};

export default Hero;
