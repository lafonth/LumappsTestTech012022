import React, { useState, useEffect } from 'react';
import {
  useParams, useLocation, useHistory,
} from 'react-router-dom';
import {
  Size, Thumbnail, Button,
} from '@lumx/react';

import moment from 'moment';
import Comic from '../Comic';

import { get } from '../../api';

import './index.scss';
import Stats from '../Stats';


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

    fetchComicsData();
    fetchStatsComicsData();
  }, [heroData.comics.collectionURI, heroId]);
  const listComics = Object.values(latestComics).map((comic) => (<Comic key={comic.id} comicData={comic} />));


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
						When did we see
						{' '}
						{heroData.name}
						{' '}
						in the last 100 comics he/she appears?
					</div>
					{ statsComics !== 0 ? <Stats statsData={statsComics} typeStats="yearBarChart" /> : 'Loading'}
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
