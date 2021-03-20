import React from 'react';
import { connect } from 'react-redux';
import * as Actions from '../action/Action';
import axios from 'axios';
import Header from './Header';

class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data:[]
        }
    } 
    componentDidMount() {
        this.props.gettingUserDetails();
        

    }
    changeName() {
        let data = {
            boolShowDetails: !this.props.isComponent,
            showDetailsSection: "Home Component12345"
        }
        this.props.toggleExpand("TOGGLENAME", data);
        console.log(this.props.getUserDetails)   
    }
    render() {
        return (
            <div>
                {
                    this.props.isComponent ? <p>
                        {this.props.sectionName}
                    </p> :
                        <p>welcome to the page</p>
                }
                <button onClick={(e) => { this.changeName(e) }}>toggle button</button>
                 <Header></Header>
            </div>
        )
    }
}
const mapDispachToProps = ($dispach) => {
    return {
        toggleExpand: function (headingName, boolVlaue) {
            $dispach(Actions.toggleShowDetails(headingName, boolVlaue))
        },
        gettingUserDetails: function () {
            const url = `http://jsonplaceholder.typicode.com/users/`;
           axios.get(url).then(response => response.data)
                .then((data) => { 
            $dispach(Actions.getUserDetails(data))
                    // console.log(data)
                })
        }
    }
}

const mapStateToProps = (state) => {
    let isComponent = state.getIn(["data", "toggleShowDetails", "boolShowDetails"]);
    let sectionName = state.getIn(["data", "toggleShowDetails", "showDetailsSection"]);
    let getUserDetails = state.getIn(["data","getUserDetails"]); 
    console.log(getUserDetails)
    return {
        sectionName: sectionName,
        isComponent: isComponent,
        getUserDetails:getUserDetails
    }
}
export default connect(mapStateToProps, mapDispachToProps)(HomeScreen);