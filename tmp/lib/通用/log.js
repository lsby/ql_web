import 是调试模式 from './是调试模式'

export default (...s) => {
    if (是调试模式())
        console.log(...s);
    return s[s.length - 1];
}
