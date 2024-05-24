
import React from 'react';
class AddComponent extends React.Component {

    state = {
        title: '',
        salary: '',
    }

    handleChangeTitlejob = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    handleChangesalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()   // hàm giúp không refresh khi nhấn submit
        if(!this.state.title || !this.state.salary){
            alert('missing required parameters')
            return;
        }
        console.log('>>> check data input: ', this.state)
        this.props.addNewJob({
            id : Math.floor(Math.random() *100),
            title: this.state.title,
            salary: this.state.salary   
        })
    }

    render() {
        return(
            <div>
                 <form>
                    <label htmlFor="fname">Job Title:</label><br />
                    <input
                        type="text"
                        value={this.state.title}
                        onChange={(event) => this.handleChangeTitlejob(event)}
                    />
                    <br />
                    <label htmlFor="lname">Salary:</label><br />
                    <input
                        type="text"
                        value={this.state.salary}
                        onChange={(event) => this.handleChangesalary(event)}
                    /><br /><br />
                    <input type="submit"
                        onClick={(event) => this.handleSubmit(event)}
                    />
                </form>
            </div>
        )
    }
}
export default AddComponent;