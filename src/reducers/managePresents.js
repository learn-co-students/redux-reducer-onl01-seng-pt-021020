
// export function managePresents(state, action){

    // switch (action.type) {
    //     case 'INCREASE' :
    //         return ()
    // }
    // let state = {numberOfPresents = 0}
    // let action = {type: 'INCREASE'}


// }

export function managePresents(state = {numberOfPresents: 0}, action) {
    switch (action.type) {
        case 'INCREASE':
            return Object.assign({}, state, {numberOfPresents: state.numberOfPresents + 1});

            default: return state;
    }
}

// where is reducer function? managePresents is the reducer function? 
// 