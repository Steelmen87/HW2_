import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            const newState = [...state]
            return action.payload === 'up'
                ? newState.sort((a, b) => a.name.toUpperCase().localeCompare(b.name.toUpperCase()))
                : newState.sort((a, b) => b.name.toUpperCase().localeCompare(a.name.toUpperCase()))
        }
        case 'check': {
            return state.filter(u => u.age > 18) // need to fix
        }
        default:
            return state
    }
}
