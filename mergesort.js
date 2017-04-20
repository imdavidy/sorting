function mergeSort(arrList) {
  var result;
  if (arrList.length <= 1) {
    return arrList;
  }
  var splitArr = split(arrList);

  return merge(mergeSort(splitArr[0]), mergeSort(splitArr[1]));
}

function split(wholeArr) {
  var midIndex = Math.floor(wholeArr.length / 2);
  var firstHalf = wholeArr.slice(0, midIndex);
  var secondHalf = wholeArr.slice(midIndex);
  return [firstHalf, secondHalf];
}

function merge(firstHalf, secondHalf) {

  var result = [];
  var lastElem;
  while(firstHalf.length && secondHalf.length) {
    if(firstHalf[0] <= secondHalf[0]) {
      result.push(firstHalf.shift());
    } else {
      result.push(secondHalf.shift());
    }
  }
  lastElem = firstHalf.length ? firstHalf : secondHalf;
  return result.concat(lastElem);
}
