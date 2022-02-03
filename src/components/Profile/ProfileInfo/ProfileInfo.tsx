import React from "react";

const ProfileInfo: React.FC = () => {
  return (
    <div>
      <div className="content__img-inner">
        <img
          className="img content__img"
          src="https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_960_720.jpg"
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
            <p className="name">Aleksandr Ololoev</p>
            <p>Frontend developer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
