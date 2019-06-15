import React from 'react';

const VideoDetail = ({ video }) => {
    if(!video){
        return <div>Loading default content...</div>;
    }

    return (
    <div>
        <div className="ui embed">
            <iframe src={`http://www.youtube.com/embed/${video.id.videoId}`} title="jsx-a11y/iframe-has-title" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
        <div className="ui segment">
            <h4 className="ui header">{video.snippet.title}</h4>
            <p>{video.snippet.description}</p>
        </div>
    </div>
    );
}

export default VideoDetail;