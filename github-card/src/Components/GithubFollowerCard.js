import React from "react";
import styled from "styled-components";

const FollowerCard = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 1px solid #ec4e20;
  width: 350px;
  height: 150px;
  background: #ec4e20;
  color: #f3f3f3;

  img {
    height: 100px;
    width: 100px;
    border-radius: 50%;
  }

  h3 {
    font-size: 2rem;
  }
`;

const GithubFollowerCard = ({ userName, profileImg, name }) => {
  return (
    <FollowerCard>
      <div className="img-container">
        <img src={profileImg} alt={name} />
      </div>
      <div className="text-content">
        <h3>{userName}</h3>
      </div>
    </FollowerCard>
  );
};

export default GithubFollowerCard;
