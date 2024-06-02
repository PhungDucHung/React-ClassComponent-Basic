import React from "react";
import axios from "axios";
import './ListUser.scss';
import { withRouter} from 'react-router-dom';

class ListUser extends React.Component {
    constructor(props) {
        // Gọi hàm khởi tạo của lớp cha (React.Component) bằng super(props)
        // để có thể sử dụng `this` trong constructor.
        super(props);
  
        // Khởi tạo state ban đầu của component.
        // State là một đối tượng chứa các dữ liệu động mà component quản lý.
        this.state = {
            listUsers: [] // Khởi tạo `listUsers` với một mảng rỗng.
        };
    }


    async componentDidMount(){
        // axios.get('https://reqres.in/api/users?page=2')
        // .then(res =>{
        //     console.log('>>> check res: ', res);
        // })
        let res = await axios.get('https://reqres.in/api/users?page=1');
        this.setState({
            listUsers: res && res.data && res.data.data ? res.data.data : [] // đảm bảo biến res.data.data tồn tại
        });
    }

    handleViewDetailUser = (user) => {
       this.props.history.push(`/user/${user.id}`);
    };

    render() {
        let { listUsers } = this.state;
        return (
            <div className="list-user-container">
                <div className="title">
                    Fetch all list users
                </div>
                <div className="list-user-content">
                        {listUsers && listUsers.length > 0 &&  // giống if nếu listUsers && listUsers.length > 0 thì mới thực hiện lệnh 
                        listUsers.map((item, index) => {
                            return (
                                <div className="child" key={item.id}
                                onClick={() => this.handleViewDetailUser(item)}  
                                >
                                    {index + 1} - {item.first_name} {item.last_name}
                                </div>
                            )
                        })
                    }
                  

                </div>
            </div>
        )
    }
}
export default  withRouter(ListUser);


