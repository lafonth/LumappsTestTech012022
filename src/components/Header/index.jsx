import React from 'react';
import { FlexBox, Alignment } from '@lumx/react';
import { NavLink } from 'react-router-dom';
import SearchField from '../SearchField';

const Header = () => (
	<header className="lumx-spacing-padding-big header">
		<FlexBox wrap="false" className="spaceBetween">
			<NavLink to="/">
				<img className="marvel" src="/Marvel_Logo.svg" alt="Marvel Logo" />
			</NavLink>
			<SearchField />
		</FlexBox>
	</header>
);

export default Header;
