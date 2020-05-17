var store = {
    namespaced: true,
    state: {
        日志: '你好世界'
    },
    mutations: {
        添加日志(state, str) {
            state.日志 = state.日志.split("\n");
            state.日志.unshift(str);
            state.日志 = state.日志
                .slice(0, 100)
                .join("\n")
                .trim();
        }
    },
}

export default store
