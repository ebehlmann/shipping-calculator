$(document).ready(function() {
	$('form#shipping-input').submit(function(event) {
		event.preventDefault();
		
		var distanceInput = parseInt($('input#distance').val());
		var weightInput = parseInt($('input#weight').val());
		var timeInput = $('select#time').val();
		
		var newPackage = {
			distance: distanceInput,
			weight: weightInput,
			travelTime: timeInput,
			cost: function() {
				var baseCost = (this.distance * .005) * this.weight;
				if (this.travelTime === 'In four to seven days.') {
					return baseCost;
				} else if (this.travelTime === 'In two to three days.') {
					return baseCost * 2;
				} else {
					return baseCost * 4;
				}
			}
		};
		
		alert('Your shipping cost is $' + newPackage.cost());
	});
});