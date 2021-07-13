function addProduct() {

    "use strict";
    let className = document.getElementsByClassName("add__card");

    function myFunction(ttl, prc, img, del) {
        
        
        let title = ttl;
        let price = prc;
        let image = img;
        let delPrice = del;
        
        let createLi = document.createElement('li');
        createLi.classList.add('bag__item');
    
        createLi.innerHTML = '<div class="bag__img">' +
                                '<a href="#">' +
                                    '<img src="' + image[0].src + '" alt="">' +
                                '</a>' +
                            '</div>' +
                            '<div class="bag__info">' +
                                '<p class="info__title">' +
                                    '<a href="#">' + title[0].innerText + '</a>' +
                                '</p>' +
                                '<div class="info__price">' +
                                    '<span class="currency">$</span>' +
                                    '<span class="oprice">' + price[0].innerText + '</span>' +
                                    '<del>' + delPrice[0].innerText + '</del>' +
                                '</div>' +
                                '<div class="trash">' +
                                    '<a href="#"><i class="far fa-trash-alt"></i></a>' +
                                '</div>' +
                            '</div>';
    
        let blockCard = document.querySelector('.bag ul');
        blockCard.appendChild(createLi);
    
        alert("Товары успешно добавлены в корзину!");
    
        delProduct();
        sumCount();
        updCount();

        fetch('http://localhost:3000/requests', {
            
            method: "POST",
            headers: {
                "Content-type": "Application/json"
            },
            body: JSON.stringify({
                "ttl": title[0].innerText,
                "image": image[0].src,
                "price": price[0].innerText
            })

        });
    
    }
    
    // for (var i = 0; i < className.length; i++) {
        
    //     className[i].addEventListener('click', myFunction, false);
    
    // }

    document.querySelector('.main__list').addEventListener('click', event => {

        if(event.target.parentNode.classList.contains('list__item')) return false;

        let ttl = event.target.parentNode.parentNode.parentNode.parentNode.querySelectorAll(".item__title a");
        let price = event.target.parentNode.parentNode.parentNode.parentNode.querySelectorAll(".price .oprice");
        let img = event.target.parentNode.parentNode.parentNode.parentNode.querySelectorAll(".item__img img");
        let del = event.target.parentNode.parentNode.parentNode.parentNode.querySelectorAll(".price del");
        
        myFunction(ttl, price, img, del);

    });

}

function delProduct() {
    
    "use strict";
    let clickTrash = document.querySelectorAll(".trash");
    
    let funDelete = function(event) {
        
        event.preventDefault();

        this.parentNode.parentNode.remove();

        sumCount();
        updCount();
        
    };

    for (var i = 0; i < clickTrash.length; i++) {

        clickTrash[i].addEventListener('click', funDelete, false);

    }
}

function sumCount() {
    
    "use strict";
    let countProduct = document.querySelectorAll('.info__price .oprice');
    let count = 0;

    for (var i = 0; i < countProduct.length; i++) {
        count += (+countProduct[i].textContent);
    }

    document.getElementsByClassName('total__card')[0].innerHTML = `$${count}`;
    document.querySelectorAll('.shopcard__total span')[0].innerHTML = `$${count}`;

}

function updCount() {
    
    "use strict";
    let cardCount = document.getElementsByClassName('bag__item').length;
    
    document.getElementsByClassName('card__count')[0].innerHTML = cardCount;
}

addProduct();