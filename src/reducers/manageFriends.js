export function manageFriends(state, action){
    switch (action.type) {
        case 'ADD_FRIEND':
            return {friends: [...state.friends, action.friend]}
        case 'REMOVE_FRIEND':
            let i = state.friends.findIndex(friend => friend.id === action.id)
            return {friends: [...state.friends.slice(0, i), ...state.friends.slice(i+1, state.friends.length)]}
        default:
            return state
    }
}
