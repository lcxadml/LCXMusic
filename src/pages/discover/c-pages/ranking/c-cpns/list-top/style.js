import styled from "styled-components";

export const ListTopWrapper = styled.div`
   display: flex;
   padding: 40px;
   .image {
       padding: 3px;
       border: 1px solid #ccc;
       width: 158px;
       height: 158px;
   }
   .top_right {
        margin-left: 25px;
       .title {
            margin-top: 20px;
            font-size: 20px;
            color: #333;
       }
       .update_time {
        margin-top: 10px;
       }
       .current_upate_time {
            color: #666;
       }
       .update_content {
           color: #999;
       }
       .operator {
            margin-left: -8px;
            margin-top: 25px;
       }
   }
`