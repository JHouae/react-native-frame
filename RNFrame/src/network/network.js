
export function get(url, param) {
  // 格式化 URL
  let tempUrl = url;
  const paramStr = stringifyParams(param);
  tempUrl = paramStr ? `${tempUrl}?${paramsStr}` : tempUrl;

  return new Promise((resolve, reject) => {
    fetch(tempUrl, {
      method: 'GET',
      headers: httpHeader(),
    }).then(response => {
      return response.json();
    }).then(result => {
      resolve(result);
    }).catch(error => {
      reject(error);
    })
  })
}

export function post(url, param) {
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: 'POST',
      headers: httpHeader(),
      body: JSON.stringify(param)
    }).then((response) => {
      return response.json();
    }).then((result) => {
      resolve(result);
    }).catch(error => {
      reject(error);
    })
  })
}

function httpHeader() {
  return {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }
}

/**
 * 序列化get参数
 *
 * @param {Object}params 参数列表
 */
function stringifyParams(params) {
  // 值为null和undefined时，则过滤掉
  const encodeFn = encodeURIComponent;
  const paramsStr = params && Object.entries(dataCompile(params)).map(([name, value]) => {
    return `${name}=${encodeFn(value)}`;
  }).join('&');
  return paramsStr;
}