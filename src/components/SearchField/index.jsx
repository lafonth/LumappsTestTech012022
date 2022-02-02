import React, { useState } from 'react';
import { useHistory } from 'react-router';
import {
  TextField, Theme, Icon, Size, FlexBox, Button, Emphasis,
} from '@lumx/react';
import { mdiMagnify } from '@lumx/icons';

const SearchField = () => {
  const [inputString, setInputString] = useState('');
  const history = useHistory();
  const searchItems = (search) => {
    if (search) {
      history.push({
        pathname: `/SearchResult/${search}`,
      });
    }
  };

  return (
	<FlexBox wrap="False">
		{/* <Link to={`/SearchResult/${inputString}`}> */}
		<Button theme={Theme.dark} emphasis={Emphasis.low} onClick={() => searchItems(inputString)}>
			<Icon icon={mdiMagnify} size={Size.m} />
		</Button>
		{/* </Link> */}
		<TextField
			theme={Theme.dark}
			placeholder="Search..."
			onKeyPress={(e) => e.key === 'Enter' && searchItems(inputString)}
			onChange={(e) => setInputString(e)}
		/>
	</FlexBox>

  );
};

export default SearchField;
