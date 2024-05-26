let shop=document.getElementById("shop");
console.log(shop);
let shop1=document.getElementById("shop1");
console.log(shop1);
// let basket=[];
let basket=JSON.parse(localStorage.getItem("data"))||[];
let generateShop=()=>{
 return (shop.innerHTML=shopItemsData.map((x)=>{
    let{id,name,price,desc,img}=x;
    let search=basket.find((x)=>x.id===id)||[];
    
    return `
    
    <div class="item" id=product-id-${id}>
        <img src=${img} alt="img1" width="220">
        <div class="details">
        <h3><!--${x.name}-->
            ${name}           </h3>
        <p>${desc}</p>
        <div class="price-quantity">
            <h2>$<!--${x.price}-->
                 ${price}</h2>
            <div class="buttons">  
                <!--<i onclick="decrement(${id})" class="fa-solid fa-minus"></i>-->
                <div  id=${id} class="quantity"><button onclick="increment(${id})" >add cart</button></div>
                
               <!-- <i onclick="increment(${id})" class="fa-solid fa-plus" class="quantity"></i>-->
            </div>
        </div>
        </div>
    </div>`
 }) 
 .join(""));
 return (shop1.innerHTML=shopItemsData1.map((x)=>{
    let{id,name,price,desc,img}=x;
    let search=basket.find((x)=>x.id===id)||[];
    
    return `
    
    <div class="item" id=product-id-${id}>
        <img src=${img} alt="img1" width="220">
        <div class="details">
        <h3><!--${x.name}-->
            ${name}           </h3>
        <p>${desc}</p>
        <div class="price-quantity">
            <h2>$<!--${x.price}-->
                 ${price}</h2>
            <div class="buttons">  
                <!--<i onclick="decrement(${id})" class="fa-solid fa-minus"></i>-->
                <div  id=${id} class="quantity"><button onclick="increment(${id})" >add cart</button></div>
                
               <!-- <i onclick="increment(${id})" class="fa-solid fa-plus" class="quantity"></i>-->
            </div>
        </div>
        </div>
    </div>`
 }) 
 .join(""));
};
generateShop();
let increment=(id)=>{
    // console.log("increment");
    // console.log(id);
    let selectedItem=id;
    // console.log(selectedItem.id);
    let search=basket.find((x)=>x.id===selectedItem.id);
    if(search===undefined)
    {
        basket.push({
            id:selectedItem.id,
            item:1,
    });}
    else
    {
        search.item+=1;
    }
    // basket.push({
    //     id:selectedItem.id,
    //     item:1,
   // });
    // console.log(basket);
        //localStorage.setItem("anyname to data-this is the key of data ");
     //   localStorage.setItem("data",basket); //not read the data if we read add json.stringify 
    
    update(selectedItem.id);
    localStorage.setItem("data",JSON.stringify(basket));
};
let decrement=(id)=>{
    // console.log("decrement");
    // console.log(id);
      let selectedItem=id;
    // console.log(selectedItem.id);
    let search=basket.find((x)=>x.id===selectedItem.id);
    if(search===undefined) return;//stop the process 
    else if(search.item===0)//search===undefined
   { 
    return;
    // {
    //     basket.push({
    //         id:selectedItem.id,
    //         item:1,
    // })}
   }else
    {
        search.item-=1;
    }

    // console.log(basket);
    update(selectedItem.id);
    basket=basket.filter((x)=>x.item!==0);
 
    localStorage.setItem("data",JSON.stringify(basket));
};
let update=(id)=>{
    // console.log("the update function is running");
    // console.log(id);
    let search=basket.find((x)=>x.id===id);
    // console.log(search);
    console.log(search.item);
    //document.getElementById(id).innerHTML=search.item;
    calculation();
};
let calculation=()=>{
 {
    let cartIcon=document.getElementById("cartAmount");
    // console.log("calculation function is running");
    // console.log(basket);
    // console.log(basket.map(()=>x.item));
    //console.log(basket.map((x)=>x.item).reduce((x,y)=>x+y,0));
    cartIcon.innerHTML=basket.map((x)=>x.item).reduce((x,y)=>x+y,0);
 };
}
calculation();
