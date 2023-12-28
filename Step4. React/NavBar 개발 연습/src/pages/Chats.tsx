import { Link } from 'react-router-dom';
import { IOnClick } from '../interfaces';

const Chats = ({ onClick }: IOnClick) => {
  const handleClick = () => {
    onClick('home');
  };
  return (
    <div>
      Chats
      <Link to="/" onClick={handleClick}>
        홈으로 이동
      </Link>
    </div>
  );
};

export default Chats;
