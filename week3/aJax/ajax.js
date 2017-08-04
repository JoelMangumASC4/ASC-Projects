
//ID
//62fa95ef

//KEY
//07ee97f3df35fc0faa23bba534f4e5d7

var id = "62fa95ef";
var key = "07ee97f3df35fc0faa23bba534f4e5d7";

var foodUrl = "https://api.nutritionix.com/v1_1/search/big%20mac?fields=item_name%2Citem_id%2Cbrand_name%2Cnf_calories%2Cnf_total_fat&appId=" + id + "&appKey=" + key;


$.ajax({
    url: foodUrl,
    success: function (data) {
        //console.log(data);
        var food = data.hits[0];
var name = food.fields.item_name
var cals =  food.fields.nf_calories
$("body").append("<header>This "+name+" has "+cals+" kcals</header>")
}



});