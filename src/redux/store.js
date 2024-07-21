import { createStore,applyMiddleware, combineReducers } from 'redux';
import {thunk} from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { eventReducer } from './reducer/eventReducer';


const rootReducer = combineReducers({
    events: eventReducer
});


const middleware = [thunk];

async function savetoLocalStorage(state) {
    try{
        const serialsedState = JSON.stringify(state);
        localStorage.setItem('admin',serialsedState)
    }catch(e){
        return null;
    }
}

function loasdFromLocalStorage(){
    try{
        const serialsedState = localStorage.getItem('admin');
        if(serialsedState === null) return undefined;
        return JSON.parse(serialsedState)
    }catch(e){
        return null;
    }
}



const store = createStore(
    rootReducer,  
    loasdFromLocalStorage(),
    composeWithDevTools(applyMiddleware(...middleware))
)

store.subscribe(() => savetoLocalStorage(store.getState()))




export default store;