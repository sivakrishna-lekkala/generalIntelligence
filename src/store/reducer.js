import {Map} from 'immutable';
import { fromJS } from "immutable";
 
const intialState:Map<String,any>=fromJS({
    data:{
        toggleExapand:false,
        toggleShowDetails:{
            boolShowDetails:false,
            showDetailsSection:"Home Component"
        }
    }
})

function stateSet(state,action,key){ 
    return state.setIn(["data",key],action.data)
}

type Action=Rx_Action;

function appReducer (state:Map<String,any>=intialState,action:Rx_Action){
    switch(action.type){
        case "TOGGLENAME":
            return stateSet(state,action,"toggleShowDetails")
        case "GET_USER":
            return stateSet(state,action,"getUserDetails")
        default:
            return state;
    }
}
export default appReducer;