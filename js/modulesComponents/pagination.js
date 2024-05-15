//////////////////////////// ROCKETS ///////////////////////////////////////////////////////////////
import { 
    getAllRockets, 
    getAllRocketsId
} from "../modules/rockets.js";
import { 
    nameRockets,
    nameCapsules,
    nameCores,
    nameDragons,
    nameCrews,
    nameLand,
    nameShips
} from "./title.js";
import { 
    informationRockets,
    informationLaunchCostRocket,
    informationFirstFlightRocket,
    informationWebRocket,
    informationCapsuleType,
    informationCapsuleStatus,
    informationCapsuleLastUpdate,
    informationCoresStatus,
    informationCoreLastUpdate,
    informationDragons,
    informationLaunchCostDragons,
    informationFirstFlightDragons,
    informationWebDragons,
    informationFirstFlightCrews,
    informationWebCrew,
    informationFirstFlightland,
    informationFirstFlightlandstatus,
    informationFirstFlightlandstatustype,
    informationFirstFlightlandstatustypelocalityre,
    informationFirstFlightlandstatustypelocality,
    informationFirstFlightlandstatustypelocalityredet,
    informationFirstFlightlandstatustypelocalityredetship,
    informationFirstFlightlandstatustypelocalityredetshipt,
    informationFirstFlightlandstatusypelocalityredetshipt,
    informationFirtFlightlandstatustypelocalityre
} from "./information.js";
import { 
    tableRocketColum1, 
    tableRocketColum2,
    tableCapsulesLaunches,
    tableCapsulesserial,
    tableCoresLaunches,
    tableCoreLaunchesid,
    tableDragonColumn1,
    tableCoresLaunchesland,
    tableCoresLauncheslandship,
    tableCoresLauncheslandsship
} from "./tables.js";
import { 
    informRocketEngineThrustSeaLevel, 
    informRocketEngineThrustVacuum,
    informRocketData,
    informDragonLaunchPayloadMass,
    informDragonData,
} from "./inform.js";
import { 
    imageRockets,
    imageDragons,
    imageCrews,
    imageLandpads,
    imageShips
} from "./card.js";
import { 
    progressRocketWeight,
    progressPayloadWeights, 
    progressHeightRocket, 
    progressDiameterRocket,
    progressSecondStageDiameterRocket,
    progressSecondStageHeightRocket,
    progressCapsuleStats,
    progressCoresStats,
    progressDragonWeight,
    progressHeightDragon,
    progressDiameterDragon,
    progressSecondStageDiameterDragon,
} from "../modulesComponents/progressBar.js";

import { 
    getAllCapsules,
    getAllCapsulesId
} from "../modules/capsules.js";

import{
    getAllCores,
    getAllCoresId
}   from "../modules/cores.js"

import{
    getAllDragons,
    getAllDragonsId
}   from "../modules/dragons.js"

import{
    getAllCrews,
    getAllCrewsId
}   from "../modules/crews.js"

import{
    getAllLandId,
    getAllLand
}   from "../modules/Landpads.js" 

import{
    getAllShipsId,
    getAllShips
}   from "../modules/ships.js"

const getRocketsId = async(e)=>{
    e.preventDefault();
    let a = e.target.parentElement.children;
    for(let val of a){
        val.classList.remove('activo');
    }
    e.target.classList.add('activo'); 
    let information__2 = document.querySelector("#information__2");
    information__2.innerHTML = "";
    let description__item = document.querySelector("#description__item")
    description__item.innerHTML = "";
    let section__image = document.querySelector("#section__image")
    section__image.innerHTML = "";
    let section__information__q = document.querySelector("#section__information__q");
    section__information__q.innerHTML = "";
    let section__information__w = document.querySelector("#section__information__w");
    section__information__w.innerHTML = "";
    
    let Rocket = await getAllRocketsId(e.target.id);



    await clear();
    await informationRockets(Rocket.country, Rocket.description)
    await nameRockets(Rocket.name)
    await informationLaunchCostRocket(Rocket.cost_per_launch)
    await informationFirstFlightRocket(Rocket.first_flight)
    await informationWebRocket(Rocket.wikipedia)
    await informRocketEngineThrustSeaLevel(Rocket.engines.thrust_sea_level);
    await informRocketEngineThrustVacuum(Rocket.engines.thrust_vacuum);
    await informRocketData();
    await imageRockets(Rocket.flickr_images);
    await tableRocketColum1(Rocket)
    await tableRocketColum2(Rocket)
    await progressRocketWeight(Rocket)
    await progressPayloadWeights(Rocket)
    await progressHeightRocket(Rocket)
    await progressDiameterRocket(Rocket)
    await progressSecondStageDiameterRocket(Rocket)
    await progressSecondStageHeightRocket(Rocket)
}
export const paginationRockets = async()=>{
    let rockets = await getAllRockets();
    let div = document.createElement("div");
    div.classList.add("buttom__paginacion")
  
    rockets.forEach((val,id) => {
        let a = document.createElement("a");
        a.setAttribute("href","#");
        a.id = val.id;
        a.textContent = id+1;
        a.addEventListener("click", getRocketsId)
        div.appendChild(a);
    });
    let [a1,a2,a3,a4] = div.children
    a3.click();
    // <div class="buttom__paginacion">
    //     <a href="#">&laquo;</a> 
    //     <a href="#" class="activo">1</a>
    //     <a href="#">2</a>
    //     <a href="#">3</a>
    //     <a href="#">4</a>
    //     <a href="#">&raquo;</a>
    // </div>
    return div;
}
/////////////////////////////////////////////FINAL DE ROCKETS /////////////////////////////////////////////////////////////////////////






////////////////////////////LOAD //////////////////////////////////////////////////////////////////
export const load = async()=>{
    let header__title = document.querySelector("#header__title");
    header__title.innerHTML = `
        <div class="load"></div>
    `;

    let description__item = document.querySelector("#description__item");
    description__item.innerHTML = `
        <div class="load"></div>
        <div class="load"></div>
        <div class="load"></div>
        <div class="load"></div>
        <div class="load"></div>
    `;

    let section__information__1 = document.querySelector("#section__information__1")
    section__information__1.innerHTML = `
        <div class="load" style="height: 150px;"></div>
    `;

    let information__table__1 = document.querySelector("#information__table__1")
    information__table__1.innerHTML = `
        <div class="load" style="height: 160px;"></div>
    `;

    let section__image = document.querySelector("#section__image")
    section__image.innerHTML = `
        <div class="load" style="height: 350px"></div>
    `;


    let information__table__2 = document.querySelector("#information__table__2")
    information__table__2.innerHTML = `
        <div class="load" style="height: 160px;"></div>
    `;

    let information__2 = document.querySelector("#information__2")
    information__2.innerHTML = `
        <div class="load"></div>
        <div class="load"></div>
        <div class="load"></div>
        <div class="load"></div>
        <div class="load"></div>
    `;
}
export const clear = async()=>{
    let header__title = document.querySelector("#header__title");
    header__title.innerHTML = ``;

    let description__item = document.querySelector("#description__item");
    description__item.innerHTML = ``;

    let section__information__1 = document.querySelector("#section__information__1")
    section__information__1.innerHTML = ``;

    let information__table__1 = document.querySelector("#information__table__1")
    information__table__1.innerHTML = ``;

    let section__image = document.querySelector("#section__image")
    section__image.innerHTML = ``;


    let information__table__2 = document.querySelector("#information__table__2")
    information__table__2.innerHTML = ``;

    let information__2 = document.querySelector("#information__2")
    information__2.innerHTML = ``;

}



////////////////////////////////////// PAGINATION CAPSULES ///////////////////////////////////////////////////////////
const getCapsulesId = async(e)=>{
    e.preventDefault();
    if(e.target.dataset.page){
        let paginacion = document.querySelector("#paginacion");
        paginacion.innerHTML = ""
        paginacion.append(await paginationCapsules(Number(e.target.dataset.page)))
    }
    let a = e.target.parentElement.children;
    for(let val of a){
        val.classList.remove('activo');
    }
    e.target.classList.add('activo');
    let information__2 = document.querySelector("#information__2");
    information__2.innerHTML = "";
    let description__item = document.querySelector("#description__item")
    description__item.innerHTML = "";
    let section__image = document.querySelector("#section__image")
    section__image.innerHTML = "";
    let section__information__q = document.querySelector("#section__information__q");
    section__information__q.innerHTML = "";
    let section__information__w = document.querySelector("#section__information__w");
    section__information__w.innerHTML = "";
    
    let Capsules = await getAllCapsulesId(e.target.id);
    console.log(Capsules);
    await nameCapsules(Capsules.serial);
    await progressCapsuleStats(Capsules);
    await informationCapsuleType(Capsules);
    await informationCapsuleStatus(Capsules);
    await informationCapsuleLastUpdate(Capsules);
    await tableCapsulesLaunches(Capsules)
    await tableCapsulesserial(Capsules)

    
}

export const paginationCapsules = async(page=1, limit=4)=>{  
     
    let {docs, pagingCounter, totalPages, nextPage} = await getAllCapsules(page, limit)

    let div = document.createElement("div");
    div.classList.add("buttom__paginacion")
    let start = document.createElement("a");
    start.setAttribute("href","#");
    start.innerHTML = "&laquo";
    start.setAttribute("data-page", (page==1) ? totalPages : page-1)
    start.addEventListener("click", getCapsulesId)
    div.appendChild(start);
    docs.forEach((val,id) => {
        let a = document.createElement("a");
        a.setAttribute("href","#");
        a.id = val.id;
        a.textContent = pagingCounter;
        a.addEventListener("click", getCapsulesId)
        div.appendChild(a);
        pagingCounter++
    });
    let end = document.createElement("a");
    end.setAttribute("href","#");
    end.innerHTML = "&raquo;";
    end.setAttribute("data-page", (page && nextPage) ? page+1 : 1)
    end.addEventListener("click", getCapsulesId)
    div.appendChild(end);
    console.log(div);
    let [back, a1,a2,a3,a4, next] = div.children
    a1.click();
    // <div class="buttom__paginacion">
    //     <a href="#">&laquo;</a> 
    //     <a href="#" class="activo">1</a>
    //     <a href="#">2</a>
    //     <a href="#">3</a>
    //     <a href="#">4</a>
    //     <a href="#">&raquo;</a>
    // </div>
    return div;
}


/////////////////////////////// PAGINATION CORES ////////////////////////////////////////////

const getCoresId = async(e)=>{
    e.preventDefault();
    if(e.target.dataset.page){
        let paginacion = document.querySelector("#paginacion");
        paginacion.innerHTML = ""
        paginacion.append(await paginationCores(Number(e.target.dataset.page)))
    }
    let a = e.target.parentElement.children;
    for(let val of a){
        val.classList.remove('activo');
    }
    e.target.classList.add('activo');
    let information__2 = document.querySelector("#information__2");
    information__2.innerHTML = "";
    let description__item = document.querySelector("#description__item")
    description__item.innerHTML = "";
    let section__image = document.querySelector("#section__image")
    section__image.innerHTML = "";
    let section__information__q = document.querySelector("#section__information__q");
    section__information__q.innerHTML = "";
    let section__information__w = document.querySelector("#section__information__w");
    section__information__w.innerHTML = "";
    
    

    let Cores = await getAllCoresId(e.target.id);
    console.log(Cores);
    await nameCores(Cores.serial)
    await progressCoresStats(Cores)
    await informationCoresStatus(Cores)
    await informationCoreLastUpdate(Cores)
    await tableCoresLaunches(Cores)
    await tableCoreLaunchesid(Cores)
}

export const paginationCores = async(page=1, limit=4)=>{  
     
    let {docs, pagingCounter, totalPages, nextPage} = await getAllCores(page, limit)

    let div = document.createElement("div");
    div.classList.add("buttom__paginacion")
    let start = document.createElement("a");
    start.setAttribute("href","#");
    start.innerHTML = "&laquo";
    start.setAttribute("data-page", (page==1) ? totalPages : page-1)
    start.addEventListener("click", getCoresId)
    div.appendChild(start);
    docs.forEach((val,id) => {
        let a = document.createElement("a");
        a.setAttribute("href","#");
        a.id = val.id;
        a.textContent = pagingCounter;
        a.addEventListener("click", getCoresId)
        div.appendChild(a);
        pagingCounter++
    });
    let end = document.createElement("a");
    end.setAttribute("href","#");
    end.innerHTML = "&raquo;";
    end.setAttribute("data-page", (page && nextPage) ? page+1 : 1)
    end.addEventListener("click", getCoresId)
    div.appendChild(end);
    console.log(div);
    let [back, a1,a2,a3,a4, next] = div.children
    a2.click();
    // <div class="buttom__paginacion">
    //     <a href="#">&laquo;</a> 
    //     <a href="#" class="activo">1</a>
    //     <a href="#">2</a>
    //     <a href="#">3</a>
    //     <a href="#">4</a>
    //     <a href="#">&raquo;</a>
    // </div>
    return div;
}



/////////////////////////////// PAGINATION DRAGONS ////////////////////////////////////////////

const getDragonsId = async(e)=>{
    e.preventDefault();
    let a = e.target.parentElement.children;
    for(let val of a){
        val.classList.remove('activo');
    }
    e.target.classList.add('activo'); 
    let information__2 = document.querySelector("#information__2");
    information__2.innerHTML = "";
    let description__item = document.querySelector("#description__item")
    description__item.innerHTML = "";
    let section__image = document.querySelector("#section__image")
    section__image.innerHTML = "";
    let section__information__q = document.querySelector("#section__information__q");
    section__information__q.innerHTML = "";
    let section__information__w = document.querySelector("#section__information__w");
    section__information__w.innerHTML = "";
    
    let Dragons = await getAllDragonsId(e.target.id);
    console.log(Dragons)
    await progressDragonWeight(Dragons);
    await progressHeightDragon(Dragons);
    await progressDiameterDragon(Dragons);
    await progressSecondStageDiameterDragon(Dragons)
    await imageDragons(Dragons.flickr_images)
    await nameDragons(Dragons.name)
    await informDragonLaunchPayloadMass(Dragons.launch_payload_mass)
    await informDragonData();
    await tableDragonColumn1(Dragons)
    await informationDragons(Dragons)
    await informationLaunchCostDragons(Dragons)
    await informationFirstFlightDragons(Dragons)
    await informationWebDragons(Dragons)
}
export const paginationDragons = async()=>{
    let Dragons = await getAllDragons();
    let div = document.createElement("div");
    div.classList.add("buttom__paginacion")
  
    Dragons.forEach((val,id) => {
        let a = document.createElement("a");
        a.setAttribute("href","#");
        a.id = val.id;
        a.textContent = id+1;
        a.addEventListener("click", getDragonsId)
        div.appendChild(a);
    });
    let [a1,a2] = div.children
    a2.click();
    // <div class="buttom__paginacion">
    //     <a href="#">&laquo;</a> 
    //     <a href="#" class="activo">1</a>
    //     <a href="#">2</a>
    //     <a href="#">3</a>
    //     <a href="#">4</a>
    //     <a href="#">&raquo;</a>
    // </div>
    return div;
}


////////////////////////////////////// PAGINATION CREWS ///////////////////////////////////////////////////////////
const getCrewsId = async(e)=>{
    e.preventDefault();
    if(e.target.dataset.page){
        let paginacion = document.querySelector("#paginacion");
        paginacion.innerHTML = ""
        paginacion.append(await paginationCrews(Number(e.target.dataset.page)))
    }
    let a = e.target.parentElement.children;
    for(let val of a){
        val.classList.remove('activo');
    }
    e.target.classList.add('activo');
    let information__2 = document.querySelector("#information__2");
    information__2.innerHTML = "";
    let description__item = document.querySelector("#description__item")
    description__item.innerHTML = "";
    let section__image = document.querySelector("#section__image")
    section__image.innerHTML = "";
    let section__information__q = document.querySelector("#section__information__q");
    section__information__q.innerHTML = "";
    let section__information__w = document.querySelector("#section__information__w");
    section__information__w.innerHTML = "";
    
    
    let Crew = await getAllCrewsId(e.target.id);
    console.log(Crew);
    await nameCrews(Crew.name)
    await imageCrews([Crew])
    await informationFirstFlightCrews(Crew)
    await informationWebCrew(Crew)
}

export const paginationCrews = async(page=1, limit=4)=>{  
     
    let {docs, pagingCounter, totalPages, nextPage} = await getAllCrews(page, limit)

    let div = document.createElement("div");
    div.classList.add("buttom__paginacion")
    let start = document.createElement("a");
    start.setAttribute("href","#");
    start.innerHTML = "&laquo";
    start.setAttribute("data-page", (page==1) ? totalPages : page-1)
    start.addEventListener("click", getCrewsId)
    div.appendChild(start);
    docs.forEach((val,id) => {
        let a = document.createElement("a");
        a.setAttribute("href","#");
        a.id = val.id;
        a.textContent = pagingCounter;
        a.addEventListener("click", getCrewsId)
        div.appendChild(a);
        pagingCounter++
    });
    let end = document.createElement("a");
    end.setAttribute("href","#");
    end.innerHTML = "&raquo;";
    end.setAttribute("data-page", (page && nextPage) ? page+1 : 1)
    end.addEventListener("click", getCrewsId)
    div.appendChild(end);
    console.log(div);
    let [back, a1,a2,a3,a4, next] = div.children
    a1.click();
    // <div class="buttom__paginacion">
    //     <a href="#">&laquo;</a> 
    //     <a href="#" class="activo">1</a>
    //     <a href="#">2</a>
    //     <a href="#">3</a>
    //     <a href="#">4</a>
    //     <a href="#">&raquo;</a>
    // </div>
    return div;
}


////////////////////////////////////// PAGINATION Landpads ///////////////////////////////////////////////////////////
const getLandId = async(e)=>{
    e.preventDefault();
    if(e.target.dataset.page){
        let paginacion = document.querySelector("#paginacion");
        paginacion.innerHTML = ""
        paginacion.append(await paginationLand(Number(e.target.dataset.page)))
    }
    let a = e.target.parentElement.children;
    for(let val of a){
        val.classList.remove('activo');
    }
    e.target.classList.add('activo');
    let information__2 = document.querySelector("#information__2");
    information__2.innerHTML = "";
    let description__item = document.querySelector("#description__item")
    description__item.innerHTML = "";
    let section__image = document.querySelector("#section__image")
    section__image.innerHTML = "";
    let section__information__q = document.querySelector("#section__information__q");
    section__information__q.innerHTML = "";
    let section__information__w = document.querySelector("#section__information__w");
    section__information__w.innerHTML = "";
    
    
    let Land = await getAllLandId(e.target.id);
    console.log(Land)

    await nameLand(Land.name);
    await imageLandpads([Land])
    await informationFirstFlightland(Land)
    await informationFirstFlightlandstatustype(Land)
    await informationFirstFlightlandstatus(Land)
    await informationFirstFlightlandstatustypelocalityre(Land)
    await informationFirstFlightlandstatustypelocality(Land)
    await informationFirstFlightlandstatustypelocalityredet(Land)
    await tableCoresLaunchesland(Land)
}

export const paginationLand = async(page=1, limit=4)=>{  
     
    let {docs, pagingCounter, totalPages, nextPage} = await getAllLand(page, limit)

    let div = document.createElement("div");
    div.classList.add("buttom__paginacion")
    let start = document.createElement("a");
    start.setAttribute("href","#");
    start.innerHTML = "&laquo";
    start.setAttribute("data-page", (page==1) ? totalPages : page-1)
    start.addEventListener("click", getLandId)
    div.appendChild(start);
    docs.forEach((val,id) => {
        let a = document.createElement("a");
        a.setAttribute("href","#");
        a.id = val.id;
        a.textContent = pagingCounter;
        a.addEventListener("click", getLandId)
        div.appendChild(a);
        pagingCounter++
    });
    let end = document.createElement("a");
    end.setAttribute("href","#");
    end.innerHTML = "&raquo;";
    end.setAttribute("data-page", (page && nextPage) ? page+1 : 1)
    end.addEventListener("click", getLandId)
    div.appendChild(end);
    console.log(div);
    let [back, a1,a2,a3,a4, next] = div.children
    a2.click();
    return div;
}

//////////////////////////////// SHIPS /////////////////////////77

const getShipsId = async(e)=>{
    e.preventDefault();
    let a = e.target.parentElement.children;
    for(let val of a){
        val.classList.remove('activo');
    }
    e.target.classList.add('activo'); 
    let information__2 = document.querySelector("#information__2");
    information__2.innerHTML = "";
    let description__item = document.querySelector("#description__item")
    description__item.innerHTML = "";
    let section__image = document.querySelector("#section__image")
    section__image.innerHTML = "";
    let section__information__q = document.querySelector("#section__information__q");
    section__information__q.innerHTML = "";
    let section__information__w = document.querySelector("#section__information__w");
    section__information__w.innerHTML = "";
    
    let Ships = await getAllShipsId(e.target.id);
    console.log(Ships)
    await nameShips(Ships);
    await imageShips([Ships])
    await informationFirstFlightlandstatustypelocalityredetship(Ships)
    await informationFirstFlightlandstatustypelocalityredetshipt(Ships)
    await informationFirstFlightlandstatusypelocalityredetshipt(Ships)
    await informationFirtFlightlandstatustypelocalityre(Ships)
    await tableCoresLauncheslandship(Ships)
    await tableCoresLauncheslandsship(Ships)
}
export const paginationShips = async()=>{
    let Ships = await getAllShips();
    let div = document.createElement("div");
    div.classList.add("buttom__paginacion")
  
    Ships.forEach((val,id) => {
        let a = document.createElement("a");
        a.setAttribute("href","#");
        a.id = val.id;
        a.textContent = id+1;
        a.addEventListener("click", getShipsId)
        div.appendChild(a);
    });
    let [a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18, a19, a20, a21, a22, a23, a24, a25, a26, a27, a28]  = div.children
    a1.click();
    return div;
}