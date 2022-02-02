import React from 'react';
import {
  useParams, useLocation, useHistory,
} from 'react-router-dom';
import {
  Size, Thumbnail, Button,
} from '@lumx/react';

import './index.scss';


// const { heroId } = useParams(); //ID of the hero displayed, needed for the API call

const Hero = () => {
  const { heroId } = useParams();
  const location = useLocation();
  const history = useHistory();
  const { heroData } = location.state ? location.state : '';
  // Check if data available
  if (heroData) {
    // if it is, use it
    const imgURL = (heroData.thumbnail.path && heroData.thumbnail.extension) ? `${heroData.thumbnail.path}.${heroData.thumbnail.extension}` : '';

    return (
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
		<Thumbnail image={imgURL} alt="XXL" size={Size.xxl} />
		<div>
			<div className="lumx-typography-display1">
				Stats
			</div>
			<div className="justifiedText">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum velit euismod in pellentesque. Laoreet non curabitur gravida arcu. Magna fermentum iaculis eu non diam phasellus vestibulum lorem. Ultrices tincidunt arcu non sodales neque sodales. Enim diam vulputate ut pharetra sit amet. Tellus cras adipiscing enim eu turpis. Natoque penatibus et magnis dis parturient. Eleifend quam adipiscing vitae proin. At in tellus integer feugiat scelerisque varius morbi enim. Sodales ut eu sem integer vitae justo. Lectus urna duis convallis convallis tellus.

				In nulla posuere sollicitudin aliquam ultrices sagittis. Eleifend quam adipiscing vitae proin sagittis. Amet massa vitae tortor condimentum lacinia. Leo integer malesuada nunc vel risus commodo viverra. Tempus imperdiet nulla malesuada pellentesque elit eget gravida. Pharetra pharetra massa massa ultricies mi quis hendrerit dolor magna. Egestas sed tempus urna et pharetra pharetra massa massa. Elementum sagittis vitae et leo duis ut. Et netus et malesuada fames ac. Volutpat est velit egestas dui id ornare arcu. Eget mi proin sed libero enim sed faucibus turpis. Dapibus ultrices in iaculis nunc sed augue. Consequat interdum varius sit amet mattis vulputate enim. Ultricies tristique nulla aliquet enim tortor at. Eu volutpat odio facilisis mauris sit amet massa vitae tortor. Ut etiam sit amet nisl purus in mollis nunc. Aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Tortor at auctor urna nunc. A iaculis at erat pellentesque adipiscing commodo elit at. Lectus mauris ultrices eros in.

				Viverra vitae congue eu consequat ac felis donec et. Lectus sit amet est placerat. At urna condimentum mattis pellentesque id nibh tortor id. A pellentesque sit amet porttitor eget dolor morbi. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi. In cursus turpis massa tincidunt dui. Et ultrices neque ornare aenean euismod elementum nisi. Neque viverra justo nec ultrices. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Sagittis aliquam malesuada bibendum arcu vitae elementum. Cras ornare arcu dui vivamus. Facilisis magna etiam tempor orci eu lobortis elementum nibh tellus.

				Semper viverra nam libero justo. Vitae tempus quam pellentesque nec nam aliquam. Non enim praesent elementum facilisis leo vel fringilla est ullamcorper. Ultrices dui sapien eget mi proin. Mauris nunc congue nisi vitae suscipit tellus. Gravida neque convallis a cras semper auctor neque. Sit amet aliquam id diam maecenas ultricies mi eget. Gravida dictum fusce ut placerat orci nulla pellentesque. Risus pretium quam vulputate dignissim suspendisse in est ante in. Egestas egestas fringilla phasellus faucibus. Aliquet lectus proin nibh nisl condimentum id venenatis a. Faucibus interdum posuere lorem ipsum. Vel facilisis volutpat est velit.

				Metus aliquam eleifend mi in nulla. Risus in hendrerit gravida rutrum. Sed viverra ipsum nunc aliquet. Id eu nisl nunc mi ipsum. Massa tincidunt dui ut ornare lectus sit amet. Volutpat odio facilisis mauris sit amet massa. Vitae tortor condimentum lacinia quis vel eros. In nibh mauris cursus mattis molestie a iaculis. Facilisis gravida neque convallis a cras semper. Semper auctor neque vitae tempus.
			</div>
		</div>
		<div className="latestComicsContainer">
			<div className="lumx-typography-display1">
				Latest comics
			</div>
		</div>
	</div>
    );
  }
  // if it is not, call API (TODO)
  return (
	<div>
		No hero found with ID
		{' '}
		{heroId}
	</div>
  );
};

export default Hero;
