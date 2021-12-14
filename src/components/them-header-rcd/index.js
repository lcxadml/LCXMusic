import React, { memo } from 'react';
import { HeaderWrap } from './style';
const HeadREC = memo((props) => {
    const { title, list = [] } = props;
    return (
        <HeaderWrap>
                <div className="left">
                    <div className="title">
                        {title}
                    </div>
                    <div className="recommend-list">
                        {list.map((item, index) => {
                            return (
                                <a href="#/" className="reccomend-item" key={item}>{item}</a>
                            )
                        })}
                    </div>
                </div>
                <div className="right">
                    <a href="#/" className="more">更多</a>
                    <i className='logo'></i>
                </div>
        </HeaderWrap>
    );
});

export default HeadREC;