function getMileagePrice(mileage) {
    if (mileage <= 2) {
        return 6;
    }
    else if (mileage >= 2 && mileage <= 8) {
        return Math.round(6 + 0.8 * mileage);
    }
    else {
        return (6 + mileage);
    }
}

function getWaitTimePrice(waitTime){

    return Math.round(waitTime * 0.25);
}

function getTotalPrice(mileage, waitTime){
    var mileagePrice = getMileagePrice(mileage);
    var waitTimePrice = getWaitTimePrice(waitTime);
    return mileagePrice + waitTimePrice;
}