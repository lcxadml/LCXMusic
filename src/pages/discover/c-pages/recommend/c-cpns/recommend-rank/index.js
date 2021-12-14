import React, { memo, useEffect } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux'

import { getTopListAction } from '../../store/action';

import TopRanking from '@/components/top-ranking';
import HeadREC from '@/components/them-header-rcd';
import { RankingWrapper } from './style';
const RECRank = memo(() => {
    const { newRanking, upRanking, originRanking } = useSelector( data => ({
        newRanking: data.get('recommend').get('newRankings'),
        upRanking: data.get('recommend').get('upRankings'),
        originRanking: data.get('recommend').get('originRankings'),
    }), shallowEqual);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getTopListAction(0))
        dispatch(getTopListAction(2))
        dispatch(getTopListAction(3))
    }, [dispatch])
    return (
        <div>
            <HeadREC title="榜单" />
            <RankingWrapper>
                <div className="container">
                <TopRanking rankings= {upRanking} />
                <TopRanking rankings= {newRanking} />
                <TopRanking rankings= {originRanking} />
                </div>
            </RankingWrapper>
        </div>
    );
});

export default RECRank;