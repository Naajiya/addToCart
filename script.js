const loginHome = () => {
    if (InputEmail1.value && InputPassword1.value) {
        window.location.href = "newHome.html"
    } else {
        alert('enter your email and password')
    }
};

const logout=()=>{
    window.location.href = "index.html"
}

orderprod=(butn)=>{
    cards=butn.closest('.card')
    producttitle=cards.querySelector('.card-title').innerText;
    offcanvasBottomLabel.innerHTML=producttitle;
}

const addtoCart = (butn) => {

    // red-lit.style.display='block';
    redbadge = document.getElementById('red-lit');
    redbadge.style.display = 'block'

    cards=butn.closest('.card')
    // console.log(cards);
    producttitle=cards.querySelector('.card-title').innerText;
    // console.log(producttitle);
    
    price=cards.querySelector('.card-text').innerText;

    aditem.innerHTML+=`<li class="fw-bold">${producttitle}-${price}</li>`
    // console.log(price);        
    
    // alert(producttitle);
    
    // localStorage.setItem('cartItem',producttitle)
    // localStorage.setItem('prdctPrice',price)

    
    
}

const gotocart = () => {
    // window.location.href = "cart.html"
}

const orderSccss=()=>{
    if(nameOrder.value&&(inlineRadio1.value||inlineRadio2.value)&&Textarea1.value){
        // ordeSucsfully.innerHTML='ordered succsfully'
        alert('oredred succsessfully')
    }else{
        alert('something missing')
    }
}

