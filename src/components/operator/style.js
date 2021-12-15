import styled from "styled-components";
import sprite_button from '@/assets/img/sprite_button.png'

export const OperatorWrapper = styled.div`
    .operator {
        i {
            display: inline-block;
            line-height: 31px;
            text-align: center;
        }
        display: flex;
        .play_btn {
            width: 66px;
            height: 31px;
            cursor: pointer;
            background: url(${sprite_button});
            background-position: right -428px;
            i {
                margin-left: 10px;
                text-align: right;
                width: 51px;
                color: #fff;
                height: 31px;
                background: url(${sprite_button});
                background-position: 0 -387px;
            }
            i:before {
                display: inline-block;
                content: "";
                width: 20px;
                height: 18px;
                margin-right: 2px;
                background: url(${sprite_button});
                background-position: 0 -1622px;
                vertical-align: sub;
            }
        }
        .add_btn {
            cursor: pointer;
            height: 31px;
            width: 31px;
            background: url(${sprite_button});
            background-position: 0 -1588px;
            margin-left: -2px;
        }
        .collect_btn, .share_btn, .down_btn {
            cursor: pointer;
            width: 59px;
            height: 31px;
            background: url(${sprite_button});
            background-position: right -1020px;
            margin-left: 5px;
            i {
                text-align: right;
                width: 54px;
                background: url(${sprite_button});
                background-position: 0 -977px;
            }
        }
        .collect_btn i {
            background-position: 0 -977px;
        }
        .share_btn i {
            background-position: 0 -1225px;
        }
        .down_btn i {
            background-position:0 -2761px;
        }
        .comment_btn {
            cursor: pointer;
            margin-left: 5px;
            width: 86.2px;
            height: 31px;
            background: url(${sprite_button});
            background-position: right -1020px; 
            i {
                text-align:right;
                width: 81.2px;
                background: url(${sprite_button});
                background-position: 0 -1465px;
            }
        }
    }
`