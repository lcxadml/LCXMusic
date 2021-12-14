import styled from 'styled-components'
import sprite_table from '@/assets/img/sprite_02.png'
export const LoginWrap = styled.div`
    height: 126px;
    background: url(${sprite_table});
    background-position: 0 0;
    .content {
        padding: 16px 22.5px;
        font-size: 12px;
        color: #666;
    }
    .button {
        margin: auto;
        width: 100px;
        height: 31px;
        line-height: 31px;
        color: #fff;
        text-align: center;
        text-shadow: 0 1px 0 #8a060b;
        background: url(${sprite_table});
        background-position: 0 -195px;
    }
`