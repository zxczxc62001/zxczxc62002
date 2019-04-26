//import 'es6-promise'
//import 'whatwg-fetch'
//import {fetch} from  'whatwg-fetch'

var result = fetch('http://219.233.167.110:8010/sample/product_test/1/1/2019-4-22',{
    credentials:'include',
    headers:{
        'Accept':'application/json,text/plain,*/*'
    }
});

result.then(res =>{
    return res.json()
}).then(json=>{
    console.log(json)
})
