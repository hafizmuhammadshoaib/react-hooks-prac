import { actionTypes } from "./ActionTypes";

export class Actions {
    static getPosts() {
        return {
            type: actionTypes.GET_POSTS_PROG,
        }
    }
    static getPost(id) {
        return {
            type: actionTypes.GET_POST_PROG,
            payload: { id }
        }
    }
    static cancelReq() {
        return {
            type: actionTypes.CANCEL_POST_REQ
        }
    }
}