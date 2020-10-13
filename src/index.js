
// You should implement your task here.

module.exports = function towelSort (a) {
  let u=[];
  if(a){
  for(i = 0; i < a.length; i++){
    if(i%2==0){
     u=u.concat(a[i]);}
    else{
     u=u.concat(a[i].reverse());  
    }
  }
  return u;
}else{
  return u;
}
}

