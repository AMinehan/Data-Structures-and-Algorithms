/*
  Quick Sort:

*/

function quickSort(arr){

}

quickSort.test = function(){
  let testArr = []
  for (let i = 200; i > 0; i--){
    testArr.push(i)
  }
  return expect(equals(()=>quickSort(testArr), testArr.reverse()), 'quickSort should sort quickly');
}