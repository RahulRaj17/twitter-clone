import VerifiedIcon from '@mui/icons-material/Verified';
import "../styles/Follow.css";

function Profile(){
    return(
        <div className = "profile">
            <img src="https://pbs.twimg.com/profile_images/1594446880498401282/o4L2z8Ay_400x400.jpg" alt="Ronaldo DP"/>
            <div className = "profile-details">
                <p>Cristiano Ronaldo <span className="span-element"><VerifiedIcon className="verified"/></span></p>
                <p className="tweet-id">@Cristiano </p>
            </div>
            <button className="follow-button">Follow</button>
        </div>
    )
}

export default Profile;