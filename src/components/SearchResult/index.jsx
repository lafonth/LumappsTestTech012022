import React from 'react';
import { useParams } from 'react-router-dom';
import HeroThumbnail from '../HeroThumbnail';

const SearchResult = () => {
  const { searchString } = useParams();
  // use API to get a list of result based on name
  const heroIds = [1, 2, 3, 5, 8, 45]; // list of ID of heroes found by the API, maybe get the full object to avoid an other call later?
  const listHeros = heroIds.map((id) => <li><HeroThumbnail heroId={id} /></li>);
  return (
	<ul>
		{listHeros}
	</ul>
  );
};

export default SearchResult;
