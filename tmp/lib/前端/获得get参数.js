import getUrlParams from "get-url-params"

export default _ => {
    var get参数 = getUrlParams();
    get参数 = Object.keys(get参数).map(a => ({
        名称: decodeURIComponent(a),
        值: get参数[a]
    }))
    return get参数
}
