
import React from 'react';
class AddComponent extends React.Component {

    state = {
        titlejob: '',
        salary: '',
    }

    handleChangetitlejob = (event) => {
        this.setState({
            titlejob: event.target.value
        })
    }
    handleChangesalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log('>>> check data input: ', this.state)
    }

    render() {
        return(
            <div>
                 <form>
                    <label htmlFor="fname">Job Title:</label><br />
                    <input
                        type="text"
                        value={this.state.titlejob}
                        onChange={(event) => this.handleChangetitlejob(event)}
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