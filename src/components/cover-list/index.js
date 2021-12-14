import React, { memo } from 'react';
import { CoverContainer } from './style';
import { getplayCountFormate } from '../../utils/formate';
const CoverList = memo((props) => {
    const { list = [] } = props;
    return (
        <CoverContainer>
            <div className="list">
                {list.map(item => {
                    return (
                        <div className='cover-item' key={item.id}>
                            <div className="image">
                                <img src={item.picUrl + '?param=140y140'} alt="" />
                                <div className="cover"></div>
                                <div className="bottom">
                                        {getplayCountFormate(item.playCount)}
                                </div>
                            </div>
                            <div className="title">{item.name}</div>
                        </div>
                    )
                })}
            </div>
        </CoverContainer>
    );
});

export default CoverList;