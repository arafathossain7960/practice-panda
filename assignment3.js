//---------Function No. 1,-------------//

function kilometerToMeter(kilo) {
    var kilometer = kilo * 1000;
    return kilometer;
}



//--------- Function No. 2,----------------//
function budgetCalculator(pr1, pr2, pr3) {
    var wacth = 50 * pr1;
    var phone = 100 * pr2;
    var laptop = 500 * pr3;
    var total = wacth + phone + laptop;
    return total;
}


//----------Function No. 3,---------------//



function hotelCost(day) {
    var cost = 0;
    if (day <= 10) {
        cost = day * 100;
    } else if (day <= 20) {
        var days_10 = 10 * 100;
        var remainig = day - 10;
        var days_20 = remainig * 80;
        cost = days_10 + days_20;
    } else {
        var days_10 = 10 * 100;
        var days_20 = 20 * 80;
        var remainig = day - 20;
        var days_uper = remainig * 50;
        cost = days_10 + days_20 + days_uper;
    }
    return cost;
}



//-----------Function No. 4----------------------//

function megaFriend(friendList) {
    var largest = "";

    for (var i = 0; i < friendList.length; i++) {
        var element = friendList[i];
        if (element.length > largest.length) {
            largest = element;
        }
    }
    return largest;
}

//---------------------End--------------------------//