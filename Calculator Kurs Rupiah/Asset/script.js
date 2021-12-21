// if value of option change 
function countMoney() {
    // console.log('changed');

    // get input user 
    var user_input = document.getElementById('money_val').value;

    // get all value from option
    var currency_select = document.getElementById('currency_select').value;
    var currency_default = document.getElementById('currency_default').value;

    var currency_1 = document.getElementById('currency_1').value; 
    var currency_2 = document.getElementById('currency_2').value; 
    var currency_3 = document.getElementById('currency_3').value; 
    var currency_4 = document.getElementById('currency_4').value; 
    var currency_5 = document.getElementById('currency_5').value; 
    var currency_6 = document.getElementById('currency_6').value; 

    // set result default is 0 
    var result = 0;

    if(currency_select == currency_default){
        result = result;

    }else if (currency_select == currency_1) {
        result = user_input*14650;
        document.getElementById('result').innerHTML = result;

    } else if(currency_select == currency_2) {
        result = user_input*10536,17;
        document.getElementById('result').innerHTML = result;

    } else if (currency_select == currency_3) {
        // console.log('currency : '+currency_3);
        result = user_input*3416,96;
        document.getElementById('result').innerHTML = result;

    } else if (currency_select == currency_4) {
        result = user_input*126,84;
        document.getElementById('result').innerHTML = result;
        
    } else if (currency_select == currency_5) {
        result = user_input*16267,01;
        document.getElementById('result').innerHTML = result;
        
    }else {
        result = user_input*3827,56;
        document.getElementById('result').innerHTML = result;
        
    }
}