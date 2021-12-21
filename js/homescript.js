var newone = [];
var mydiv = document.getElementById("rowitem");
var xhr = new XMLHttpRequest();
xhr.open("GET", "json/data.json");
xhr.addEventListener("readystatechange", function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
        newone = JSON.parse(xhr.responseText);
        console.log(newone);
        for (let key in newone) {
            if (newone[key].id < 13) {


                var boot =
                    `<div class='col-lg-3 col-md-6 col-6 fonts3'>
                        <div class='minimizecol'>
                        <div class='imgdiv'>
                            <img class='newimg' src="json/${newone[key].image}" >
                        </div>
                        <p>${newone[key].name} </p>
                        <p>EGP ${newone[key].price} </p>
                        <button><i class='fas fa-cart-plus'></i>Add to cart</button>
                        </div>
                    </div>`

                mydiv.innerHTML += boot;

            }
        }
    }
})
xhr.send();
