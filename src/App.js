import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { ProSidebarProvider } from 'react-pro-sidebar';
import UnAuthRoutes from './navigation/UnAuthRoutes';
import AuthRoutes from './navigation/AuthRoutes';
import store from './redux/setup/store';
import StudDashboard from './pages/StudDashboard';
import NavBarCollapse from './components/Header/NavBarCollapse';
import IZNavBar from './components/Header/IZNavBar';

function App() {
  const [isSigning] = useState(true);

  return (
    <Provider store={store}>
      <ProSidebarProvider>
        <BrowserRouter>
            <AuthRoutes />
        </BrowserRouter>
      </ProSidebarProvider>
      {/* <NavBarCollapse/> */}
      {/* <IZNavBar/> */}
      {/* <StudDashboard/> */}
    </Provider>
  );
}

export default App;
