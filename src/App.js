import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ProSidebarProvider } from 'react-pro-sidebar';
import UnAuthRoutes from './navigation/UnAuthRoutes';
import AuthRoutes from './navigation/AuthRoutes';
import store from './redux/setup/store';
import OtpScreen from './pages/Auth/OtpScreen';



function App() {
  const [isSigning] = useState(false);
  

  return (
    <Provider store={store}>
      <ProSidebarProvider>
        <BrowserRouter>
          <UnAuthRoutes />
          <AuthRoutes />
        </BrowserRouter>
      </ProSidebarProvider>
      {/* <OtpScreen/> */}
    </Provider>
  );
}

export default App;
