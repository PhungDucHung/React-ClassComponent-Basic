import React from 'react';
import ChildComponent from './ChildComponent';
import AddComponent from './AddComponent';
class MyComponent extends React.Component {
    //key:value
    state = {
       
        arrJobs: [
            { id: 'abcJob1', title: 'Developers', salary: '500 ' },
            { id: 'abcJob2', title: 'Testers', salary: '400 ' },
            { id: 'abcJob3', title: 'Project managers', salary: '1000 ' }
        ]
    }

    /* 
    JSX => return block
    fragment
    */

    addNewJob = (job) => {
        console.log('check job from parent: ', job)
        let currentJobs = this.state.arrJobs;   // Lấy danh sách công việc hiện tại từ state
        currentJobs.push(job);    // Thêm công việc mới vào danh sách
        this.setState({       // Cập nhật state với danh sách công việc mới
            // arrJobs: [...this.state.arrJobs, job]
            arrJobs: currentJobs,
        })
    };

    deleteAJob = (job) => {
        let currentJobs = this.state.arrJobs;
        currentJobs = currentJobs.filter(item => item.id !== job.id);
        this.setState({
            arrJobs: currentJobs
        });
    }

    //re-render
    render() {
        console.log('>>> call render: ', this.state)
        return (
            <>
            <AddComponent 
                addNewJob={this.addNewJob}
            />
               

                <ChildComponent
                    arrJobs={this.state.arrJobs}
                    deleteAJob={this.deleteAJob}
                />


            </>
        )
    }
}
export default MyComponent;