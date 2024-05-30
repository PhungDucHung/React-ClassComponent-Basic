import React from 'react';
import './ListTodo.scss';
import AddTodo from './AddTodo';
import { toast } from 'react-toastify';
import color from '../HOC/Color';

class ListTodo extends React.Component {
    state = {
        // Danh sách các công việc ban đầu
        listTodos: [
            { id: 'todo1', title: 'Doing homework' },
            { id: 'todo2', title: 'Writing code' },
            { id: 'todo3', title: 'Fixing bugs' },
        ],
        // Đối tượng để lưu công việc đang được chỉnh sửa
        editTodo: {}
    }

    // Thêm một công việc mới vào danh sách
    addNewTodo = (todo) => {
        this.setState({
            listTodos: [...this.state.listTodos, todo],
        });
        toast.success("Todo added successfully!"); // Hiển thị thông báo thành công
    }

    // Xóa một công việc từ danh sách
    handleDeleteTodo = (todo) => {
        let currentTodos = this.state.listTodos.filter(item => item.id !== todo.id);
        this.setState({
            listTodos: currentTodos
        });
        toast.success("Deleted successfully!"); // Hiển thị thông báo thành công
    }

    // Bắt đầu chỉnh sửa một công việc
    handleEditTodo = (todo) => {
        this.setState({
            editTodo: todo
        });
    }

    // Cập nhật tiêu đề công việc đang được chỉnh sửa khi người dùng nhập liệu
    handleOnChangeEditTodo = (event) => {
        let editTodoCopy = { ...this.state.editTodo };
        editTodoCopy.title = event.target.value;
        this.setState({
            editTodo: editTodoCopy
        });
    } 

    // Lưu công việc đã chỉnh sửa và cập nhật danh sách công việc
    handleSaveTodo = () => {
        let { listTodos, editTodo } = this.state;
        let todoIndex = listTodos.findIndex(todo => todo.id === editTodo.id);
        listTodos[todoIndex] = editTodo;
        this.setState({
            listTodos: listTodos,
            editTodo: {}
        });
        toast.success("Updated successfully!"); // Hiển thị thông báo thành công
    }

    render() {
        let { listTodos, editTodo } = this.state;
        return (
            <div className="list-todo-container">
                {/* Component để thêm một công việc mới */}
                <AddTodo addNewTodo={this.addNewTodo} />

                <div className="list-todo-content">
                    {listTodos && listTodos.length > 0 &&
                    // listTodos &&: Kiểm tra xem listTodos có phải là một giá trị truthy (không phải null hoặc undefined).
                    // listTodos.length > 0 &&: Kiểm tra xem listTodos có chứa ít nhất một phần tử.
                    // listTodos.map(...): Nếu cả hai điều kiện trên đều đúng, render các phần tử trong listTodos.
                    // Toán tử && giúp đơn giản hóa việc điều kiện hóa trong JSX, cho phép chúng ta kiểm tra nhiều điều kiện trước khi quyết định render một phần tử hoặc một tập hợp các phần tử.
                        listTodos.map((item, index) => {
                            return (
                                <div className="todo-child" key={item.id}>
                                    {/* Nếu công việc đang được chỉnh sửa, hiển thị input để chỉnh sửa */}
                                    {editTodo.id === item.id ?
                                        <span>
                                            {index + 1} - 
                                            <input 
                                                value={editTodo.title} 
                                                onChange={(event) => this.handleOnChangeEditTodo(event)} 
                                            />
                                        </span>
                                        :
                                        // Nếu không, hiển thị tiêu đề công việc
                                        <span>{index + 1} - {item.title}</span>
                                    }
                                    {/* Nút Edit sẽ chuyển thành Save khi công việc đang được chỉnh sửa */}
                                    <button 
                                        className="edit" 
                                        onClick={() => editTodo.id === item.id ? this.handleSaveTodo() : this.handleEditTodo(item)}
                                    >
                                        {editTodo.id === item.id ? 'Save' : 'Edit'}
                                    </button>
                                    {/* Nút Delete để xóa công việc */}
                                    <button className="delete" onClick={() => this.handleDeleteTodo(item)}>
                                        Delete
                                    </button>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}

export default color(ListTodo);
