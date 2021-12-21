var newone = [];
var mydiv = document.getElementById("rowitem");
var xhr = new XMLHttpRequest();
xhr.open("GET", "../json/data.json");
xhr.send();
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
                <h5>${newone[key].name} </h5>
                <h5>EGP ${newone[key].price} </h5>
                <button>weka</button>
           </div>
        </div>`

                mydiv.innerHTML += boot;

            }
        }
    }
})