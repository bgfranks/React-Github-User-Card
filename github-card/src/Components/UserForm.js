import React from "react";
import styled from "styled-components";

const FormContainer = styled.div`
  padding-bottom: 20px;
  color: #f3f3f3;
`;

const UserForm = ({ value, handleUserTextChange, handleUserFetch }) => {
  return (
    <FormContainer>
      <form>
        <input type="text" value={value} onChange={handleUserTextChange} />
        <button onClick={handleUserFetch}>Search</button>
      </form>
    </FormContainer>
  );
};

export default UserForm;
