import logo from './logo.svg'; // Nhập logo từ tệp logo.svg
import './App.scss'; // Nhập các kiểu CSS từ tệp App.scss
import MyComponent from './Example/MyComponent.js'; // Nhập MyComponent từ tệp MyComponent.js
import ListTodo from './Todos/ListTodo'; // Nhập ListTodo từ tệp ListTodo
import { ToastContainer, toast } from 'react-toastify'; // Nhập ToastContainer và toast từ thư viện react-toastify
import 'react-toastify/dist/ReactToastify.css'; // Nhập các kiểu CSS của react-toastify

/**
 * 2 components: class component / function component ( function, arrow)
 * JSX
 */
function App() {
  // const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> {/* Hiển thị logo */}
        {/* <MyComponent /> */}
        <ListTodo /> {/* Hiển thị component ListTodo */}

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
  );
}

export default App; // Xuất component App để sử dụng ở nơi khác
