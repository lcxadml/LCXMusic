import styled from "styled-components";
import footerImage1 from '@/assets/img/sprite_footer_01.png'
import footerImage2 from '@/assets/img/sprite_footer_02.png'
export const AppFooter = styled.div`
    width: 100%;
    border-top: 1px solid #d3d3d3;
    height: 120px;
    .footer {
        display: flex;
    }
`

export const FooterLeft = styled.div`
    flex: 1;
    .link {
        display: flex;
        margin-top: 20px;
    }
    .link a {
        color: #999;
        padding: 0 10px;
        border-left: 1px solid #999;
        font-size: 12px;
        height: 12px;
        line-height: 12px;
    }
    .link a:first-child {
        border-left: none;
    }
    .right,.contact {
        font-size: 12px;
        color: #666;
        margin: 7.5px 0;
    }
`

export const FooterRight = styled.div`
    flex: 1;
    .enter {
        display: flex;
        margin-top: 40px;
    }
    li {
        flex: 1;
        hight: 100%;
    }
    .enter .image {
        margin: auto;
        width: 50px;
        height: 50px;
        background-image: url(${footerImage2});
        background-repeat: no-repeat;
        background-size: 104px 444px;
    }
    .enter li:nth-child(1) .image {
        background-position: -55px -100px;
    }
    .enter li:nth-child(2) .image {
        background-position: 0px -100px;
    }
    .enter li:nth-child(3) .image {
        background-position: 0px 0px;
    }
    .enter li:nth-child(4) .image {
        background-position: -55px -50px;
    }
    .enter .title {
        margin: auto;
        width: 52px;
        height: 14px;
        background-image: url(${footerImage1});
        background-repeat: no-repeat;
        background-size: 170px 110px;
    }
    .enter li:nth-child(1) .title {
        background-position: 0 -20px;
    }
    .enter li:nth-child(2) .title {
        background-position: 0 -40px;
    }
    .enter li:nth-child(3) .title {
        background-position: 0 -60px;
    }
    .enter li:nth-child(4) .title {
        background-position: 0 -80px;
    }
    .enter li:nth-child(5) .title {
        background-position: 0 -100px;
    }
`