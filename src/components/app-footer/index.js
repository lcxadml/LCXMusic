import React, { memo } from 'react';
import { footerLinks } from '@/common/local-data'
import { 
    AppFooter, 
    FooterLeft, 
    FooterRight
 } from './style'
const AppHeader = memo(() => {
    return (
        <AppFooter>
            <div className="footer wrap-v2">
                <FooterLeft>
                    <div className="link">
                        {footerLinks.map((item, index) => {
                            return (
                                <a href={item.link} key={index}>{item.title}</a>
                            )
                        })}
                    </div>
                    <div className="right">
                    网易公司版权所有©1997-2021杭州乐读科技有限公司运营：浙网文[2021] 1186-054号
                    </div>
                    <div className="contact">
                    违法和不良信息举报电话：0571-89853516 举报邮箱：ncm5990@163.com
                    </div>
                    <div className="right">
                    粤B2-20090191-18  工业和信息化部备案管理系统网站  浙公网安备 33010902002564号
                    </div>
                </FooterLeft>
                <FooterRight>
                    <ul className="enter">
                        <li>
                            <div className="image"></div>
                            <div className="title"></div>
                        </li>
                        <li>
                            <div className="image"></div>
                            <div className="title"></div>
                        </li>
                        <li>
                            <div className="image"></div>
                            <div className="title"></div>
                        </li>
                        <li>
                            <div className="image"></div>
                            <div className="title"></div>
                        </li>
                        <li>
                            <div className="image"></div>
                            <div className="title"></div>
                        </li>
                    </ul>
                </FooterRight>
            </div>
        </AppFooter>
    );
});

export default AppHeader;