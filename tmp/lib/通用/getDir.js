import path from "path"

export default req => req.keys()
    .map(name => ({ name: path.basename(name).replace(path.extname(name), ''), obj: req(name).default }))
