/*
 * (c) Rowan C under MIT license
 */
class Fetcher{constructor(){console.log('Fetch\nDeclare: `var fetcher = new Fetcher();`\nRequest: fetcher.get(URL (string), headers (JSON), type (string))\nURL: string, the URL you want to fetch\nheaders: JSON, the HTTP headers you want to send\nType: string, Type of request (eg. GET)');}get(url, headers, type){if(typeof url!='string'){throw new Error('URL must be a string');}if(typeof headers!=typeof {}){throw new Error('Headers must be JSON');}if(typeof type!='string'){throw new Error('type must be string');}var params=JSON.parse(`{headers:${headers}, method:${type}}`);window.fetch(url,params).then(data=>{if(data!=null){return data;}else{throw new Error('Data didn\'t exist')}}).catch(err=>{throw new Error(err);});}}
