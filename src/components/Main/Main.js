import React, { useState } from "react";
import "./Main.css";
import { BiArrowBack } from "react-icons/bi";
import { CgCalendarDates, CgMoreAlt } from "react-icons/cg";
import Tweet from "../Tweets/Tweet";

const Main = () => {
  const [follow, setFollow] = useState(true);

  const FollowHandler = () => {
    setFollow(!follow);
  };

  const sampleTweets = [
    { comment: "51", like: "120", tweet: "I just finished with twitter clone!" },
    { comment: "35", like: "80", tweet: "Loving the new features in the latest update!" },
    { comment: "12", like: "45", tweet: "Does anyone know a good library for animations?" },
    { comment: "9", like: "23", tweet: "Starting a new project soon, can't wait!" }
  ];

  return (
    <div id="Main">
      <div id="back-box-icon">
        <div id="box-user-name-back">
          <BiArrowBack id="back" />
          <div>
            <h1 id="matin">Parassat</h1>
            <p id="Tweets">228 Tweets</p>
          </div>
        </div>
      </div>
      <div id="header">
        <div id="user-img-box">
          <img
            id="user-img-g"
            src="https://avatarfiles.alphacoders.com/311/311487.jpg"
            alt="avatar"
          />
        </div>
      </div>

      <div id="follow-box">
        <CgMoreAlt id="more" />
        <input
          type="button"
          value={follow ? "Follow" : "Following"}
          onClick={FollowHandler}
          className={follow === false ? "Following" : "Follow"}
        />
      </div>

      <div id="user-box">
        <h1 id="name-user">Parassat</h1>
        <p id="user-name-e">@Mussell228</p>
        <p>👨‍💻 osu! player 👨‍💻</p>
        <div id="dateBox">
          <CgCalendarDates />
          <p id="date">Joined May 2020</p>
        </div>
        <div id="following-followers">
          <span id="bold">1</span>
          <p id="following">Following</p>
          <span id="bold">{follow === false ? 6 : 5}</span>
          <p id="followers">Followers</p>
        </div>
      </div>

      <div id="TweetsBox">
        <div id="boxs">
          <button id="tweets">Tweets</button>
          <div id="blue"></div>
        </div>
        <button id="btn">Tweets & replies</button>
        <button id="btn">Media</button>
        <button id="btn">Likes</button>
      </div>

      <Tweet comment="51" like="120" tweet="I just finished with twitter clone!" />
      
    </div>
  );
};

export default Main;
