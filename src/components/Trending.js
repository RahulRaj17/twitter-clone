import '../styles/Trending.css';
import TrendingItem from './TrendingItem';

function Trending(){
    return(
        <div className="trending">
            <p>What's Happening?</p>
            <div className="trending-item">
                <TrendingItem />
                <TrendingItem />
                <TrendingItem />
                <TrendingItem />
            </div>
        </div>
    )
}

export default Trending;