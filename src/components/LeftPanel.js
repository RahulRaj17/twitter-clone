import LeftPanelOptions from './LeftPanelOptions';
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import TagIcon from '@mui/icons-material/Tag';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EmailIcon from '@mui/icons-material/Email';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import "../styles/LeftPanel.css";

function LeftPanel(){
    return(
        <div className="left-panel">
            <TwitterIcon className='left-panel-twitter'/>
            <LeftPanelOptions active Icon={HomeIcon} text="Home"/>
            <LeftPanelOptions Icon={TagIcon} text="Explore"/>
            <LeftPanelOptions Icon={NotificationsIcon} text="Notifications"/>
            <LeftPanelOptions Icon={EmailIcon} text="Messages"/>
            <LeftPanelOptions Icon={BookmarkIcon} text="Bookmarks"/>
            <LeftPanelOptions Icon={PermIdentityIcon} text="Profile"/>
            <button className="left-panel-button">Tweet</button>
        </div>
    )
}

export default LeftPanel;