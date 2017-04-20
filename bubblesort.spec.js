describe('Bubble Sort', function(){
  var swapCounter = 0;
  beforeEach(function() {
    spyOn(window, 'swap').and.callThrough();
  });
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
    expect(window.swap.calls.count()).toEqual(0);
  });

  it('handles an single item array', function(){
    expect( bubbleSort([1]) ).toEqual( [1] );
    expect(window.swap.calls.count()).toEqual(0);
  });

  it('handles an array with multiple items', function(){
    expect( bubbleSort([4, 2, 9, 7, 3]) ).toEqual( [2, 3, 4, 7, 9] );
    expect(window.swap.calls.count()).toEqual(5);
  });

  it('handles an array with multiple items that are more than single digits', function(){
    expect( bubbleSort([4, 200, 9, 0, 30, 1, 2]) ).toEqual( [0, 1, 2, 4, 9, 30, 200] );
    expect(window.swap.calls.count()).toEqual(13);
  });

});
