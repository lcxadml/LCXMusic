import React, { memo, useRef, useState } from 'react';
import { headerLinks } from '@/common/local-data';
import { NavLink } from 'react-router-dom';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons'

import { getSearch } from '@/services/search';

import SearchRecommend from './c-cpns/search-recommend';
import {
    HeaderWraper,
    HeaderLeft,
    HeaderRight
} from './style'
const AppHeader = memo(() => {
    const [inputValue, setInputValue] = useState("");
    const [searchRes, setSearchRes] = useState({});
    const [isShowSearch, setIsShowSearch] = useState(false);
    const inputRef = useRef();

    const changeInputValue = (e) => {
        setInputValue(e.target.value);
        if(!e.target.value.trim()) {
            setIsShowSearch(false);
            return;
        };
        if(e.target.value.trim() === inputValue.trim()) return;

        getSearch(e.target.value).then(res => {
            setSearchRes(res.result);
            setIsShowSearch(true);
        }).catch(err => {
            console.log(err);
        })
    }
    const onFocusSearch = () => {
        if(!inputValue.trim()) {
            setIsShowSearch(false);
        } else {
            setIsShowSearch(true);
        }
    }
    const onBlurSearch = () => {
        setTimeout(() => {
            setIsShowSearch(false);
        }, 300)
    }
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
                    <Input
                     className="search" 
                     placeholder="音乐/视频/电台/用户" 
                     value={inputValue}
                     ref={inputRef}
                     onChange={changeInputValue}
                     onFocus={onFocusSearch}
                     onBlur={onBlurSearch}
                     prefix={<SearchOutlined />} 
                     />
                    <div className="center">创作者中心</div>
                    <div className="profile">登录</div>
                </HeaderRight>
            </div>
            {
                isShowSearch ?
                <div className="control_show_search">
                    <SearchRecommend
                    className="search_recommend" 
                    inputValue={inputValue}
                    res={searchRes}
                    />
                </div> :
                ""
            }
            <div className="divider"></div>
        </HeaderWraper>
    );
});

export default AppHeader;