/*
 * Source loading
 */
function fetchFetch (url, authorization, integrity, asBuffer) {
  // fetch doesn't support file:/// urls
  if (url.substr(0, 8) === 'file:///') {
    if (hasXhr)
      return xhrFetch(url, authorization, integrity, asBuffer);
    else
      throw new Error('Unable to fetch file URLs in this environment.');
  }

  // percent encode just "#" for HTTP requests
  url = url.replace(/#/g, '%23');

  var opts = {
    // NB deprecate
    headers: { Accept: 'application/x-es-module, */*' }
  };

  if (integrity)
    opts.integrity = integrity;

  if (authorization) {
    if (typeof authorization == 'string')
      opts.headers['Authorization'] = authorization;
    opts.credentials = 'include';
  }

  return fetch(url, opts)
  .then(function(res) {
    if (res.ok)
      return asBuffer ? res.arrayBuffer() : res.text();
    else
      throw new Error('Fetch error: ' + res.status + ' ' + res.statusText);
  });
}
