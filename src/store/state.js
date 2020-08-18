import {createStore,combineReducers} from 'redux'


const isAuthorized=(state=true,action)=>{
    switch (action.type) {
        case "YES":
            return true;
            break;
        case "NO":
            return false;
            break;
        default:
            return false;
            break;
    }
}
const mainSearch=(state=false,action)=>{
    switch (action.type) {
        case "CLOSE_SEARCH":
            return false;
            break;
        case "OPEN_SEARCH":
            return true;
            break;
        default:
            return state;
            break;
    }
}

const initialState={
    mainSearch:false,
    isAuthorized:true,
}

let reducers=combineReducers({mainSearch,isAuthorized},initialState);

let store =createStore(reducers);

export default store;