import React from "react";

class MyComponent extends React.Component {
    /*
        JSX : JSX là một cú pháp giống HTML nhưng với sức mạnh của JavaScript. => return block
        fragment = <> </>:   bọc các phần tử bên trong 
    */ 

    state = {
        name: 'Songoku',
        world : 'Earth'
    }
    
    render() {
        return (
            <>
            <div className="first" >
                hello world , my name is {this.state.name}
            </div>
            <div className="second">
                i live in the {this.state.world}
            </div>

            </>
        )
    }
}
export default MyComponent;