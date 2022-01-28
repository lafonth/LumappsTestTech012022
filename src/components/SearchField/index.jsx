import React, { useState } from 'react';
import {
  TextField, Theme, Icon, Size, FlexBox, Button, Emphasis,
} from '@lumx/react';
import { mdiMagnify } from '@lumx/icons';

const SearchField = () => {
  const [inputString, setInputString] = useState('');

  const searchItems = (searchString) => {
    console.log(searchString);
    // alert(`Search:${searchString.toString()}`);
  };

  return (
	<FlexBox wrap="False">
		<Button theme={Theme.dark} emphasis={Emphasis.low} onClick={searchItems(inputString)}>
			<Icon icon={mdiMagnify} size={Size.m} />
		</Button>
		<TextField
			clearButtonProps={{ label: 'Clear' }}
			theme={Theme.dark}
			placeholder="Search..."
			onKeyPress={(e) => e.key === 'Enter' && searchItems(inputString)}
			onChange={(e) => setInputString(e)}
		/>
	</FlexBox>

  );
};

export default SearchField;
