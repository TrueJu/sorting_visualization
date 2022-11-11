import React from 'react'

import Banner from './components/Banner';
import Explore from './components/Explore';

const App = () => (
	<div className="w-full max-w-[1300px] my-0 mx-auto flex justify-start flex-wrap items-center p-[50px]">
		<Banner />
		<Explore /> {/* Includes cards of all sorting algorithms and directs the user to the corresponding article inside the page */}
  	</div>
)

export default App