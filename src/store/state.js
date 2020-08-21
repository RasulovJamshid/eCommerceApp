import {createStore,combineReducers} from 'redux'


const isAuthorized=(state=false,action)=>{
    switch (action.type) {
        case "YES":
            return true;
            break;
        case "NO":
            return false;
            break;
        default:
            return state;
    }
}
const isFaceBook=(state=false,action)=>{
    switch (action.type) {
        case "FACEB":
            return true;
            break;
        case "NO_FACEB":
            return false;
            break;
        default:
            return state;
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
    isAuthorized:false,
    isFaceBook:false
}

let reducers=combineReducers({mainSearch,isAuthorized,isFaceBook},initialState);

let store =createStore(reducers);

export default store;