import styled from "styled-components";
import tablepng from '@/assets/img/table.png'
export const SongListWrapper = styled.div`
    padding: 40px;
    .head {
        border-bottom: 2px solid #c20c0c;
        padding-bottom: 5px;
        .title {
            font-size: 20px;
            color: #333;
        }
        .song_count {
            margin-left: 20px;
            color: #666;
        }
        .play_count {
            margin-top: 10px;
            float: right;
            .num {
                color: #c20c0c;
                font-weight: 700;
            }
        }
    }
    .container {
        border: 1px solid #d9d9d9;
        .hd {
            display: flex;
            height: 38px;
            line-height: 38px;
            color: #666;
            .hd_index, .hd_title, .hd_time, .hd_singer {
                padding-left: 8px;
                height: 38px;
                background: url(${tablepng});
                border-right: 1px solid #d9d9d9;
            }
            .hd_index {
                width: 77px;
                    background-position: 0 0;
                    background-repeat: repeat-x;
            }
            .hd_title {
                width: 326px;
            }
            .hd_time {
                width: 91px;
            }
            .hd_singer {
                width: 26%;
            }
        }
        .item_name, .item_time, .item_time, .item_singer {
            padding-left: 8px;
        }
        .list_item {
            padding: 5px 0;
            display: flex;
            .item_index {
                padding-left: 20px;
                width: 77px;
            }
            .item_name {
                cursour: pointer;
                width: 326px;
                .name {
                    color: #333;
                }
                .i_icon {
                    display: inline-block;
                    width: 17px;
                    height: 17px;
                    background: url(${tablepng});
                    background-position: 0 -103px;
                    vertical-align: top;
                    cursor: pointer;
                    margin-right: 5px;
                }
            }
            .item_time {
                width: 91px;
            }
            .item_singer {
                width: 140px;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
                word-break: break-all;
            }
        }
        .list_item:nth-child(2n-1) {
            background: #f5f5f5;
        }
    }
`