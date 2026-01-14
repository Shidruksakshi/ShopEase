import React from "react";
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthProvider } from "./custom hook/Auth.jsx";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { store } from "./redux/store.jsx";
import { Provider } from "react-redux";


createRoot(document.getElementById('root')).render(

   <Provider store={store}>
     <AuthProvider>
        <App />  
    </AuthProvider>
   </Provider>
 
)
