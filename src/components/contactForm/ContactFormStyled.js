import styled from 'styled-components';
export const ContactFormContainer = styled.form`
  width: 50vw;
  padding: 16px;
  border: 2px solid grey;
  border-radius: 4px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const InputContainer = styled.input`
  display: block;
  min-width: 300px;
  padding: 5px 10px;
  margin-bottom: 15px;
  border: 1px solid lightgrey;
  border-radius: 4px;
  :focus {
    outline: none;
    border: 3px solid lightblue;
  }
`;

export const LabelContainer = styled.label`
  display: block;
  margin-bottom: 5px;
  font-size: 18px;
`;

export const ButtonContainer = styled.button`
  padding: 2px 10px;
  border: 1px solid lightgrey;
  border-radius: 4px;
  background-color: white;
  font-size: 16px;
  cursor: pointer;
  transition-duration: 0.4s;
  :hover {
    background-color: lightblue;
    color: white;
    border-color: lightblue;
  }
`;
