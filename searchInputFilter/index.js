const productList = [
"Wireless Headphones",
  "Smartphone",
  "Laptop",
  "Bluetooth Speaker",
  "Smartwatch",
  "Camera",
  "Gaming Console",
  "Tablet",
  "Monitor",
  "Keyboard",
  "Mouse",
  "External Hard Drive",
  "Printer",
  "Action Camera",
  "Drone",
  "Earbuds",
  "Portable Charger",
  "Smart Home Assistant",
  "Fitness Tracker",
  "Home Theater System",
  "Digital Thermometer"
];
function searchInput() {
  const searchQuery = document.getElementById("searchInput").value.toLowerCase();
  const resultDiv = document.getElementById("result");

  resultDiv.innerHTML ='';

  const filterProduct = productList.filter(product=>
   product.toLowerCase().includes(searchQuery)
  );

  if(filterProduct.length>0 ){
   // Display matching products
   console.log("filter product")
   resultDiv.innerHTML = '<ul>' + filterProduct.map(product => `<li>${product}</li>`).join('') + '</ul>';
   }
   else{
    alert("No element found")
  }

}