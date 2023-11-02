let url = require('url');
let qry = require('querystring')

var adr = 'https://www.amazon.in/profile?mobile=iPhone15ProMax&price=150000';

var q = url.parse(adr, true);

console.log('Host: ' +  q.host);
console.log('Path Name: ' + q.pathname);
console.log('Search: ' + q.search);

var qa = qry.parse('mobile=iPhone15ProMax&price=150000')

console.log('Key 1: ' + qa.mobile);
console.log('Key 2: ' + qa.price);