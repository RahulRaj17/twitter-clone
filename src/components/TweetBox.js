import '../styles/TweetBox.css';

function TweetBox(){
    return(
        <div className="tweet-box">
            <form>
                <div className='tweet-box-input'>
                    <img src="https://pbs.twimg.com/profile_images/1594446880498401282/o4L2z8Ay_400x400.jpg" alt="Ronaldo DP"/>
                    <input type="text" placeholder="What's happening?" />
                </div>
                <button className='tweet-box-button'>Tweet</button>
            </form>
        </div>
    )
}

export default TweetBox;