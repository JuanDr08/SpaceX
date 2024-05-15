import { 
    load,
    paginationCapsules,
    paginationRockets,
    paginationCores,
    paginationDragons,
    paginationCrews,
    paginationLand,
    paginationShips
} from "./modulesComponents/pagination.js";

let footerSelect = async(e, id)=>{
    e.preventDefault();
    await load();
    let li = document.querySelectorAll(".footer ul li")
    for(let val of li){
        let [a] = val.children
        a.classList.remove('select');
    }
    let [a] = id.children
    a.classList.add('select');   
}


let rocket = document.querySelector("#overview-link")
rocket.addEventListener("click", async(e)=>{
    await footerSelect(e, rocket)
    let paginacion = document.querySelector("#paginacion");
    paginacion.innerHTML = ""
    paginacion.append(await paginationRockets())
} )

let capsules = document.querySelector("#Capsules-link")
capsules.addEventListener("click", async(e)=>{
    await footerSelect(e, capsules)
    let paginacion = document.querySelector("#paginacion");
    paginacion.innerHTML = ""
    paginacion.append(await paginationCapsules())
})

let cores = document.querySelector("#Cores-link")
cores.addEventListener("click", async(e)=>{
    await footerSelect(e, cores)
    let paginacion = document.querySelector("#paginacion");
    paginacion.innerHTML = ""
    paginacion.append(await paginationCores())
})

let Dragons = document.querySelector("#Dragons-link")
Dragons.addEventListener("click", async(e)=>{
    await footerSelect(e, Dragons)
    let paginacion = document.querySelector("#paginacion");
    paginacion.innerHTML = ""
    paginacion.append(await paginationDragons())
})

let Crew = document.querySelector("#Crews-Link")
Crew.addEventListener("click", async(e)=>{
    await footerSelect(e, Crew)
    let paginacion = document.querySelector("#paginacion");
    paginacion.innerHTML = ""
    paginacion.append(await paginationCrews())
})

let Land = document.querySelector("#Landpads-link")
Land.addEventListener("click", async(e)=>{
    await footerSelect(e, Land)
    let paginacion = document.querySelector("#paginacion");
    paginacion.innerHTML = ""
    paginacion.append(await paginationLand())
})

let Ships = document.querySelector("#Ships-link")
Ships.addEventListener("click", async(e)=>{
    await footerSelect(e, Ships)
    let paginacion = document.querySelector("#paginacion");
    paginacion.innerHTML = ""
    paginacion.append(await paginationShips())
})


rocket.click();

