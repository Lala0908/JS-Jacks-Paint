function configureListeners() {
    // Whenever you need all the elements of a certain type
    let images = document.getElementsByTagName("img");
  
    // For every image... (stating at 0, until the last image)
    for (var i = 0; i < images.length; i++) {
      // Add opacity every time someone moves their mouse over the image
      images[i].addEventListener("mouseover", addOpacity);
      images[i].addEventListener("mouseout", removeOpacity);
    }
  }
  
  function addOpacity(event) {
    this.classList.add("dim");
    getProductInfo(event.target.id);
  }
  
  function removeOpacity(event) {
    this.classList.remove("dim");
  
    let element = document.getElementById("color-price");
    element.textContent = "";
  
    let color = document.getElementById("color-name");
    color.textContent = "";
  
    event.preventDefault();
  }
  
  function getProductInfo(paintId) {
    let price;
    let colorName;
  
    // When you receive a value that could be one of x possibilities
    switch (paintId) {
      case "pn1":
        price = "$19.99";
        colorName = "Lime Green";
        break;
      case "pn2":
        price = "$12.99";
        colorName = "Medium Brown";
        break;
      case "pn3":
        price = "$11.99";
        colorName = "Royal Blue";
        break;
      case "pn4":
        price = "$14.99";
        colorName = "Bright Red";
        break;
      case "pn5":
        price = "$9.99";
        colorName = "Solid White";
        break;
      case "pn6":
        price = "$15.99";
        colorName = "Solid Black";
        break;
      case "pn7":
        price = "$8.99";
        colorName = "Medium Blue";
        break;
      case "pn8":
        price = "$16.99";
        colorName = "Light Purple";
        break;
      case "pn9":
        price = "$17.99";
        colorName = "Bright Yellow";
        break;
      default:
        price = "Unknown Price";
        colorName = "Unknown Color";
    }
  
    updatePrice(colorName, price);
  
    function updatePrice(colorName, price) {
      let colorPrice = document.getElementById("color-price");
      colorPrice.textContent = price;
  
      let color = document.getElementById("color-name");
      color.textContent = colorName;
    }
  }