import styled from "styled-components";
// sprite_02.png
import sprite2 from '@/assets/img/sprite_02.png'
export const HeaderWrap = styled.div`
    background-color: #fff;
    display: flex;
    height: 55px;
    position: relative;
    border-bottom: 2px solid #C10D0C;
    .left {
        flex: 4;
        display: flex;
        line-height: 55px;
        .title {
            position: relative;
            padding-left: 34px;
            color: #333;
            font-size: 20px;
        }
        .title:before {
            content: '';
            position: absolute;
            left: 0;
            top: 12px;
            width: 35px;
            height: 55px;
            background: url(${sprite2});
            background-position: -225px -156px;
        }
        .recommend-list {
            display: flex;
            font-size: 12px;
            color: #666;
            margin-top: 20px;
            height: 12px;   
            line-height: 12px;
            .reccomend-item {
                padding: 0 15px;
                border-left: 1px solid #ccc;
            }
            .reccomend-item:first-child {
                border-left: none;
            }
        }
    }
    
    .right {
        line-height: 55px;
        flex: 1;
        padding-right: 10px;
        text-align: right;  
        font-size: 12px;
        color: #666;
        .logo {
            display: inline-block;
            width: 12px;
            height: 12px;
            background: url(${sprite2});
            background-position: 0 -240px;
            vertical-align: text-top;
            margin-left: 4px;
        }
    }
`