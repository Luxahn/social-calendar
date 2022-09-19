import styled from "styled-components";

const Container = styled.button`
  width: 80px;
  height: 30px;
  background-color: #007fdb;
  outline: 0;
  border: 0;
  border-radius: 5px;
  font-weight: bold;
  font-size: 16px;
  color: white;

  &:hover {
    background-color: #0271c0;
  }
`;

const CreateCalendarButton = ({ onClick }) => {
  return <Container onClick={onClick}>생성</Container>;
};

export default CreateCalendarButton;