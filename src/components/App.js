import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component{

    state = { fetchedVideos: [], selectedVideo: null };

    componentDidMount(){
        this.onTermSubmit('Self Care - Mac Miller')
    }

    onTermSubmit = async term => {
        const response = await youtube.get('/search', { params:{ q:term }});
        this.setState(
            {
                fetchedVideos: response.data.items, 
                selectedVideo: response.data.items[0]
            }
        );
        //console.log(response.data.items);
    }

    onVideoSelect = (video) => {
        console.log("App video:", video);
        this.setState({selectedVideo: video});
    }

    render(){
        return (
        <div className="ui container">
            <SearchBar onFormSubmit={this.onTermSubmit}/>
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column"><VideoDetail  
                        video={this.state.selectedVideo}
                    /></div>
                    <div className="five wide column"><VideoList videos={this.state.fetchedVideos} onVideoSelect={this.onVideoSelect}/></div>
                </div>
            </div>
        </div>
        );
    }
}

export default App;

