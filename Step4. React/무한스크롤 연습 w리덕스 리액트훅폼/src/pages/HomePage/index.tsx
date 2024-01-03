import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { Link } from 'react-router-dom';

const HomePageWrapper = styled.div`
  height: 100vh;
`;

const StyledP = styled.p`
  font-weight: bold;
  font-size: 2rem;
`;
const HomePage = () => {
  const userInformation = useSelector((state: RootState) => state.user);
  return (
    <HomePageWrapper>
      <h1>home 화면 입니다.</h1>
      <StyledP>로그인 ID는 : {userInformation.email}</StyledP>
      <StyledP>비밀번호는 : {userInformation.password}</StyledP>
      <StyledP>입니다.</StyledP>
      <Link to="/main">메인 페이지로 이동하기</Link>
    </HomePageWrapper>
  );
};

export default HomePage;
