import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_details';
const API_KEY = 'AIzaSyC_iIT9BWq-ENy8w6DUqY6z_CqmskF0t7Y';



class App extends Component {

	constructor(props) {
		super(props);

		this.state = { videos: [],
			selectedVideo: null
		};



		YTSearch({key: API_KEY, term: 'Caitlin Jinks'}, (videos) => {
			this.setState({ 
				videos: videos,
				selectedVideo: videos[0]
			});
			// this.setState({ videos: videos });
		});
	}
 
	render() {
		return (
			<div>
				<SearchBar />
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList 
					onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
					videos={this.state.videos} />
			</div>
		);	
	}
}


ReactDOM.render(<AppContainer><App /></AppContainer>, document.querySelector('.container'));

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./App', () => {
    render(App)
  })
}