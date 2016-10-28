import React from 'react';

import Header from './header';
import BinsList from './bins/bins-list';

export default (props) => {
	return (
		<div>
			<Header />
			{props.children}
		</div>
	);
};