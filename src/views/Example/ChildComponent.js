import React, { Component } from 'react';

class ChildComponent extends Component {

   state = {
        showJobs : false 
   }

   handleShowHide = (status) => {
    this.setState({ 
        showJobs: !this.state.showJobs
    });
}

    render() {
        console.log('>>> check props :' , this.props);
        // let name = this.props.name;
        // let age = this.props.age;
        let { name, age , address , arrJobs } = this.props;
        let { showJobs } = this.state;
        return (
            <>
                { 
                showJobs === false && 
                    <div>
                        <button  onClick={()=> this.handleShowHide()  }>Show</button>
                    </div>
                } 
                
                { 
                showJobs === true && 
                    <>
                    <div className='job-lists'>
                        {             
                        arrJobs.map((item,index)=>{
                            if( item.salary >= 500 ){
                            return(
                                <div key={item.id}>
                                    {item.title} - {item.salary} $
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
