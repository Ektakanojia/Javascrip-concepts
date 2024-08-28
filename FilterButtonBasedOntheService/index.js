const restaurants= [
    { "name": "Pizza Palace", "serviceType": "Delivery" },
    { "name": "Burger Haven", "serviceType": "Pickup" },
    { "name": "Sushi Central", "serviceType": "Delivery" },
    { "name": "Pasta Point", "serviceType": "Pickup" },
    { "name": "Taco Town", "serviceType": "Delivery" },
    { "name": "Steak House", "serviceType": "Pickup" }
  ];
  
  function filterRestaurant(serviceType) {
    console.log(serviceType);
  
    // Filter the restaurants based on the serviceType
    const filterRestaurants = restaurants.filter(restaurant => restaurant.serviceType === serviceType);
    console.log(filterRestaurants);
  
    const resultDiv = document.getElementById("result");
  
    if (filterRestaurants.length > 0) {
      // Use the filtered list to generate the HTML
      resultDiv.innerHTML = '<ul>' + filterRestaurants.map(restaurant => `<li>${restaurant.name}</li>`).join('') + '</ul>';
    } else {
      resultDiv.innerHTML = '<p>No restaurants found for ' + serviceType + ' service.</p>';
      alert("No result found");
    }
  }
  