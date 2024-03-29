
var format_dict = {
    "BS_CONS_LOAN": [1000, "Consumer Loans ($B)"],
    "BS_COMM_LOAN": [1000, "Commercial Loans ($B)"],
    "BS_TOT_LOAN": [1000, "Total Loans ($B)"],
    "BS_CUSTOMER_DEPOSITS": [1000, "Customer Deposits ($B)"],
    "CUR_MKT_CAP": [1000, "Market Cap ($B)"],
    "EFF_RATIO": [1, "Efficiency Ratio"],
    "NET_INCOME": [1000, "Net Income ($B)"],
    "NET_REV": [1000, "Net Revenue ($B)"],
    "PX_TO_TANG_BV_PER_SH": [1, "P/TBV"],
    "BS_TIER_1_CAP_RATIO_FULLY_LOADED": [1, "Capital Ratio"],
    "BS_TOT_ASSET": [1000000, "Total Assets ($T)"]
};
var n_facts = Object.keys(data).length;
for (var i = 0; i < n_facts; i++) {
  var key = Object.keys(data)[i];
  var ticker = key.split("-")[0];
  var quickfacts = document.getElementById(ticker + "-facts");
  console.log(quickfacts);
  if (quickfacts == null) {continue}
  else {
    var field = key.split('-')[1];
    var value = data[key];
//    if (field == "BS_CONS_LOAN"){
        var denominator = format_dict[field][0];
        var english_field = format_dict[field][1];
        field = english_field;
        value = value / denominator;
        value = value.toFixed(2);
 //   }
    quickfacts.innerHTML = quickfacts.innerHTML +
			"<tr><td>" + field +"</td><td>" + value + "</td></tr>";
  }
}
