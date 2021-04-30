import React from 'react'
import styled from "styled-components";

const UploadPhoto = ({placeholder, name, mode}) => {
    return (
      <Container>
        <StyledUpload
          placeholder={placeholder && placeholder}
          type="file"
          name={name}
          required
          autocomplete="off"
        />
        <Status />
      </Container>
    );
};

const StyledUpload = styled.input`
    // padding-top: 3px;
`;

const Container  = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Status = styled.div`
  height: 10px;
  width: 10px;
  background: #9d9d9d;
  border-radius: 10px;
  margin-left: 8.8rem;

  ${StyledUpload}:focus + & {
    background: #ffa689;
  }
  ${StyledUpload}:invalid + & {
    background: #fe2f75;
  }
  ${StyledUpload}:valid + & {
    background: #70edb9;
  }
`;

export default UploadPhoto;