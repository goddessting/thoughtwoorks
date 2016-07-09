describe('calculate price', function(){
  describe('when mileage is not more than 2', function(){
    var input = 2;

    it('return right price', function () {
      expect(getPrice(inputs)).toEqual(6);

    });

  });

  describe('when mileage is more than', function(){
    var input = 3;

    it('return right price', function(){
      expect(getPrice(input)).toEqual(8.4);

    })

  });
});
