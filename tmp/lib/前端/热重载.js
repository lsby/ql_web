if (module.hot) {
    module.hot.addStatusHandler(status => {
        if (status != 'check') return
        location.reload()
        module.hot.accept()
    })
}
