import React, { memo, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getTopListAction } from '../ranking/store/action';

import RankingList from './c-cpns/ranking-list';
import ListTop from './c-cpns/list-top';
import SongList from './c-cpns/song-list'
import {RankingWrapper} from './style'
const Ranking = memo(() => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getTopListAction());
    }, [dispatch])
    return (
        <RankingWrapper>
            <div className="content wrap-v2">
                <div className="left">
                    <RankingList></RankingList>
                </div>
                <div className="right">
                    <ListTop />
                    <SongList />
                </div>
            </div>
        </RankingWrapper>
    );
});

export default Ranking;