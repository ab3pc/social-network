import React from "react";

const Profile: React.FC = () => {
  return (
    <div className="content">
      <img
        className="img content__img"
        src="https://blog.netsons.com/wp-content/uploads/2020/12/4.-Perche-i-like-sui-social-network-non-ti-faranno-guadagnare-2.jpg"
        alt="some photos"
      />
      <div className="content__user">
        <div>
          <img
            className="img content__user-photo"
            src="https://cdn.pixabay.com/photo/2017/07/18/23/23/user-2517433_1280.png"
            alt="ava"
          />
        </div>
        <div className="content__user-about">
          <p>Name Last Name</p>
          <p>Date of birth</p>
          <p>City</p>
          <p>Education</p>
        </div>
      </div>
      <div className="content__myPosts">
        My posts
        <div>
          <input type="text" placeholder="new post" />
        </div>
        <div>my old post</div>
        <div>my old post</div>
        <div>my old post</div>
      </div>
    </div>
  );
};

export default Profile;
