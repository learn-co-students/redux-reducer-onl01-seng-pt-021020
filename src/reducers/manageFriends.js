export function manageFriends(state, action){
    switch(action.type) {
        case "ADD_FRIEND":
        return {
            friends: [
            ...state.friends,
            {
            name: action.friend.name,
            id: action.friend.id,
            hometown: action.friend.hometown
            }
            ]}
        case "REMOVE_FRIEND":
        return { friends: state.friends.filter(friend => friend.id !== action.id) }
        default:
        return state
    }
}
