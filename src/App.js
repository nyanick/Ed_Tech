import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ProSidebarProvider } from 'react-pro-sidebar';
import UnAuthRoutes from './navigation/UnAuthRoutes';
import AuthRoutes from './navigation/AuthRoutes';
import store from './redux/setup/store';

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
