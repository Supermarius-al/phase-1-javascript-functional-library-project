
/*if callBack = Object.values(collection)
if (Array.isArray(collection) === true)
{
collection.forEach(e => callBack)
} 
else
{

Object.values(collection).forEach(e => callBack)
        
}
return collection};
*/


function myEach(collection, callBack){
let collections = Object.values(collection)    
collections.forEach(element => callBack(element));
return collection;
}

function myMap(collection, callBack){
    let collections = Object.values(collection)    
  
    let mapCollection = collections.map(element => callBack(element))
    return mapCollection
    }
function myReduce(collection, callBack, acc = -2){
    let collections = Object.values(collection);
    console.log(collection);
    let total = collections.reduce(callBack, 0) + acc
    console.log(total);
return total
}

function myFind(collection, predicate){
    let collections = Object.values(collection);
    return collections.find(predicate)
}

function myFilter(collection, predicate){
    let collections = Object.values(collection);
    let filteredArray = [];
return filteredArray = collections.filter(predicate)

}

function mySize(collection){
    let collections = Object.values(collection);
    return collections.length
}
function myFirst(array, n = 1){
    
  
 
 return array.shift()

}
function myLast(array, n = 1){
    console.log(array.slice(0, n))
    return array.pop()
    
}

function myKeys(object){
    let objectKeys = Object.keys(object);
    return objectKeys

}

function myValues(object){
    let objectValues= Object.values(object);
    return objectValues
}