import React from 'react';
import './Demo.css'
class ChildComponent extends React.Component {

   state = {
        showJobs : false 
   }

   handleShowHide = (status) => {
    this.setState({ 
        showJobs: !this.state.showJobs
    });
    }

    handleOnclickDelete = (job) => {
        console.log('>>>> handleOnclickDelete: ', job);
        this.props.deleteAJob(job);
    }


    render() {
        console.log('>>> check props :' , this.props);
        // let name = this.props.name;
        // let age = this.props.age;
        let { name, age , address , arrJobs } = this.props;
        let { showJobs } = this.state; 
         // Kiểm tra showJobs là true hoặc false để ghi log
        let check = showJobs === true ? 'showJobs = true' : 'showJobs = false';
        return (
            <>
                { 
                showJobs === false ?
                    <div>
                        <button className='btn-show' onClick={()=> this.handleShowHide()  }>Show</button>
                    </div>             
                :
                    <>
                    <div className='job-lists'>
                        {             
                        arrJobs.map((item,index)=>{
                            if( item.salary >= 500 ){
                            return(
                                //  item.id được sử dụng làm key vì nó duy nhất cho mỗi công việc.
                                <div key={item.id}>      
                                    {item.title} - {item.salary} $ <></> <span onClick={()=>this.handleOnclickDelete(item)}>X</span>
                                </div>
                            )
                        }
                }

                )}
            </div>
                <div><button onClick={()=> this.handleShowHide()}>Hide</button></div>
                </>       
            }
            </>
        )
    }
}

// const ChildComponent = (props) =>{
//     let {  arrJobs } = props;
//     return(
//         <>
//              <div className='job-lists'>
//                  {             
//                         arrJobs.map((item,index)=>{
//                             if( item.salary >= 500 ){
//                             return(
//                                 <div key={item.id}>
//                                     {item.title} - {item.salary} $
//                                 </div>
//                             )
//                         }
//                 }
//                 )}
//             </div>
//       </>
//     )
   
// }
export default ChildComponent;
