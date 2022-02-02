import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FlexBox } from '@lumx/react';
import HeroThumbnail from '../HeroThumbnail';
import { get } from '../../api';

import './index.scss';


const SearchResult = () => {
  const { searchString } = useParams();
  const [searchResult, setSearchResult] = useState(0);

  useEffect(() => {
    const fetchHeroData = async () => {
      try {
        get('/characters', { nameStartsWith: searchString }).then((response) => {
          if (response.data.data.results.length > 0) {
            setSearchResult(response.data.data.results);
          }
        });
      } catch (error) {
        console.log(error);
      }
    };
    if (searchString) {
      fetchHeroData();
    }
  }, [searchString]);
  // const listHeros = searchResult === 0 ? (
  // <HeroThumbnail />
  // ) : Object.values(searchResult).map((data) => {
  //   const imgURL = (data.thumbnail.path && data.thumbnail.extension) ? `${data.thumbnail.path}.${data.thumbnail.extension}` : '';
  //   // const heroData = {
  //   //   id: data.id,
  //   //   name: data.name,
  //   //   description: data.description,
  //   //   imgURL,
  //   // };
  //   const heroData = data;
  //   return (
  // <HeroThumbnail heroData={heroData} />
  //   );
  // });

  const listHeros = Object.values(searchResult).map((data) => (<HeroThumbnail key={data.id} heroData={data} />));


  return (
	<FlexBox wrap="true">
		{listHeros}
	</FlexBox>
  );
};

export default SearchResult;
