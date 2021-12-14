import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { getHotRecommendsAction } from '../../store/action';
import {
    HotRecWrap,
} from './style'

import HeadREC from '@/components/them-header-rcd';
import CoverList from '@/components/cover-list';
const HotRecommend = memo(() => {
    const dispatch = useDispatch();
    const { recommends } = useSelector((state) => {
        return {
            recommends: state.get('recommend').get('recommends')
        }
    }, shallowEqual)
    //2  react的hooks
    useEffect(() =>{
        dispatch(getHotRecommendsAction());
    }, [dispatch])

    // 3 其他hooks

    return (
        <HotRecWrap>
            <HeadREC title="热门推荐" list={['华语', '流行', '摇滚', '民谣', '电子']} />
            <CoverList list={recommends}/>
        </HotRecWrap>
           
    );
});

export default HotRecommend;