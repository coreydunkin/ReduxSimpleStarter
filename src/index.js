import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader'

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyC_iIT9BWq-ENy8w6DUqY6z_CqmskF0t7Y';

// Create new component. This Component should produce some HTML

const App = () => {

	return (
		<div>
		<h1>HELLO!!!?</h1>
			<SearchBar />
		</div>
	);

}

// Take this componnent's generated HTML and put it on the page (in the DOM)

ReactDOM.render(<AppContainer><App /></AppContainer>, document.querySelector('.container'));

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./App', () => {
    render(App)
  })
}