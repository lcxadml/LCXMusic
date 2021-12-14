import { 
    CHANGE_TOP_BANNERS,
    CHNAGE_HOT_RECOMMENDS,
    CHANGE_NEW_ALBUMS,
    CHNAGE_UP_RANKING,
    CHNAGE_NEW_RANKING,
    CHNAGE_ORIGIN_RANGKING,
    CHANGE_SETTLED_ARTISTS,
    CHANGE_HOT_ANCHORS
 } from "./constant";
import { Map } from 'immutable'
const defaultState = Map({
    topBanners:[],
    recommends: [],
    newAlbums: [],
    newRankings: {},
    upRankings: {},
    originRankings: {},
    settledArtists: [],
    hotAnchors: []
})

function reducer(state=defaultState, action) {
    switch (action.type) {
        case CHANGE_TOP_BANNERS:
            return state.set('topBanners', action.data)
        case CHNAGE_HOT_RECOMMENDS:
            return state.set('recommends', action.data)
        case CHANGE_NEW_ALBUMS:
            return state.set('newAlbums', action.data)
        case CHNAGE_UP_RANKING:
            return state.set('upRankings', action.data)
        case CHNAGE_NEW_RANKING:
            return state.set('newRankings', action.data)
        case CHNAGE_ORIGIN_RANGKING:
            return state.set('originRankings',action.data)
        case CHANGE_SETTLED_ARTISTS:
            return state.set('settledArtists', action.data)
        case CHANGE_HOT_ANCHORS:
            return state.set('hotAnchors', action.data)
        default:
            return state;
    }
}

export default reducer;