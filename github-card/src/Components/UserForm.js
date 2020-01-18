import React from "react";
import styled from "styled-components";

import "./hover.css";

const FormContainer = styled.div`
  padding-bottom: 20px;

  input {
    background-color: #2e294e;
    border: 0;
    padding: 6px;
    font-size: 1rem;
    width: 240px;
    outline: 0;
    color: #f3f3f3;
    border-bottom: 1px solid #f3f3f3;
    margin-right: 8px;
  }

  button {
    margin-left: 10px;
    height: 30px;
    width: 80px;
    color: #f3f3f3;
    border: 1px solid #ff9505;
    background: #ff9505;
    font-size: 1.1rem;
  }
`;

const UserForm = ({ value, handleUserTextChange, handleUserFetch }) => {
  return (
    <FormContainer>
      <form>
        <input type="text" value={value} onChange={handleUserTextChange} />
        <button className="hvr-float-shadow" onClick={handleUserFetch}>
          Search
        </button>
      </form>
    </FormContainer>
  );
};

export default UserForm;
