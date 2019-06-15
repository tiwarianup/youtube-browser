import axios from 'axios';

const KEY = "AIzaSyB_Phc4M5awSRKXVQMBKq7U-bIQKAjTq6E";

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        maxResults: 15,
        key: KEY
    }
});