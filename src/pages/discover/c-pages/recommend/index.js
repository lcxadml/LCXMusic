import React, { memo } from 'react';
import TopBanner from './c-cpns/top-banner';
import HotRecommend from './c-cpns/hot-recommend';
import NewAlbum from './c-cpns/new-album'
import RECRank from './c-cpns/recommend-rank'
import Login from './c-cpns/login'
import Artist from './c-cpns/artist'
import HotAnchor from './c-cpns/hot-anchor';
import { 
    Content,
    ContentLeft,
    ContentRigth
 } from './style';
const Recommend = memo((props) => {
    
    // 组件和redux关联主要做两件事
    // 1. 获取数据
    // 2. 进行操作
    // 以有用到了useSelector就用shallowEqual，进行浅层比较
    
    return (
        <div>
            <TopBanner/>
            <Content className="wrap-v2">
                <ContentLeft>
                    <HotRecommend />
                    <NewAlbum />
                    <RECRank />
                </ContentLeft>
                <ContentRigth>
                    <Login></Login>
                    <Artist></Artist>
                    <HotAnchor />
                </ContentRigth>
            </Content>
        </div>
    );
});

export default Recommend;