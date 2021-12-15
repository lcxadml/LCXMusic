
import { Map } from "immutable" 
import { 
    CHANGE_TOP_LIST,
    CHANGE_CURRENT_RANKINGID,
    CHANGE_RANKING_DETAIL,
 } from './constant'

const initalState = Map({
    topList: [],
    rankingDetails: {},
    currentRankingId: 0,
})

export default function rankingReducer (state = initalState, action){
    switch(action.type) {
        case CHANGE_TOP_LIST:
            return state.set('topList', action.data);
        case CHANGE_CURRENT_RANKINGID:
            return state.set("currentRankingId", action.data);
        case CHANGE_RANKING_DETAIL:
            return state.set("rankingDetails", action.data);
        default: 
            return state;
    }
}