
function  img(){
  
    let A = document.querySelector(".items-container");
    let innerhtml=" ";
    data.forEach(element => {
      console.log(element);
        innerhtml += `
        <div class="item-container">     
    <img class="item-img" src=${element.image} alt="">
    <div class="rating"> ${element.rating}</div>
    <div class="company-name">${element.company}</div>
    <div class="item-name">${element.item_name}</div>
    <div class="price">
      <span class="current-price">${element.price.current_price}</span>
      <span class="original-price">${element.price.original_price}</span>
      <span class="discount">${element.price.discount}</span>
    </div>
    <button class="btn-add-bag">Add to Bag</button>
</div>`

    });
    A.innerHTML = innerhtml;
     }
    img();
  


  
    