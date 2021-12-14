import React, { memo } from 'react';
import { headerLinks } from '@/common/local-data';
import { NavLink } from 'react-router-dom';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons'
import {
    HeaderWraper,
    HeaderLeft,
    HeaderRight
} from './style'
const AppHeader = memo(() => {
    //页面代码
    // const showSelectItem = (item, index) => {
    //     if(item.index < 3) {
    //         return <NavLink key={index} className="select-tiem" to={item.link}>{item.title}</NavLink>
    //     } else {
    //         return <a key={index} className="select-tiem" href={item.link}>{item.title}</a>
    //     }
    // }
    // 返回的jsx
    return (
        <HeaderWraper>
            <div className="content wrap-v1">
                <HeaderLeft>
                    <a href="#/" className="logo sprite_01"> </a>
                    <div className="select-list">
                        {headerLinks.map((item, index)=> {
                            if(index < 3) {
                                return (
                                    <NavLink className="select-item" key={index} to={item.link}>{item.title}</NavLink>
                                )
                            } else {
                                return (
                                    <a className="select-item" key={index} href={item.link}>{item.title}</a>
                                )
                            }
                        })}
                    </div>
                </HeaderLeft>
                <HeaderRight>
                    <Input className="search" placeholder="音乐/视频/电台/用户" prefix={<SearchOutlined />} />
                    <div className="center">创作者中心</div>
                    <div className="profile">登录</div>
                </HeaderRight>
            </div>
            <div className="divider"></div>
        </HeaderWraper>
    );
});

export default AppHeader;