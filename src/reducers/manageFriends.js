export function manageFriends(state = {friends: []}, action){
    switch (action.type){
        case 'ADD_FRIEND':
            return {friends: [...state.friends, action.friend]};
        case 'REMOVE_FRIEND':
            return {friends: state.friends.filter(function(friend) {return friend.id != action.id})};
        default:
            return state;
    }
}
