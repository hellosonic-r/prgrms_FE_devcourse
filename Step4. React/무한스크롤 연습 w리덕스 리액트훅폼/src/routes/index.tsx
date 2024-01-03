import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginPage, SplashPage, HomePage, MainPage } from '../pages';
import TopNavBar from '../components/common/Navigator/TopNavBar';
import BottomNavBar from '../components/common/Navigator/BottomNavBar';

const RouterComponent = () => {
  return (
    <BrowserRouter>
      <TopNavBar />
      <Routes>
        <Route path="/" element={<SplashPage />}></Route>
        <Route path="/home" element={<HomePage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/main" element={<MainPage />}></Route>
      </Routes>
      <BottomNavBar />
    </BrowserRouter>
  );
};

export default RouterComponent;
