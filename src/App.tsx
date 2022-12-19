import React from 'react'

import Banner from './components/Banner';
import Explore from './components/Explore';
import Articles from './components/Articles';

const App = () => (
	<div>
		<div className="w-full max-w-[1300px] my-0 mx-auto flex justify-start flex-wrap items-center p-[50px]">
			<Banner />
			<Explore /> {/* Includes cards of all sorting algorithms and directs the user to the corresponding article inside the page */}
		</div>
		<div className="w-full max-w-[1300px] my-0 mx-auto flex justify-start flex-wrap items-center">
			<Articles />
		</div>
	</div>
)

export default App