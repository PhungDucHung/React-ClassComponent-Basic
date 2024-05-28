import React from 'react'; 
import { toast } from 'react-toastify'; // Nhập toast từ thư viện react-toastify để hiển thị thông báo

class AddTodo extends React.Component {
    // Khởi tạo state với thuộc tính title để lưu trữ giá trị của input
    state = {
        title: ''
    }

    // Hàm xử lý sự kiện khi giá trị của input thay đổi
    handleOnChangeTitle = (event) => {
        this.setState({
            title: event.target.value // Cập nhật giá trị của state title theo giá trị của input
        })
    }

    // Hàm xử lý sự kiện khi nhấn nút Add
    handleAddTodo = () => {
        // Kiểm tra nếu title rỗng thì hiển thị thông báo lỗi
        if (!this.state.title) {
            toast.error(`Missing title's Todo!`)
            return; // Dừng việc thực hiện tiếp các câu lệnh phía dưới
            // if(undefined/null/empty) => false
        }

        // Tạo đối tượng todo mới với id ngẫu nhiên và title từ state
        let todo = {
            id: Math.floor(Math.random() * 10000), // Tạo id ngẫu nhiên
            title: this.state.title // Lấy title từ state
        }

        // Gọi hàm addNewTodo từ props để thêm todo mới vào danh sách
        this.props.addNewTodo(todo);

        // Reset lại giá trị của input sau khi thêm thành công
        this.setState({
            title: ''
        })
    }

    render() {
        let { title } = this.state; 
        return (
            <div className="add-todo">
                {/* Input để nhập title của todo */}
                <input 
                    type="text" 
                    value={title}
                    onChange={(event) => this.handleOnChangeTitle(event)} // Gọi hàm handleOnChangeTitle khi giá trị của input thay đổi
                />
                {/* Nút Add để thêm todo mới */}
                <button 
                    type="button" 
                    className="add"
                    onClick={() => this.handleAddTodo()} // Gọi hàm handleAddTodo khi nhấn nút
                >
                    Add
                </button>
            </div>
        )
    }
}

export default AddTodo; // Xuất component AddTodo để sử dụng ở nơi khác
