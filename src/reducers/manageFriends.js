let c = 0
let j = 0
export function manageFriends(state, action) {
  console.log(c += 1, state.friends, j += 1, action)
	switch (action.type) {
		case "ADD_FRIEND":
			return (
				{...state, friends: [...state.friends, action.friend]}
			)
		case "REMOVE_FRIEND":
			const ind = state.friends.findIndex(friend => friend.id === action.id)
				return (
				  {...state,
					  friends: [
						...state.friends.slice(0, ind),
						...state.friends.slice(ind + 1)
					  ]
				  }
				)

			default:
				return state;
	}
}	
