var data = {
	"adyen-facts": {
		"Valuation": "73.5B", 
		"Net Income": "EUR 261M",
		"Employees": "2300",
		"Customers": "3500"
	},
	"stripe-facts": {
		"Valuation": "Approx $100B",
		"Revenue": "$1B+",
		"Employees": "Approx 5,000"
	},
	"square-facts": {
		"Valuation": "Approx 3.5B",
		"Net Income": "$213M",
		"Employees": "5,477"
	},
	"klarna-facts": {
		"Valuation": "$46B",
		"Revenue": "$1.087B",
		"Employeees": "4,000",
		"Profitability": "($202M) Jan-Jul"
	},
	"oaknorth-facts": {
		"Valuation": "$2B",
		"Revenue": "$80.5M",
		"Employees": "278",
		"Profitability": "$106.6M"
	}

}

// Populate the quick facts
var n_companies = Object.keys(data).length;
for (var i = 0; i < n_companies; i++) {
	var key = Object.keys(data)[i];
	var datum = data[key];
	var element = document.getElementById(key);
	if (element == null) {continue};
	element.innerHTML = element.innerHTML + "<tbody>";
	var fields = Object.keys(datum);
	for (var j = 0; j < fields.length; j++) {
		var field = fields[j];
		var value = datum[field];
		element.innerHTML = element.innerHTML +
			"<tr><td>" + field +"</td><td>" + value + "</td></tr>";
	}
	element.innerHTML = element.innerHTML + "</tbody>";
}
