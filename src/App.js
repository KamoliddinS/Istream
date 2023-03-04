import 'bootstrap/dist/css/bootstrap.min.css';
import 'assets/styles/main.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from 'components/header/header';
import Sidebar from 'components/sidebar/sidebar';
import CameraInner from 'pages/camera/camera-inner/camera-inner';
import Camera from 'pages/camera/cemera';
import Dashboard from 'pages/dashboard';
import Service from 'pages/service/service';
import Module from 'pages/module/module';
import Settings from 'pages/settings/settings';
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/service" element={<Service />} />
          <Route path="/camera" element={<Camera />} />
          <Route path="/module" element={<Module />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/camera/inner" element={<CameraInner />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
