import React from 'react'; 
import {connect } from 'react-redux';

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:this.props.getUserDetails
        }
    }
    componentDidMount(){ 
        console.log(this.props.getUserDetails);
        console.log(this.state.data);
            this.setState({
                data:this.props.getUserDetails
            }) 
        console.log(this.state.data);
    }
    render(){
        return(
            <div>
                <p>User List</p>
                {
                   this.state.data ? this.state.data.map((data,key)=>{
                        return (<div>{data.id}</div>)
                    }):null
                }
            </div>
        )
    }
}
const mapDispachToProps =($dispach)=>{

}
const mapStateToProps =(state)=>{
    let getUserDetails = state.getIn(["data","getUserDetails"]); 
    console.log(getUserDetails);

    return{
        getUserDetails:getUserDetails
    }
}
export default connect(mapStateToProps,mapDispachToProps)(Header);
  