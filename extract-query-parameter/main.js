function createObjectFromQueryParameter(url) {
  let queryParamters = url.split("?")[1];
  let queries = queryParamters.split("&");

  let obj = {};
  for(const query of queries) {
    const [key, val] = query.split("=");
    obj[key] = val;
  }

  return JSON.stringify(obj);
}

let testUrl = "www.elvislee.com?abc=def&hello=world&name=Joe&age=45";
console.log(createObjectFromQueryParameter(testUrl))