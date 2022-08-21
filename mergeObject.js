function Check(obj1,obj2) {
    for(let [key,value]of Object.entries(obj2)){
      obj1[key]= value;
    }
    return obj1;
}