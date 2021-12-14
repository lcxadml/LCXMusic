import * as actionTypes from './constant'
import { 
    getTopBanners,
    getHotRecommends,
    getNewAlbums,
    getTopList,
    getArtist,
    getHotAnchor,
 } from '@/services/recommend.js'

export const changeTopBannerAction = (data) => {
    return {
        type: actionTypes.CHANGE_TOP_BANNERS,
        data
    }
}
export const getTopBannerAction = () => {
    return dispatch => {
        getTopBanners().then(res => {
            dispatch(changeTopBannerAction(res.banners));
        })
    }
}

export const changeHotRecommends = (data) => {
    return {
        type: actionTypes.CHNAGE_HOT_RECOMMENDS,
        data
    }
}

export const getHotRecommendsAction = () => {
    return dispatch => {
        getHotRecommends(8).then(res => {
            dispatch(changeHotRecommends(res.result))
        })
    }
}

export const changeNewAlbumsAction = (data) => {
    return {
        type: actionTypes.CHANGE_NEW_ALBUMS,
        data
    }
}

export const getNewAlbumsAction = () => {
    return dispatch => {
        getNewAlbums().then(res => {
            dispatch(changeNewAlbumsAction(res.albums.slice(0,10)));
        })
    }
}

export const getTopListAction = (idx) => {
    /**
     *  0. 新歌
     *  2. 原创
     *  3. 飙升
     */ 
    return dispatch => {
        getTopList(idx).then(res => {
            let list = res.playlist;
            switch(idx) {
                case 0:
                    dispatch(changeNewRankingAction(list));
                    break;
                case 2:
                    dispatch(changeOriginRankingAction(list));
                    break;
                case 3:
                    dispatch(changeUpRankingAction(list));
                    break;
                default:
                    break;
            }
        })
    }
}
export const changeNewRankingAction = (data) => {
    return {
        type: actionTypes.CHNAGE_NEW_RANKING,
        data
    }
}
export const changeOriginRankingAction = (data) => {
    return {
        type: actionTypes.CHNAGE_ORIGIN_RANGKING,
        data
    }
}
export const changeUpRankingAction = (data) => {
    return {
        type: actionTypes.CHNAGE_UP_RANKING,
        data
    }
}
export const getSettledArtistsAction = () => {
    return dispatch => {
        getArtist(-1, 7).then(res => {
            dispatch(changeSettledArtistsAction(res.artists));
        })
    }
}
const changeSettledArtistsAction = (data) => {
    return {
        type: actionTypes.CHANGE_SETTLED_ARTISTS,
        data
    }
}

export const getHotAnchorAction = () => {
    return dispatch => {
        getHotAnchor(5).then(res => {
            dispatch(changeHotAnchorAction(res.data.list))
        })
    }
}

const changeHotAnchorAction = (data) => {
    return {
        type: actionTypes.CHANGE_HOT_ANCHORS,
        data
    }
}