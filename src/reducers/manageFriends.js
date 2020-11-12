export function manageFriends(state={friends:[]}, action){
   
    switch (action.type) {
        case "ADD_FRIEND":
            {friends: state.friends.push(action.friend)}
            return state
            break;

        case "REMOVE_FRIEND":
            return {friends: state.friends.filter(friend=>friend.id !== action.id)}
            break;
    
        default:
            return state;
            break;
    }
    
}
