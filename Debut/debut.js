
var tab=[1,2,30,40,5];

let moyenne0= tab.reduce((acc,item,index,arr)=> acc + item/arr.length,0);

console.log(moyenne0);

var tab=[1,10,30,40,5];
let upp = tab.reduce((acc,item,index,arr) => (arr[arr.length-index-1]>10)?({val:arr[arr.length-index-1],indx:(arr.length-index-1)}):acc ,undefined);

console.log(upp);

var tab=[1,10,30,40,5];
let extrafind = function(arr,cb){
    return arr.reduce((acc,value,index) => acc || ( cb(value) ? {value,index} : undefined) , undefined);
}

extrafind(tab, x=>x>10);


#map

var tab=[1,10,30,40,5];
let _map = function(arr,cb){

   return  arr.reduce((acc,val)=> [...acc,cb(val)] ,[])

}

_map(tab, x=>x/2);