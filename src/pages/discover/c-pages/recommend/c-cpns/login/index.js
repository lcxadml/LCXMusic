import React, { memo } from 'react';
import { LoginWrap } from './style';
const Login = memo(() => {
    return (
        <LoginWrap>
            <p className="content">
            登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机
            </p>
            <div href="#" className="button">用户登录</div>
        </LoginWrap>
    );
});

export default Login;