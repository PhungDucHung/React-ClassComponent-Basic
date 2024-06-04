import React from "react";
import { withRouter } from "react-router";
import Color from "./HOC/Color";
import pic from "../assets/images/bedroom.jpg";
import { connect } from 'react-redux';

class Home extends React.Component {
    handleDeleteUser = (user) => {
        console.log("delete user", user);
        this.props.deleteUserRedux(user); // Dispatch hành động DELETE_USER với user cần xóa
    };

    handleCreateUser = () => {
         this.props.addUserRedux(); 
         
    }

    render() {
        console.log("check props redux", this.props);
        let listUsers = this.props.dataRedux || [];
        return (
            <>
                <div>
                    <img src={pic} style={{width: '400px' , height:'200px' , marginTop:'10px'}} alt="Bedroom"/>
                </div>
                <div>
                    {listUsers && listUsers.length > 0 && 
                        listUsers.map((item, index) => {
                            return(
                            <div key={item.id}>
                                {index + 1} - {item.name}
                                &nbsp;<span onClick={() => this.handleDeleteUser(item)}>xóa</span>

                            </div>
                            )
                     })
                }
                <button onClick={() => this.handleCreateUser()}>Add new</button>
                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return { dataRedux: state.users || [] };
}

const mapDispatchToProps = (dispatch) => {
    return {
        // Tạo props deleteUserRedux, khi gọi props này, nó sẽ dispatch hành động DELETE_USER với user cần xóa
        deleteUserRedux: (userDelete) => dispatch({type: 'DELETE_USER', payload: userDelete }),
        addUserRedux: () => dispatch({type: 'CREATE_USER'})
    }
}

// Kết nối component với Redux store, ánh xạ state.users thành props dataRedux và hành động deleteUserRedux thành props deleteUserRedux
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Color(Home)));
