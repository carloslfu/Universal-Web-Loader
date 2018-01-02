
exports.mapAsync = async (arr, fn) => {
  let res = []
  for (let i = 0, len = arr.length; i < len; i++) {
    res[i] = await fn(arr[i], i, arr)
  }
  return res
}

exports.filterAsync = async (arr, fn) => {
  let res = []
  for (let i = 0, len = arr.length; i < len; i++) {
    if (await fn(arr[i], i, arr)) {
      res.push(arr[i])
    }
  }
  return res
}

exports.reduceAsync = async (arr, fn, v0) => {
  for (let i = 0, len = arr.length; i < len; i++) {
    v0 = await fn(v0, arr[i], i)
  }
  return v0
}

exports.all = async arr => await Promise.all(arr)
