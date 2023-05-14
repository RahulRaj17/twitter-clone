import "../styles/Post.css";
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AnalyticsIcon from '@mui/icons-material/Analytics';

function Post(){
    return(
        <div className="post">
            <div className="post-avatar">
                <img src="https://pbs.twimg.com/profile_images/1594446880498401282/o4L2z8Ay_400x400.jpg" alt="Ronaldo DP"/>
            </div>
            <div className="post-body">
                <div className="post-body-header">
                    <h3>Cristiano Ronaldo <span class="span-element"><VerifiedIcon className="verified"/>@Cristiano </span></h3>
                </div>
                <div className="post-body-description">
                    <p>Excited to visit the new @_Jacobandcoboutique in Riyad, Saudi Arabia! Thank you Jacob Arabo for the warm welcome.</p>
                </div>
                <img src="https://pbs.twimg.com/media/Fv23YcsaQAEHsgD?format=jpg&name=large" alt="Ronaldo's watch" />
                <div className="post-footer">
                    <ChatBubbleOutlineIcon />
                    <RepeatIcon />
                    <FavoriteBorderIcon />
                    <AnalyticsIcon />
                </div>  
            </div>
            
        </div>
    )
}

export default Post;