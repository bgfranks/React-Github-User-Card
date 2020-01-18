import React from "react";
import GithubFollowerCard from "./GithubFollowerCard";
import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const UserCard = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 300px;
  width: 600px;
  border: 1px solid #016fb9;
  text-align: center;
  background: #016fb9;
  color: #f3f3f3;

  img {
    height: 200px;
    width: 200px;
    border-radius: 50%;
  }

  h3 {
    font-size: 2.5rem;
    padding-bottom: 20px;
  }

  p {
    font-size: 1.5rem;
    padding-bottom: 15px;
  }
`;

const FollowerContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-rows: auto auto auto;
  grid-column-gap: 20px;
  grid-row-gap: 25px;
`;

const GithubUserCard = ({ user, follower }) => {
  return (
    <CardContainer>
      <UserCard>
        <div className="img-container">
          <img src={user.avatar_url} alt={user.name} />
        </div>
        <div className="text-content">
          <h3>{user.login}</h3>
          <p>{user.location}</p>
          <p>Followers: {user.followers}</p>
        </div>
      </UserCard>
      <h2>Followers</h2>
      <FollowerContainer>
        {follower.map(e => {
          return (
            <GithubFollowerCard
              userName={e.login}
              profileImg={e.avatar_url}
              name={e.name}
              key={e.id}
            />
          );
        })}
      </FollowerContainer>
    </CardContainer>
  );
};

export default GithubUserCard;
