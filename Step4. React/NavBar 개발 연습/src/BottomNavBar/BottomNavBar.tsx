import styled from 'styled-components';
import { Icon } from '..';
import {
  CHANNEL_ICON,
  HOME_ICON,
  SEARCH_ICON,
  USER_ICON,
} from '@/constants/icons';
import { useParams } from 'react-router-dom';

const BottomNavBarWrapper = styled.div`
  /* height: 3rem; */
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const IconWrapper = styled.div`
  /* border: 1px solid black; */
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #eaeaea;
    cursor: pointer;
  }
`;

const BottomNavBar = () => {
  // 채팅 중인 페이지는
  const params = useParams(); // 아이디가 들어가있으면 채팅창임
  const showNavBar = params;
  console.log(params);
  console.log(window.location.pathname);

  return (
    showNavBar && (
      <BottomNavBarWrapper>
        <IconWrapper>
          <Icon name={HOME_ICON} weight={250} />
        </IconWrapper>
        <IconWrapper>
          <Icon name={SEARCH_ICON} weight={250} />
        </IconWrapper>
        <IconWrapper>
          <Icon name={CHANNEL_ICON} weight={250} />
        </IconWrapper>
        <IconWrapper>
          <Icon name={USER_ICON} weight={250} />
        </IconWrapper>
      </BottomNavBarWrapper>
    )
  );
};

export default BottomNavBar;
