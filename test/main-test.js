describe('calculate price', function () {
    var waitTime;

    beforeEach(function () {
        waitTime = 4;
    });

    describe('calculate price by mileage', function () {

        it('when mileage is not more than 2, it should return start price 2rmb', function () {
            var mileage = 2;
            var price = getMileagePrice(mileage);
            expect(price).toEqual(6);
        });

        it('when mileage is more than 2 and not more than 8, it return price 9rmb', function () {
            var mileage = 3;
            var price = getMileagePrice(mileage);
            expect(price).toEqual(8);
        });

        it('when mileage is more than 8, it return price 16rmb', function () {
            var mileage = 9;
            var price = getMileagePrice(mileage);
            expect(price).toEqual(15);
        });
    });

    describe('calculate price by waiting time', function () {
        it('when waiting time is 2 minutes, it should return price 1rmb', function(){
            var waitTime = 2;
            var price  = getWaitTimePrice(waitTime);
            expect(price).toEqual(1);
        });

        it('when waiting time is 5 minutes, it should return price 1rmb', function(){
            var waitTime = 5;
            var price  = getWaitTimePrice(waitTime);
            expect(price).toEqual(1);
        });

        it('when waiting time is 10 minutes, it should return price 3rmb', function(){
            var waitTime = 10;
            var price  = getWaitTimePrice(waitTime);
            expect(price).toEqual(3);
        });
    });

    describe('calculate total price', function(){
        it('when mileage is 2 and waiting time is 3, it should return price 7', function(){
            var mileage = 2;
            var waitTime = 3;
            var totalPrice = getTotalPrice(mileage, waitTime);
            expect(totalPrice).toEqual(7);
        });

        it('when mileage is 3 and waiting time is 6, it should return price 10', function(){
            var mileage = 3;
            var waitTime = 6;
            var totalPrice = getTotalPrice(mileage, waitTime);
            expect(totalPrice).toEqual(10);
        });

        it('when mileage is 9 and waiting time is 11, it should return price 18', function(){
            var mileage = 9;
            var waitTime = 11;
            var totalPrice = getTotalPrice(mileage, waitTime);
            expect(totalPrice).toEqual(18);
        });
    });
});
