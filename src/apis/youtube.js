import axios from "axios";

const KEY = "AIzaSyBo00y1YAv6RazQixk1IRi9WF3xmmUPhGI";
// npm install axios@0.18.1

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
