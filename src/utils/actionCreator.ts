import { AnyAction } from "redux"

export const createAction = <T>(type: string) => {
    return {
        type, setPayload: function (payload: T) {
            return { type, payload }
        }, match: function (action: AnyAction): action is { type: string, payload: T } {
            return type === action.type
        }
    }
}

/**
 * 创建发起异步请求的Action时候使用，
 * toSaga函数会返回一个action，该action的type多了一个/toSaga，用来区分发送到redux的action
 * toRedux函数与toSaga类似
 * @param type 发起action的类型，用来区别不同的action
 */
export const asyncActionCreator = <T, K>(type: string) => {
    return {
        type, toSaga: function (payload: T) {
            return { type: `${type}/toSaga`, payload }
        }, matchSaga: function (action: AnyAction): action is { type: string, payload: T } {
            return `${type}/toSaga` === action.type
        }, toRedux: function (payload: K) {
            return { type, payload }
        }, matchRedux: function (action: AnyAction): action is { type: string, payload: K } {
            return type === action.type
        }
    }
}