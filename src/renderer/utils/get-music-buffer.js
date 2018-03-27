import fs from 'fs'
import { toArrayBuffer } from './to-array-buffer'


export const getMusicBuffer = (filePath) => new Promise((resolve, reject) => {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      return reject(err)
    }
    resolve(toArrayBuffer(data))
  })
})