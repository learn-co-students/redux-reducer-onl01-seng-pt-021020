export function manageFriends(state = {friends: []}, action){
    switch (action.type) {
        case 'ADD_FRIEND':
            return {...state, friends: state.friends.concat(action.friend)}
        case 'REMOVE_FRIEND':
            let remainingFriends = state.friends.filter(person => {
                return person.id != action.id
            })
            return {...state, friends: remainingFriends}
        default: 
            return state;
    }
}
