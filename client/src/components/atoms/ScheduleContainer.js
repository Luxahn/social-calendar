import styled from 'styled-components';

const ScheduleContainerWrapper = styled.div`
  width: 183px;
  height: auto;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  .date {
    font-size: 16px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;

const ScheduleContainer = ({ date, children }) => {
  return (
    <ScheduleContainerWrapper>
      <div className="date">{date}</div>
      {children}
    </ScheduleContainerWrapper>
  );
};

export default ScheduleContainer;
