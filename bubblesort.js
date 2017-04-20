function bubbleSort(arrList) {
  for(var i = 0; i < arrList.length; i++ ) {
    for(var j = 0; j < arrList.length - i; j++) {
      if(arrList[j] > arrList[j + 1]) {
        swap(j, arrList);
      }
    }
  }
  return arrList;
}

function swap(index, arrList) {
  var curEle = arrList[index];
  arrList[index] = arrList[index + 1];
  arrList[index + 1] = curEle;
}
