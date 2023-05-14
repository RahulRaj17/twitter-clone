import "../styles/RightPanel.css"
import Search from "./Search";
import Trending from "./Trending";
import Follow from "./Follow";

function RightPanel(){
    return(
        <div className="right-panel">
            <Search />
            <Trending />
            <Follow />
        </div>
    )
}

export default RightPanel;