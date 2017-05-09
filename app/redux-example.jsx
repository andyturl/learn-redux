var redux = require('redux');

console.log('Starting redux example');

var reducer = (state = {name: 'Anonymouse'}, action) => {
    switch(action.type) {
        case 'CHANGE_NAME':
            return {
                ...state,
                name: action.name
            };
        default:
            return state;
    }    
};

var store = redux.createStore(reducer);

var currentState = store.getState();
console.log('currentState', currentState);

var action = {
    type: 'CHANGE_NAME',
    name: 'Andy'
};

store.dispatch(action);

console.log('name should be andy', store.getState());