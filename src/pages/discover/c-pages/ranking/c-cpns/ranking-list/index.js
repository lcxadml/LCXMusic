import React, { memo } from 'react';
import { useSelector, shallowEqual } from 'react-redux'

import List from '../list';
import { ListTopWrapper } from './style'
const ListTop = memo(() => {
    const { topList } = useSelector(state => ({
        topList: state.getIn(["ranking", "topList"])
    }), shallowEqual)
    return (
        <ListTopWrapper>
            <h3 className='top_ranking'>云音乐特色榜</h3>
            <List topList={topList.slice(0, 4)} />
            <h3 className='top_ranking'>云音乐特色榜</h3>
            <List topList={topList.slice(4)} />
        </ListTopWrapper>
    );
});

export default ListTop;