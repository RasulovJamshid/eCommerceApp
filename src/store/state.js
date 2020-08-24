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
const accessToken=(state="",action)=>{
    switch (action.type) {
        case "ASSIGN":
            return action.payload;
            break;
        default:
            return state;
            break;
    }
}
const setLangauge=(state="uz",action)=>{
    switch (action.type) {
        case "SETLANGUAGE":
            return action.payload;
            break;
        default:
            return state;
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
    isAuthorized:false,
    isFaceBook:false,
    accessToken:"",
    setLangauge:"uz"
}

let reducers=combineReducers({mainSearch,isAuthorized,isFaceBook,accessToken,setLangauge},initialState);

let store =createStore(reducers);

export default store;