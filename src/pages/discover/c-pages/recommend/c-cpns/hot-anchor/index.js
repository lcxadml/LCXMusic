import React, { memo, useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux'

import { getHotAnchorAction } from '../../store/action'

import { AnchorWarpper } from './style';
const HotAnchor = memo(() => {
    
    const { hotAnchors } = useSelector(state => {
        return {
            hotAnchors: state.getIn(['recommend', 'hotAnchors'])
        }
    }, shallowEqual)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getHotAnchorAction())
    }, [dispatch])

    console.log(hotAnchors);
    return (
        <AnchorWarpper>
            <div className="header">热门主播</div>
            <div className="anchor_list">
                {
                    hotAnchors.map((item => {
                        return (
                            <div className="anchor_item" key={item.id}>
                                <img src={item.avatarUrl+"?param=40y40"} alt="" />
                                <div className="anchor_right">
                                    <a href="#/" className="anchor_name">{item.nickName}</a>
                                    <div className="anchor_dec">{item.mainAuthDesc}</div>
                                </div>
                            </div>
                        )
                    }))
                }
            </div>
        </AnchorWarpper>
    );
});

export default HotAnchor;