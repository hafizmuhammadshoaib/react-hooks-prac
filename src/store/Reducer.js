import { actionTypes } from "./ActionTypes";


let INITIAL_STATE = {
    isProgress: false,
    isError: false,
    errorText: "",
    errorStatus: 0,
    posts: []
}

export function sampleReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case actionTypes.GET_POSTS_PROG:
            return { ...state, isProgress: true }
        case actionTypes.GET_POSTS_SUCC:
            return { ...state, isProgress: false, posts: action.payload }
        case actionTypes.GET_POSTS_FAIL:
            return { ...state, isProgress: false, isError: true, errorText: action.payload.message, errorStatus: action.payload.status }

        case actionTypes.GET_POST_PROG:
            return { ...state, isProgress: true, }
        case actionTypes.GET_POST_SUCC:
            return { ...state, isProgress: false, posts: [action.payload] }
        case actionTypes.GET_POST_FAIL:
            return { ...state, isProgress: false, isError: true, errorText: action.payload.message, errorStatus: action.payload.status }
        default:
            return state;
    }
}