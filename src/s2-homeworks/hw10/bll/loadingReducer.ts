
export type InitialStateType = typeof initState
const initState = {
    isLoading: false,
}

export const loadingReducer = (state:InitialStateType = initState, action: ActionType):InitialStateType => { // fix any
    switch (action.type) {
        // пишет студент  // need to fix
        case "CHANGE_LOADING":
            return {
                ...state,
                isLoading: action.isLoading
            }

        default:
            return state
    }
}

export const loadingAC = (isLoading: boolean) => ({
    type: 'CHANGE_LOADING',
    isLoading,
})

export type LoadingActionType = ReturnType<typeof loadingAC>
type ActionType = LoadingActionType