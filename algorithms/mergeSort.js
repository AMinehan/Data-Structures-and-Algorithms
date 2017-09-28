/*
  Merge Sort:



*/

function mergeSort(arr){

}


mergeSort.test = function(){
  let testArr = [];
  for (let i = 200; i > 0; i--){
    testArr.push(i)
  }
  return expect(equals(()=>mergeSort(testArr), testArr.reverse()), 'mergeSort should sort mergingly');
}