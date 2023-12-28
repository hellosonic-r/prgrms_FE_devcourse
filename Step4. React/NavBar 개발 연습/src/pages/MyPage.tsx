import { IOnClick } from '../interfaces';
import { Link } from 'react-router-dom';

const MyPage = ({ onClick }: IOnClick) => {
  const handleClick = () => {
    onClick('chats');
  };
  return (
    <div>
      MyPage
      <Link to="/chats" onClick={handleClick}>
        chats로 이동
      </Link>
    </div>
  );
};

export default MyPage;
