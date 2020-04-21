const url = require('url')

const myUrl = new URL('http://meweb.com:800/hello.html?id=100&status=active')

console.log(myUrl.href);
console.log(myUrl.href.toString());

//Host
console.log(myUrl.host);
// hostname
console.log(myUrl.hostname);
//pathname
console.log(myUrl.pathname);
//все после ?
console.log(myUrl.search);
console.log(myUrl.searchParams);
// add param
console.log(myUrl.searchParams.append("abc", "123"));
//Loop throught params
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`))