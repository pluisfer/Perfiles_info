import {datosPersonajes} from "./datos.js"


const $perfil = document.querySelectorAll(".tarjeta");
const $conteiner = document.querySelector(".content")

$perfil.forEach(el=>{
    el.addEventListener("click",e=>{
        switch (e.target.dataset.identificador) {
            case "0":
                agregarTargeta(0)
                $conteiner.style.backgroundColor = "rgba(107, 35, 145,0.9)"
                break;
            case "1":
                agregarTargeta(1)
                $conteiner.style.backgroundColor = "rgb(0, 128, 255)"
                break;
            case "2":
                agregarTargeta(2)
                $conteiner.style.backgroundColor = "rgb(172, 83, 83)"
                break;
            case "3":
                agregarTargeta(3)
                $conteiner.style.backgroundColor = "rgb(185, 139, 70)"
                break;
            case "4":
                agregarTargeta(4)
                $conteiner.style.backgroundColor = "rgb(128, 102, 153)"
                break;
                case "5":
                    agregarTargeta(5)
                    $conteiner.style.backgroundColor = "rgb(122, 102, 82)"
            default:
                break;
        }
    })
})



function agregarTargeta(n){
    let { imagen, nombre, presentacion, texto} = datosPersonajes[n];

    $conteiner.innerHTML = `
    <div class="profile-box">
        <img src="${imagen}" alt="imagen">
        <div class="profile-info">
            <h2>${nombre}</h2>
            <span>Verified Graduate</span>
        </div>  
    </div>
    <p>${presentacion}</p>
    <p>${texto}</p>
    `
};



