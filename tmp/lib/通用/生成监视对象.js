import onChange from 'on-change'

export default f => {
    return onChange({}, f, { pathAsArray: true })
}
