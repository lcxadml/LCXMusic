import styled from 'styled-components'
import logo from '@/assets/img/sprite_01.png'
export const HeaderWraper = styled.div`
    font-size: 14px;
    height: 75px;
    background-color: #242424;
    .content {
        position: relative;
        height: 70px;
        display: flex;
        justify-content: space-between;
    }
    .divider {
        height: 5px;
        background-color: #c20c0c;
    }
    .ant-input {
        font-size: 12px;
    }
`;
export const HeaderLeft = styled.div`
    flex: 7;
    display: flex;
    a {
        text-decoration: none;
    }
    .logo {
        width: 176px;
        height: 69px;
        background-position: 0 0;
        display: inline-block;
    }
    .select-list {
        line-height: 70px;
        display: flex;
        justify-content: space-around;
        flex: 1;
    }
  
    .select-item {
        padding: 0 10px;    
        text-align: center;
        color: #ccc;
        position: relative;
    }
    .select-item:last-child:after {
        content: "";
        position:absolute;
        right: -20px;
        top: 20px;
        width: 28px;
        height: 19px;
        background: url(${logo}) -193px 0px no-repeat;

    }
    .select-item:hover {
        color: #fff;
        background: #000;
    }
    .active {
        color: #fff;
        background: #000;
    }
    .active:after {
        position:absolute;
        left: 50%;
        bottom: 0;
        transform: translateX(-50%);
        content: "";
        border-top: 5px solid transparent;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-bottom: 5px solid #c20c0c;
    }
`
export const HeaderRight = styled.div`
    flex: 6;
    display: flex;
    .search {
        width: 158px;
        border-radius: 16px;
        margin-left: 80px;
        height: 32px;
        margin-top: 17px;
        input::placeholder {
            font-size: 12px;
        }
    }
    .search::-webkit-input-placeholder {
        color: red;
    }
    .center {
        color: #ccc;
        margin-left: 10px;
        border: 1px solid #ccc;
        width: 100px;
        font-size: 12px;
        height: 32px;
        margin-top: 15px;
        border-radius: 16px;
        padding-left: 16px;
        line-height: 32px;
        cursor: pointer;
    }
    .profile {
        width: 30px;
        color: #ccc;
        margin: 20px 0 0 15px;
        font-size: 12px;
        cursor: pointer;
    }
`