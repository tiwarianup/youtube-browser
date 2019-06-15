import './VideoItem.css';
import React from 'react';

const VideoItem = ({video, onVideoSelect}) => {
    return (
        <div className="video-item item" onClick={() => onVideoSelect(video)}>
            <img className="ui image" src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
            <div className="content">
                <div className="header">{video.snippet.title}</div>
                
            </div>
        </div>
    );
}

export default VideoItem;

/*
<a href={`http://www.youtube.com/watch?v=${vid}`} >
    <p>{title}</p><hr />
    <iframe width="729" height="410" src={`http://www.youtube.com/embed/${vid}`} title="jsx-a11y/iframe-has-title" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</a>

*/
