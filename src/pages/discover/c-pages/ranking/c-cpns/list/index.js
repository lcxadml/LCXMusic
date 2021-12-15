import React, { memo } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';

import { getCurrentRankingIdAction } from '../../store/action'

import { ListWarpper } from './style'

const List = memo((props) => {
    const { topList } = props;
    const dispatch = useDispatch();
    const { currentRankingId } = useSelector(state => ({
        currentRankingId: state.getIn(["ranking", "currentRankingId"])
    }), shallowEqual);
    

    const changeCurrentDetail = (id) => {
        dispatch(getCurrentRankingIdAction(id));
    }
    return (
        <ListWarpper>
            {
                topList.map((item, index) => {
                    return (
                        <div
                         className={`list_item`} 
                         key={item.id}
                         onClick={() => changeCurrentDetail(item.id)}
                         >
                            <div className="image">
                                <img src={item.coverImgUrl + "?param=40y40"} alt="" />
                            </div>
                            <div className="item_right">
                                <div className={`title`}>{item.name}</div>
                                <div className="time">{item.updateFrequency}</div>
                            </div>
                            <div className={`mask ${item.id === currentRankingId ? "active" : ""}`}></div>
                        </div>
                    )
                })
            }
        </ListWarpper>
    );
});

export default List;