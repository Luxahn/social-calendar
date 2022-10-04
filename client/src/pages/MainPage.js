import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import atoms from '../components/atoms';
import molecules from '../components/molecules';
import modalSlice from '../slices/modalSlice';

// <------------------ STYLED COMPONENT ------------------>
// 메인페이지 wrapper
const MainPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

// 캘린더 (styled component)
const Calendar = styled(molecules.Calendar)`
  position: relative;
`;

// 일정 생성 모달 (styled component)
const CreateEventModal = styled(molecules.CreateEventModal)`
  position: absolute;
  top: 20vh;
  left: calc(50% - 220px);
`;

// 일정 추가 버튼 (styled component)
const PlusCircleButton = styled(atoms.PlusCircleButton)`
  position: absolute;
  top: 35px;
  left: 5px;
`;

// 캘린더 사이드바 (styled component)
const CalendarSidebar = styled(molecules.CalendarSidebar)`
  position: absolute;
  z-index: 10;
`;

// 마이페이지 사이드바 (styled component)
const MypageSidebar = styled(molecules.MypageSidebar)`
  position: absolute;
  right: 0;
  z-index: 10;
`;

// 캘린더 생성 모달 (styled component)
const CreateCalendarModal = styled(molecules.CreateCalendarModal)`
  position: absolute;
  top: 20vh;
  left: calc(50% - 220px);
`;

// 일정 조회 모달
const EventModal = styled(molecules.EventModal)`
  position: absolute;
  top: 20vh;
  left: calc(50% - 220px);

  &.comment-mode {
    left: calc(50% - 440px);
  }
`;

// 댓글 창 모달
const EventCommentModal = styled(molecules.EventCommentModal)`
  position: absolute;
  top: 20vh;
  left: 50%;
`;

//<------------------ COMPONENT ------------------>
const MainPage = () => {
  const modalState = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  const submitInfo = (obj) => {
    console.log('obj : ', obj);
    // setIsCreateEventModal(false);
    // setIsCreateCalendarModal(false);
  };

  return (
    <MainPageWrapper>
      <molecules.MainPageNavigation />
      <Calendar>
        {modalState.eventCommentModal && <EventCommentModal />}
        {modalState.eventModal && <EventModal className={modalState.eventCommentModal ? 'comment-mode' : ''} />}
        {modalState.calendarSidebarModal && <CalendarSidebar />}
        {modalState.createCalendarModal && <CreateCalendarModal submitInfo={submitInfo} />}
        {modalState.mypageSidebarModal && <MypageSidebar />}
        <PlusCircleButton color={'#007FDB'} onClick={() => dispatch(modalSlice.actions.modal({ ...modalState, createEventModal: true }))} />
        {modalState.createEventModal && <CreateEventModal />}
      </Calendar>
    </MainPageWrapper>
  );
};

export default MainPage;
