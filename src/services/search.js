import request from './request'

export const getSearch = (keywords) => {
    return request({
        url: "/search/suggest",
        params: {
            keywords
        }
    })
}