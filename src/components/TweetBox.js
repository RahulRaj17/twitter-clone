import { useState } from 'react';
import '../styles/TweetBox.css';
import Post from './Post';

function TweetBox(){

    const [tweetList, setTweetList] = useState([{
        img : "https://pbs.twimg.com/profile_images/1594446880498401282/o4L2z8Ay_400x400.jpg",
        name : "Cristiano Ronaldo",
        verified : true,
        userId : "@Cristiano",
        content : "Excited to visit the new @_Jacobandcoboutique in Riyad, Saudi Arabia! Thank you Jacob Arabo for the warm welcome.",
        contentImg : "https://pbs.twimg.com/media/Fv23YcsaQAEHsgD?format=jpg&name=large",
        reply : "10.4k",
        retweet : "10.4k",
        like : "10.4k",
        views : "10.4k"
    }, {
        img : "https://pbs.twimg.com/profile_images/1594446880498401282/o4L2z8Ay_400x400.jpg",
        name : "Cristiano Ronaldo",
        verified : true,
        userId : "@Cristiano",
        content : "Excited to visit the new @_Jacobandcoboutique in Riyad, Saudi Arabia! Thank you Jacob Arabo for the warm welcome.",
        contentImg : null,
        reply : "10.4k",
        retweet : "10.4k",
        like : "10.4k",
        views : "10.4k"
    }]);

    const [tweet, setTweet] = useState("");

    function handleClick(event){
        event.preventDefault();
        const newTweet = {
            img : "https://pbs.twimg.com/profile_images/1594446880498401282/o4L2z8Ay_400x400.jpg",
            name : "Cristiano Ronaldo",
            verified : true,
            userId : "@Cristiano",
            content : tweet,
            contentImg : null,
            reply : "10.4k",
            retweet : "10.4k",
            like : "10.4k",
            views : "10.4k"
        }
        const updatedTweetList = [newTweet, ...tweetList];
        setTweetList(updatedTweetList);
        setTweet("");
    }

    

    return(
        <>
            <div className="tweet-box">
                <form>
                    <div className='tweet-box-input'>
                        <img src="https://pbs.twimg.com/profile_images/1594446880498401282/o4L2z8Ay_400x400.jpg" alt="Ronaldo DP"/>
                        <input type="text" placeholder="What's happening?" value={tweet} onChange={(event) => setTweet(event.target.value)}/>
                    </div>
                    <button className='tweet-box-button' onClick={handleClick}>Tweet</button>
                </form>
            </div>
            <Post tweetList={tweetList}/>
        </>
    )
}

export default TweetBox;