import React from 'react';
import { useParams } from 'react-router-dom';


// const { heroId } = useParams(); //ID of the hero displayed, needed for the API call

const Hero = () => {
  const { heroId } = useParams();
  return (
	<div>
		<p>
			Hello
		</p>
		<p>
			{'Your id is '}
			{heroId}
		</p>
	</div>
  );
};

export default Hero;
