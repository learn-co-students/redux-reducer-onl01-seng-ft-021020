export function manageFriends(state = {friends: []}, action){

    // action = {
    //     type: "ADD_FRIEND",
    //     friend: {
    //       name: "Chrome Boi"
    //       homewtown: "NYC",
    //       id: 1
    //     }
    //   }

      switch (action.type) {
        case 'ADD_FRIEND':
            return (
                {...state, 
                friends: [
                    ...state: state.friends,
                    action.friend
                ] 
            }
        )

        case 'REMOVE_FRIEND':
            return (
                {...state, friends: state.friends.filter(friend => friend.id !== action.id)}
            )

        default:
            return state;
      }

}
