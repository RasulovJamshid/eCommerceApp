import {createStore,combineReducers} from 'redux'


const isAuthorized=(state=true,action)=>{
    switch (action.type) {
        case "YES":
            return true;
            break;
        default:
            return false;
            break;
    }
}
const theme=(state=true,action)=>{
    switch (action.type) {
        case "YES":
            return true;
            break;
        default:
            return false;
            break;
    }
}

const initialState={
    theme:true,
    isAuthorized:true,
}

let reducers=combineReducers({theme,isAuthorized},initialState);

let store =createStore(reducers);

export default store;