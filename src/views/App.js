import logo from './logo.svg'; 
import './App.scss'; 
import MyComponent from './Example/MyComponent.js'; 
import ListTodo from './Todos/ListTodo'; 
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 


import Nav from './Nav/Nav.js';
import Home from './Example/Home';
import {
  BrowserRouter ,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  // const App = () => {

  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
      <Nav></Nav>
        <img src={logo} className="App-logo" alt="logo" /> {/* Hiển thị logo */}
       
        

        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/Todo">
            <ListTodo /> 
          </Route>
          <Route path="/about">
             <MyComponent />
          </Route>
        </Switch>

      </header>
      


      <ToastContainer
        position="top-right" // Vị trí của ToastContainer ở góc trên bên phải
        autoClose={5000} // Tự động đóng sau 5000ms (5 giây)
        hideProgressBar={false} // Không ẩn thanh tiến trình
        newestOnTop={false} // Không hiển thị thông báo mới nhất ở trên cùng
        closeOnClick // Đóng thông báo khi nhấp chuột
        rtl={false} // Không sử dụng chế độ từ phải sang trái
        pauseOnFocusLoss // Tạm dừng thông báo khi mất tiêu điểm
        draggable // Cho phép kéo thông báo
        pauseOnHover // Tạm dừng thông báo khi di chuột qua
      />
    </div>
    </BrowserRouter>
  );
}

export default App; // Xuất component App để sử dụng ở nơi khác
