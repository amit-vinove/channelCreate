import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ChannelCreate from './components/channelCreate/channelCreate';
import { ToastContainer } from 'react-toastify';
import Home from './components/home/home';
import MediaTailor from './components/mediaTailor/mediaTailor';
import ChannelCreateStatus from './components/channelCreateStatus/channelCreateStatus';
import ViewJSON from './components/viewJSON/viewJSON';

function App() {
  return (
    <div className="App">
      <ToastContainer theme='colored' position='top-center'></ToastContainer>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
      </Routes>
      <Routes>
        <Route path='/channelCreateStatus' element={<ChannelCreateStatus/>}></Route>
      </Routes>
      <Routes>
        <Route path='/channelCreate' element={<ChannelCreate/>}></Route>
      </Routes>
      <Routes>
        <Route path='/mediaTailor' element={<MediaTailor/>}></Route>
      </Routes>
      <Routes>
        <Route path='/viewJSON/:serviceId/:jobId' element={<ViewJSON/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
