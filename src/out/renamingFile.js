import { rename } from "node:fs/promises"
import { readdir } from "node:fs"

console.log(process.cwd())

const MATCH_PATTERN = /branding-gallery-img\s*\(\d*\)\.*(png|jpeg|jpg)/g
const RENAME_TO = ({ index }) => `artwork-gallery-img (${index}).png`

readdir("../assets/images", (error, files) => {
    files.forEach((file, index) => {
        if (file.match(MATCH_PATTERN))
            rename(`../assets/images/${file}`, `../assets/images/${RENAME_TO({ index })}`).then(result => console.log(result)).catch(err => console.log(err))
    })
})


