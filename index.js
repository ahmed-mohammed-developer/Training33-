

function hashtag_it(my_array) {
  // write your code here
  let sh = "#";
   my_array.forEach(function(x){
    sh = my_array[1][1]
   })
  return sh;
};
console.log(hashtag_it(my_array = ['stay_home','coronavirus','Saudi_Arabia']
));
/*
function hashtag_it(my_array) {
  // write your code here
   return my_array.map(function(x){
    console.log(x);
    const xx = `#${x}`;
    return ...my_array;
  })
};
console.log(hashtag_it(my_array = ['stay_home','coronavirus','Saudi_Arabia']
));
*/
function addHashToElements1(array) {
  return array.map(element => "#" + element).join(" ");
};
console.log(addHashToElements1(my_array = ['stay_home','coronavirus','Saudi_Arabia']
));
function addHashToElements(array){
  return array.map(function(x){
    return "#" + x;
  }).join(" ");
  
}
console.log(addHashToElements(my_array = ['stay_home','coronavirus','Saudi_Arabia']
));
function cubicRoot(num) {
  // write your code here
  return Math.cbrt(num);
}
console.log(cubicRoot(27));


function convert_to_seconds(hours) {
  // write your code here
  return hours * 60 * 60;
}
console.log(convert_to_seconds(6));


function match_arrays(array1, array2) {
  // write your code here
  return array1 !== array2;
}
console.log(match_arrays(['hello','there','word2'] , ['hello','there','word2']));


function get_mean(arr) {
  // write your code here
  return arr.reduce(function(t, x){
  return t + x / arr.length;
  }, 0)
}

console.log(get_mean([6,7,8,9]));

