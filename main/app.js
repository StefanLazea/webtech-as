function distance(first, second){
    if(Array.isArray(first) && Array.isArray(second)){
        let firstArr = Array.from(new Set(first.filter(x => !second.includes(x))));
        let secondArr = Array.from(new Set(second.filter(x => !first.includes(x))));
        let concatArr = firstArr.concat(secondArr);
        return concatArr.length;
        
    }else{
        throw new Error("InvalidType");
    }
}


module.exports.distance = distance