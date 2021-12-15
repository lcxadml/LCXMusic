import { 
    CHANGE_TOP_LIST,
    CHANGE_RANKING_DETAIL,
    CHANGE_CURRENT_RANKINGID
 } from './constant'

import { 
    getTopList,
    getRankingById
 } from "@/services/ranking"
export const getTopListAction = () => {
    return dispatch => {
        getTopList().then(res => {
            dispatch(changeTopListAction(res.list));
            dispatch(changeCurrentRankingIdAction(res.list[0].id));
            dispatch(getRankingDetailAction(res.list[0].id))
        })
    }
}
const changeTopListAction = (data) => ({
    type: CHANGE_TOP_LIST,
    data,
})

export const getRankingDetailAction = (id) => {
    return dispatch => {
        getRankingById(id).then(res => {
            dispatch(changeRankingDetailAction(res.playlist));
        }).catch(err => {
            console.log("出错了····");
            console.log(err);
        })
    }
}
const changeRankingDetailAction = (data) => {
    return {
        type: CHANGE_RANKING_DETAIL,
        data,
    }
}
export const  getCurrentRankingIdAction = (data) => {
    return dispatch  => {
        dispatch(getRankingDetailAction(data));
        dispatch(changeCurrentRankingIdAction(data));
    }
}
export const changeCurrentRankingIdAction = (data) => {
    return ({
        type: CHANGE_CURRENT_RANKINGID,
        data
    })
}