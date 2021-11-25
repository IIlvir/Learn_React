//Не работает как нужно

export const deepClone = (obj) => {
    const newObj = {};
    for(let key in obj){
        if(typeof obj[key] == 'object'){
            if(Array.isArray(obj[key])){
                let newArr = [];
                newArr.map((elem) => {return {...elem}})
                newObj[key] = newArr;
            }else{
                newObj[key] = deepClone(obj[key]);
            }
        } else {
            newObj[key] = obj[key];
        };
    };
    return newObj;
};