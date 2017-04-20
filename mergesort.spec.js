describe('Merge Sort', function(){
  var swapCounter = 0;
  beforeEach(function() {
    spyOn(window, 'swap').and.callThrough();
  });
  it('handles an empty array', function(){
    expect( mergeSort([]) ).toEqual( [] );
  });

  it('handles an single item array', function(){
    expect( mergeSort([1]) ).toEqual( [1] );
  });

  it('handles an array with multiple items', function(){
    expect( mergeSort([4, 2, 9, 7, 3]) ).toEqual( [2, 3, 4, 7, 9] );
  });

  it('handles an array with multiple items that are more than single digits', function(){
    expect( mergeSort([4, 200, 9, 0, 30, 1, 2]) ).toEqual( [0, 1, 2, 4, 9, 30, 200] );
    //expect(window.swap.calls.count()).toEqual(13);
  });

});

describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    // your code here
    expect( split([4, 200, 9, 0, 30, 1, 2]) ).toEqual( [[4, 200, 9], [0, 30, 1, 2]] );
  });
});

describe('Merge Sort', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    // test the merging algorithm
    expect( merge([2, 4, 9], [1, 3, 7]) ).toEqual( [1, 2, 3, 4, 7, 9] );
  });
});

describe('Merge Sort', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    // test the merging algorithm
    expect( merge([2, 4, 9], [1, 3, 7]) ).toEqual( [1, 2, 3, 4, 7, 9] );
  });
});
