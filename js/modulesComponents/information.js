/////////////////////////// INFORMATION ROCKETS ///////////////////////////////////

export const informationRockets = async(country, description)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/mech.svg")
    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = country
    let small = document.createElement('small');
    small.textContent = description
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    let description__item = document.querySelector("#description__item")
    description__item.append(div)

    // <div class="description__container">
    //     <div>
    //         <img src="http://www.example.com">
    //     </div>
    //     <div>
    //         <h3>Title</h3>
    //         <small>Lorem ipsum dolor sit amet...</small>
    //     </div>
    // </div>
}
export const informationLaunchCostRocket = async(cost_per_launch)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/mech.svg")
    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "The estimated cost per rocket launch"
    let small = document.createElement('small');
    let money = new Intl.NumberFormat('cop').format(cost_per_launch)
    small.textContent = `$ ${money}`
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    let description__item = document.querySelector("#description__item")
    description__item.append(div)

    // <div class="description__container">
    //     <div>
    //         <img src="http://www.example.com">
    //     </div>
    //     <div>
    //         <h3>Title</h3>
    //         <small>Lorem ipsum dolor sit amet...</small>
    //     </div>
    // </div>
}
export const informationFirstFlightRocket = async(first_flight)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/mech.svg")
    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "The date of the first flight of the rocket"
    let small = document.createElement('small');
    small.textContent = first_flight
    divLast.append(h3, small);
    div.append(divFirst, divLast);

    let description__item = document.querySelector("#description__item")
    description__item.append(div)

    // <div class="description__container">
    //     <div>
    //         <img src="http://www.example.com">
    //     </div>
    //     <div>
    //         <h3>Title</h3>
    //         <small>Lorem ipsum dolor sit amet...</small>
    //     </div>
    // </div>
}
export const informationWebRocket = async(wikipedia)=>{
    let div = document.createElement('div');
    div.classList.add('description__container')
    let divFirst = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "storage/img/icons/mech.svg")
    divFirst.append(img);
    
    let divLast = document.createElement('div');
    let h3 = document.createElement('h3');
    h3.textContent = "Read more about the coete"
    let a = document.createElement('a');
    a.setAttribute("href", wikipedia)
    a.setAttribute("target", "_blank")
    a.textContent = "Wikipedia"
    divLast.append(h3, a);
    div.append(divFirst, divLast);
    let description__item = document.querySelector("#description__item")
    description__item.append(div)

    // <div class="description__container">
    //     <div>
    //         <img src="http://www.example.com">
    //     </div>
    //     <div>
    //         <h3>Title</h3>
    //         <a href="#" target="_blank">Lorem</a>
    //     </div>
    // </div>
}


/////////////////////////// INFORMATION CAPSULES ////////////////////////////////////////////

export const informationCapsuleType = async ({type}) => {
  let div = document.createElement('div');
  div.classList.add('description__container');
  let divFirst = document.createElement('div');
  let img = document.createElement('img');
  img.setAttribute("src", "storage/img/icons/mech.svg");
  divFirst.append(img);
  let divLast = document.createElement('div');
  let h3 = document.createElement('h3');
  h3.textContent = "Type";
  h3.style.color = "red";
  let typeText = document.createElement('p');
  typeText.textContent = type;
  typeText.style.color = "white";
  divLast.append(h3, typeText);
  div.append(divFirst, divLast);
  let description__item = document.querySelector("#description__item");
  description__item.append(div);
}

export const informationCapsuleStatus = async ({status}) => {
  let div = document.createElement('div');
  div.classList.add('description__container');
  let divFirst = document.createElement('div');
  let img = document.createElement('img');
  img.setAttribute("src", "storage/img/icons/mech.svg");
  divFirst.append(img);
  let divLast = document.createElement('div');
  let h3 = document.createElement('h3');
  h3.textContent = "Status";
  h3.style.color = "red";
  let statusText = document.createElement('p');
  statusText.textContent = status;
  statusText.style.color = "white";
  divLast.append(h3, statusText);
  div.append(divFirst, divLast);
  let description__item = document.querySelector("#description__item");
  description__item.append(div);
};


export const informationCapsuleLastUpdate = async ({last_update}) => {
  let div = document.createElement('div');
  div.classList.add('description__container');
  let divFirst = document.createElement('div');
  div.style.display = "flex"; // Cambia el diseño a flexbox
  div.style.flexDirection = "column";
  let divLast = document.createElement('div');
  let h3 = document.createElement('h3');
  h3.textContent = "Last Update";
  h3.style.color = "red";
  let lastUpdateText = document.createElement('p');
  lastUpdateText.textContent = last_update;
  lastUpdateText.style.color = "white";
  divLast.append(h3, lastUpdateText);
  div.append(divFirst, divLast);
  let description__item = document.querySelector("#description__item");
  description__item.append(div);
};

////////////////////////////N CORES ///////////////////////////////////////////7

export const informationCoresStatus = async ({status}) => {
  let div = document.createElement('div');
  div.classList.add('description__container');
  let divFirst = document.createElement('div');
  let img = document.createElement('img');
  img.setAttribute("src", "storage/img/icons/mech.svg");
  divFirst.append(img);
  let divLast = document.createElement('div');
  let h3 = document.createElement('h3');
  h3.textContent = "Status";
  h3.style.color = "red";
  let statusText = document.createElement('p');
  statusText.textContent = status;
  statusText.style.color = "white";
  divLast.append(h3, statusText);
  div.append(divFirst, divLast);
  let description__item = document.querySelector("#description__item");
  description__item.append(div);
};


export const informationCoreLastUpdate = async ({last_update}) => {
  let div = document.createElement('div');
  div.classList.add('description__container');
  let divFirst = document.createElement('div');
  let img = document.createElement('img');
  div.style.display = "flex"; // Cambia el diseño a flexbox
  div.style.flexDirection = "column";
  let divLast = document.createElement('div');
  let h3 = document.createElement('h3');
  h3.textContent = "Last Update";
  h3.style.color = "red";
  let lastUpdateText = document.createElement('p');
  lastUpdateText.textContent = last_update;
  lastUpdateText.style.color = "white";
  divLast.append(h3, lastUpdateText);
  div.append(divFirst, divLast);
  let description__item = document.querySelector("#description__item");
  description__item.append(div);
};


//////////////////////// DRAGONS ///////////////////////////////////////////////////////////

export const informationDragons = async({country, description})=>{
  let div = document.createElement('div');
  div.classList.add('description__container')
  let divFirst = document.createElement('div');
  let img = document.createElement('img');
  img.setAttribute("src", "storage/img/icons/mech.svg")
  divFirst.append(img);
  
  let divLast = document.createElement('div');
  let h3 = document.createElement('h3');
  h3.style.color = "red";
  h3.textContent = "Country and Description";
  let small = document.createElement('small');
  small.textContent = description
  divLast.append(h3, small);
  div.append(divFirst, divLast);

  let description__item = document.querySelector("#description__item")
  description__item.append(div)
}

export const informationLaunchCostDragons = async(cost_per_launch)=>{
  let div = document.createElement('div');
  div.classList.add('description__container')
  let divFirst = document.createElement('div');
  let img = document.createElement('img');
  img.setAttribute("src", "storage/img/icons/mech.svg")
  divFirst.append(img);
  
  let divLast = document.createElement('div');
  let h3 = document.createElement('h3');
  h3.style.color = "red";
  h3.textContent = "The estimated cost per rocket launch";
  let small = document.createElement('small');
  let money = new Intl.NumberFormat('cop').format(cost_per_launch)
  small.textContent = `$ ${money}`
  divLast.append(h3, small);
  div.append(divFirst, divLast);

  let description__item = document.querySelector("#description__item")
  description__item.append(div)
}

export const informationFirstFlightDragons = async({first_flight})=>{
  let div = document.createElement('div');
  div.classList.add('description__container')
  let divFirst = document.createElement('div');
  let img = document.createElement('img');
  img.setAttribute("src", "storage/img/icons/mech.svg")
  divFirst.append(img);
  
  let divLast = document.createElement('div');
  let h3 = document.createElement('h3');
  h3.style.color = "red";
  h3.textContent = "First Flight Information";
  let small = document.createElement('small');
  small.textContent = first_flight
  divLast.append(h3, small);
  div.append(divFirst, divLast);

  let description__item = document.querySelector("#description__item")
  description__item.append(div)
}

