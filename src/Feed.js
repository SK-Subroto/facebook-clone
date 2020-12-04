import React, { useState, useEffect } from 'react';
import "./Feed.css";
import MessageSender from './MessageSender';
import Post from './Post';
import StoryReel from './StoryReel';
import db from "./firebase";

function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
            setPosts(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })))
        })
    }, [])

    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />

            {posts.map((post) => (
                <Post 
                    key={post.id}
                    profilePic={post.data.profilePic}
                    message={post.data.message}
                    timestamp={post.data.timestamp}
                    username={post.data.username}
                    image={post.data.image}
                /> 
            ))}

            {/* <Post 
                profilePic="https://upload.wikimedia.org/wikipedia/commons/8/86/SRK_at_61st_filmfare.jpg"
                message="Hello guyzzz"
                timestamp="12:00 pm"
                username="Shah Rukh Khan"
                image="https://upload.wikimedia.org/wikipedia/commons/b/b0/Lion-nelson-column-trafalgar-london-uk.jpg"
            />
            <Post 
                profilePic="https://upload.wikimedia.org/wikipedia/commons/1/1e/Deepika_p_Lux-Award_2016.jpg"
                message="Party Night..☺"
                timestamp="1.00pm"
                username="Deepika Padukone"
                image="https://upload.wikimedia.org/wikipedia/commons/1/1e/Deepika_p_Lux-Award_2016.jpg"
            />
            <Post
                profilePic="https://upload.wikimedia.org/wikipedia/commons/0/01/Marshmello2_%28Cropped%29.png"
                message="Rokzzzz"
                timestamp="5.00am"
                username="Marshmello"
                image="https://upload.wikimedia.org/wikipedia/commons/f/f0/Marshmello_%40_VELD_2016.jpg"
            /> */}
        </div>
    )
}

export default Feed
