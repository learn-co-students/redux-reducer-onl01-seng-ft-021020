export function manageFriends(state, action){
  if (action.type === 'ADD_FRIEND') {
        
        let friends = state.friends
        friends.push(action.friend)
        return {friends}
    }
    else if (action.type === 'REMOVE_FRIEND') {
      let friends = []
      state.friends.forEach(element => {
        if(element.id != action.id){
          friends.push(element)
        }

        
      });
      
      return {friends}
    }
    else{
      return {friends: state.friends }

    }
}
