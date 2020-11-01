export function manageFriends(state = {friends: [] }, action){

  switch(action.type) {
    case 'ADD_FRIEND':
      return (
        {...state, friends: [...state.friends, action.friend]}
      )

    case 'REMOVE_FRIEND':
      const removeFriendAtThisIndex = state.friends.findIndex(friend => friend.id === action.id);

      return (
        {...state,
          friends: [
            ...state.friends.slice(0, removeFriendAtThisIndex),
            //remove friends from start of array to this index
            ...state.friends.slice(removeFriendAtThisIndex + 1)
            //extract from this position to the end, basically creates a new array with all people
            //except the one I removed
          ]}
      )

      default: return state;
  }
}

// action = {
//     type: "ADD_FRIEND",
//     friend: {
//       name: "Chrome Boi"
//       homewtown: "NYC",
//       id: 1
//     }
//   }
