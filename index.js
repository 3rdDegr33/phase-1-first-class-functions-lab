const returnFirstTwoDrivers = function(arrayOfDrivers) {
    return arrayOfDrivers.slice(0, 2);
};

const returnLastTwoDrivers = function (arrayOfDrivers) {
    return arrayOfDrivers.slice(-2);
};

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplyFactor) {
    return function(fare) {
        return multiplyFactor * fare; 
    };
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(arrayOfDrivers, selectedDrivers) {
    if(selectedDrivers === returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(arrayOfDrivers);
    }
    else {
        return returnLastTwoDrivers(arrayOfDrivers);
    }
}