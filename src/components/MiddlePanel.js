import "../styles/MiddlePanel.css";
import TweetBox from "./TweetBox";
import Post from "./Post";

function MiddlePanel(){
    return(
        <div className="middle-panel">
            <div className="middle-panel-header">
                <h2>Home</h2>
            </div>
            <TweetBox />
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    );
}

export default MiddlePanel;