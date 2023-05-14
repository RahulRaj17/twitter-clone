import "../styles/MiddlePanel.css";
import TweetBox from "./TweetBox";
import Post from "./Post";

function MiddlePanel(){
    return(
        <div className="middle-panel">
            <div className="middle-panel-header">
                <h2>Home</h2>
            </div>
            <div className="middle-panel-seperator">
                <h2 className="for-you">For You</h2>
                <h2 className="following">Following</h2>
            </div>
            <TweetBox />
        </div>
    );
}

export default MiddlePanel;