// const product = {
//     id: 1,
//     title: "Unwavering Devotion Diamond Band Ring",
//     price: 120943,
//     description: "A stunning diamond ring perfect for your special moments.",
//     mainImage: "https://via.placeholder.com/500",
//     images: [
//       "https://via.placeholder.com/100?text=1",
//       "https://via.placeholder.com/100?text=2",
//       "https://via.placeholder.com/100?text=3"
//     ],
//     colors: ["Pink", "Gold", "Silver"],
//     purities: ["14kt", "18kt"],
//     sizes: [6, 7, 8, 9, 10]
//   };
  
//   // Render product data dynamically
//   document.getElementById('product-title').innerText = product.title;
//   document.getElementById('product-price').innerText = `₹${product.price}`;
//   document.getElementById('product-description').innerText = product.description;
//   document.getElementById('main-image').src = product.mainImage;
  
//   // Render additional images
//   const imageContainer = document.getElementById('additional-images');
//   product.images.forEach((img) => {
//     const imgElement = document.createElement('img');
//     imgElement.src = img;
//     imgElement.alt = 'Product Image';
//     imgElement.style.margin = '5px';
//     imageContainer.appendChild(imgElement);
//   });
  
//   // Render colors
//   const colorContainer = document.getElementById('colors');
//   product.colors.forEach((color) => {
//     const colorDiv = document.createElement('div');
//     colorDiv.innerText = color;
//     colorDiv.className = 'color-option'; // Add CSS for styling
//     colorContainer.appendChild(colorDiv);
//   });
  
//   // Render purities
//   const purityContainer = document.getElementById('purities');
//   product.purities.forEach((purity) => {
//     const purityOption = document.createElement('option');
//     purityOption.value = purity;
//     purityOption.innerText = purity;
//     purityContainer.appendChild(purityOption);
//   });
  
//   // Render sizes
//   const sizeContainer = document.getElementById('sizes');
//   product.sizes.forEach((size) => {
//     const sizeOption = document.createElement('option');
//     sizeOption.value = size;
//     sizeOption.innerText = size;
//     sizeContainer.appendChild(sizeOption);
//   });
  