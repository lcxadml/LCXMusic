import styled from "styled-components"

export const ListWarpper = styled.div`
    .list_item {
        width: 239px;
        display: flex;
        position: relative;
        padding: 10px 0 10px 20px;
        cursor: pointer;
        .item_right {
            margin-left: 8px;
            .time {
                margin-top: 5px;
                color: #999;
            }
        }
    }
    .list_item:hover {
        background: #f5f5f5;
    }
    .active {
        background-color: rgba(200, 200, 200, .3);
        width: 239px;
    }
    .mask {
        position: absolute;
        left: 0;top: 0; right: 0; bottom: 0;
    }
`