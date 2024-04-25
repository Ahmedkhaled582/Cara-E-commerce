
let mainImg = document.querySelector("#mainImg")
let sImg = document.querySelectorAll("#productDetails .col-3 img")
sImg.forEach(img => img.addEventListener("click" , function(e){
    mainImg.src = e.target.src
}))




async function getProducts(){
    await fetch('https://fakestoreapi.com/products')
    .then(res =>res.json())
    .then((data) => {
        cartoona = ``
        for (let  i= 0;  i< data.length; i++) {
            if(data[i].category == "men's clothing"){
            cartoona += `<div class="col-md-3">
            <div class="box-card" onclick="product(event)">
                        <img class="w-100"  src="${data[i].image}" alt="">
                        <div class="desc">
                            <span>adidas</span>
                            <h5>${data[i].title.length <= 30 ? data[i].title : data[i].title.slice(0 ,30)+"..." }</h5>
                            <div class="star">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                            </div>
                            <div class="price d-flex justify-content-between align-items-center">
                            <h4>$${data[i].price}</h4>
                            <a class="cart" href="#"><i class="fa fa-shopping-cart"></i></a>
                            </div>
                        
                        </div>
                    </div>
                    </div>`
                    
        }
        }
        document.querySelectorAll('#box').forEach(ele => ele.innerHTML=cartoona)
    }
)
}
getProducts()

function product(e){
    window.location.href='singleProduct.html'
}



// console.log(item)
// document.querySelectorAll("#box").forEach(ele => ele.innerHTML = `<div class="col-md-3">
//      <div class="box-card" onclick="product(event)">
//                  <img class="w-100"  src="${item.image}" alt="">
//                  <div class="desc">
//                      <span>adidas</span>
//                      <h5>${item.title.length <= 30 ? item.title : item.title.slice(0 ,30)+"..." }</h5>
//                      <div class="star">
//                          <i class="fa fa-star"></i>
//                          <i class="fa fa-star"></i>
//                          <i class="fa fa-star"></i>
//                          <i class="fa fa-star"></i>
//                          <i class="fa fa-star"></i>
//                         </div>
//                      <div class="price d-flex justify-content-between align-items-center">                             
//                      <h4>$${item.price}</h4>
//                      <a class="cart" href="#"><i class="fa fa-shopping-cart"></i></a>
//                      </div>
                
//                  </div>
//              </div>
//              </div>`
// )


//     document.querySelectorAll("#box").forEach(ele => ele.innerHTML = cartoona)


