import "../styles/Post.css";
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AnalyticsIcon from '@mui/icons-material/Analytics';

function Post({tweetList}){
    return(
        <>
            {tweetList.map((tweet, index) => (
                <div className="post" key={index}>
                    <div className="post-avatar">
                        <img src={tweet.img} alt="Ronaldo DP"/>
                    </div>
                    <div className="post-body">
                        <div className="post-body-header">
                            <h3>{tweet.name} <span className="span-element"> {tweet.verified && <VerifiedIcon className="verified"/> } {tweet.userId} </span></h3>
                        </div>
                        <div className="post-body-description">
                            <p>{tweet.content}</p>
                        </div>
                        {tweet.contentImg === null? "" :<img src={tweet.contentImg} alt="Ronaldo's watch" />}
                        <div className="post-footer">
                            <ChatBubbleOutlineIcon /><p>{tweet.reply}</p>
                            <RepeatIcon /><p>{tweet.retweet}</p>
                            <FavoriteBorderIcon /><p>{tweet.like}</p>
                            <AnalyticsIcon /><p>{tweet.views}</p>
                        </div>  
                    </div>
                </div>
            ))}
        </>
    )
}

export default Post;