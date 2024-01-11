document.getElementById('calculate').addEventListener('click', function() {
    var weight = document.getElementById('weight').value;
    var distance = document.getElementById('distance').value;
    var cost = calculateShippingCost(weight, distance);
    document.getElementById('cost').innerText = 'Shipping Cost: $' + cost;
});

function calculateShippingCost(weight, distance) {
    var costPerKg = 0.5; // cost per kg
    var costPerKm = 0.1; // cost per km
    return (weight * costPerKg) + (distance * costPerKm);
}