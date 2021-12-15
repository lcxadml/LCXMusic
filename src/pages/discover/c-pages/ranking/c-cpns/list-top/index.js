import React, { memo, useMemo } from 'react';
import { useSelector, shallowEqual } from 'react-redux'

import { getDate } from '@/utils/formate'

import Operator from "@/components/operator"
import { ListTopWrapper } from './style'
const ListTop = memo(() => {
    const { topList, currentRankingId, rankingDetails } = useSelector(state => ({
        topList: state.getIn(["ranking", "topList"]),
        currentRankingId: state.getIn(["ranking", "currentRankingId"]),
        rankingDetails: state.getIn(["ranking", "rankingDetails"]),
    }), shallowEqual)

    const currentRankingIndex = useMemo(() =>{
        return topList.findIndex(item => currentRankingId === item.id);
    }, [topList, currentRankingId])
    return (
        <ListTopWrapper>
            <div className="image">
                <img src={rankingDetails && rankingDetails.coverImgUrl + "?param=150y150"} alt="" />
            </div>
            <div className="top_right">
                <div className="title">{rankingDetails && rankingDetails.name}</div>
                <div className="update_time">
                    <span className="current_upate_time">
                        最近更新日期：
                        {rankingDetails && getDate(rankingDetails.updateTime)}
                    </span>
                    <span className="update_content">
                      ({topList[currentRankingIndex] && topList[currentRankingIndex].updateFrequency})
                    </span>
                    </div>
                <Operator
                 className="operator" 
                 id={rankingDetails.tracks &&
                 rankingDetails.tracks[0].id}
                />
            </div>
        </ListTopWrapper>
    );
});

export default ListTop;