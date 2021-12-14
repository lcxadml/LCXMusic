import styled from "styled-components";

export const DsicoverHeader = styled.div`
    .top {
        height: 30px;
        background-color: #c20c0c;
    }
`
export const TopMenu = styled.div`
    display: flex;
    padding-left: 180px;
    padding-top: 2px;
    .item a {
        display: block;
        color: #fff;
        text-decoration: none;
        font-size: 10px;
        padding: 0 13px;
        height: 20px;
    }
    .item a:hover, .active {
        border-radius: 10px;
        background-color: #9b0909;
        line-height: 20px;
    }
    .item {
        padding: 0 13px;
    }

`