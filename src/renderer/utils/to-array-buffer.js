export const toArrayBuffer = (buffer) => {
  const ab = new ArrayBuffer(buffer.length)
  const view = new Uint8Array(ab)

  for (var i = 0; i < buffer.length; ++i) {
    view[i] = buffer[i]
  }
  return ab
}
