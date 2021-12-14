// 1. 引入外部的库和组件
import React, { memo, useState } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { useEffect, useRef, useCallback } from 'react';

//  2.自己定义的工具类
import { getTopBannerAction } from '../../store/action'

// 3. 引入的组件
import { Carousel } from 'antd';
import {
    TopBannerWrap,
    TopBannerLeft,
    TopBannerRight,
    TopBannerPointer
} from './style'
    const TopBanner = memo(() => {
    const { topBanners } = useSelector((state) => {
        return {
            topBanners: state.get('recommend').get('topBanners')
        }
    }, shallowEqual)
    const [index, setIndex] = useState(0);

    // 2. 其他hooks
    const dispatch = useDispatch()
    const carouselRef = useRef({name: 'lcx'})
    const goPre = useCallback(() => {
        carouselRef.current.prev();
    }, [carouselRef])
    const goNext = useCallback(() => {
        carouselRef.current.next();
    }, [carouselRef])
    const changeCarousel = useCallback((from, to) => {
        setIndex(to)
    }, [])
    // 3. useEffectHooks
    useEffect(() => {
        dispatch(getTopBannerAction())
    }, [dispatch])
    return (
        <TopBannerWrap bgimg={topBanners[index] && topBanners[index].imageUrl + '?imageView&blur=40x20'}>
            <div className="wrap wrap-v2">
            <TopBannerLeft>
                <div className="left">
                <Carousel autoplay effect="fade" ref={carouselRef} beforeChange={changeCarousel}>
                    {topBanners.map(item => {
                        return (
                            <img src={item.imageUrl} key={item.encodeId} alt="" />
                        )
                    })}
                </Carousel>
                </div>
            </TopBannerLeft>
            <TopBannerRight>
                <div className="right">
                </div>
            </TopBannerRight>
            </div>
            <TopBannerPointer>
                <div className="left-point" onClick={goPre}></div>
                <div className="right-point" onClick={goNext}></div>
            </TopBannerPointer>
        </TopBannerWrap>
    );
});

export default TopBanner;