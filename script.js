const main = document.querySelector(".products")
let products=[];
const trimText =(value,number)=>{
    return value.substring(0,number)+"..."
}
const listItem = (image,title,category,price)=>{
    let product=document.createElement("div");
    let images =document.createElement("img");
    let titles = document.createElement("h2");
    let categorys = document.createElement("h4");
    let prices = document.createElement("h3")
    let button =document.createElement("div")
    product.classList.add("product")
    button.classList.add("sepeteEkle")
    images.src =image;
    titles.textContent =title;
    categorys.textContent=category;
    prices.textContent=price  +" TL";
    button.textContent="SEPETE EKLE"
    button.innerHTML+= `${"<i class='fas fa-cart-plus'></i>"}`
    product.appendChild(images)
    product.appendChild(titles)
    product.appendChild(categorys)
    product.appendChild(prices)
    product.appendChild(button)
    main.appendChild(product)

}
const getProducts = async ()=>{
    let data = await fetch('https://fakestoreapi.com/products')
    let result =await data.json()
    products=result;
    //console.log(products)
    products.map((item)=>{
        listItem(item.image,trimText(item.title,50),item.category,item.price)
    })
}
getProducts()







/*fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>console.log(json))*/

