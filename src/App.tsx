import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/home';
import { NotFound } from './NotFound';
import { selectMyApp } from './redux/selectors/myappSelectors';
import { useSelector } from 'react-redux';
import NewPage from './pages/NewPage/newPage';
import { Div } from './components/core/Container';

const App: FC<any> = () => {
  const myAppData = useSelector(selectMyApp);
  return (
    <Div className="min-h-screen">
      <Routes>
        <Route path="/" element={<Home myData={myAppData} />} />
        <Route path="/new-page" element={<NewPage myData={myAppData} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Div>
  );
}

export default App;
