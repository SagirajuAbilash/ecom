import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link, Navigate } from "react-router-dom";
import { SignupPage } from './componenets/SignupPage';
import { LoginPage } from './componenets/LoginPage';
import { ProductFeed } from './componenets/ProductFeed';


const PublicRoute = (props) => {
  // token retried
  const token = localStorage.getItem("userToken");
 
  if(token){
    return <Navigate to="/productfeed" />
  } else {
    return props.children;
  }
}

const ProtectedRoute = (props) => {
  // token retried
  const token = localStorage.getItem("userToken");
 
  if(token){
    return props.children;
  } else {
    return <Navigate to="/login" />
  }
}


function App() {


  return(
    <>
    

      <Routes>
        
      <Route path="/signup" element={
          <PublicRoute>
            <SignupPage/>
          </PublicRoute>
        } />
        
      <Route path="/login" element={
          <PublicRoute>
            <LoginPage/>
          </PublicRoute>
        } />
        
        
          
      
      
        


          <Route path="/productfeed" element={
            <ProtectedRoute>
              <ProductFeed/>
            </ProtectedRoute>
          } />
      </Routes>
    </>
  )
}

export default App;

