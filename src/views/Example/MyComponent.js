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
        //  sử dụng phương thức filter để tạo ra một mảng mới, bao gồm tất cả các công việc có id khác với id của công việc được truyền vào (job). Cụ thể, filter sẽ duyệt qua từng phần tử trong mảng currentJobs và chỉ giữ lại những phần tử không có id bằng với id của job.
        currentJobs = currentJobs.filter(item => item.id !== job.id);
        // Đầu tiên, item là { id: 1, title: 'Developer', salary: 600 }. Điều kiện item.id !== job.id sẽ là 1 !== 2, kết quả là true. Phần tử này được giữ lại trong mảng mới.Tiếp theo, item là { id: 2, title: 'Designer', salary: 500 }. Điều kiện item.id !== job.id sẽ là 2 !== 2, kết quả là false. Phần tử này không được giữ lại trong mảng mới.Cuối cùng, item là { id: 3, title: 'Manager', salary: 400 }. Điều kiện item.id !== job.id sẽ là 3 !== 2, kết quả là true. Phần tử này được giữ lại trong mảng mới.
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