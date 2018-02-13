import React from 'react';
import ReactDOM from 'react-dom';

const API_KEY = 'AIzaSyC_iIT9BWq-ENy8w6DUqY6z_CqmskF0t7Y';

// Create new component. This Component should produce some HTML

const App = () => {

	return <div>Hi!</div>
}

// Take this componnent's generated HTML and put it on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));