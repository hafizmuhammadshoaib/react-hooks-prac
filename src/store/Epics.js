// import SampleTypes from "../constants/AuthTypes";
import { of } from 'rxjs';
import { ofType, } from "redux-observable";
import { switchMap, pluck, catchError, map, takeUntil, } from "rxjs/operators";

import { actionTypes } from "./ActionTypes";

export class Epics {
    static getPosts(action$, state$, { ajaxGet }) {
        return action$.pipe(ofType(actionTypes.GET_POSTS_PROG), switchMap(({ payload }) => {
            return ajaxGet(`https://jsonplaceholder.typicode.com/posts/`).pipe(pluck("response"), map(obj => {
                return {
                    type: actionTypes.GET_POSTS_SUCC,
                    payload: obj
                }
            })
                , catchError((err, source) => {
                    return of({ type: actionTypes.GET_POSTS_FAIL, payload: err })
                }))

        }))
    }
    static getPost(action$, state$, { ajaxGet }) {
        return action$.pipe(ofType(actionTypes.GET_POST_PROG), switchMap(({ payload }) => {
            return ajaxGet(`https://jsonplaceholder.typicode.com/posts/${payload?.id}`).pipe(pluck("response"), map(obj => {
                return {
                    type: actionTypes.GET_POST_SUCC,
                    payload: obj
                }
            }),
                takeUntil(action$.pipe(
                    ofType(actionTypes.CANCEL_POST_REQ)
                ))
                , catchError((err, source) => {
                    return of({ type: actionTypes.GET_POST_FAIL, payload: err })
                }))

        }))
    }


}
