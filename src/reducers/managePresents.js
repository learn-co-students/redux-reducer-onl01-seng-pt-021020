export function managePresents(state = {numberOfPresents: 0}, action){

  switch(action.type) {
    case 'INCREASE':
      return Object.assign({}, state, {
        numberOfPresents: state.numberOfPresents + 1
      })
      //Object.assign overwrites here since the key name is the same

      default: return state;
  }

}


//action = {type: "INCREASE"}

//Object.assign(target, ...sources)
// The Object.assign() copies all enumerable and own properties from
// the source objects to the target object.
// It returns the target object.
