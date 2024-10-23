function initMap() {
    
}

function showNearbyPharmacies() {
    
    document.getElementById('map').style.display = 'block';
    
}

function calculateDistanceAndCharge() {
    
    const fixedDistance = 10; 
    const chargePerKm = 200; 
    const totalCharge = fixedDistance * chargePerKm;
    
    
    document.getElementById('totalCharge').value = `$${totalCharge.toFixed(2)}`;
    
    
}
