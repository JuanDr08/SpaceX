//////// IMAGENES ROCKETS ////////////////////////////////////////////////////////////////////////////

export const imageRockets = async (flickr_images) => {
    let section__image = document.querySelector("#section__image");
    let divs = [];

    flickr_images.forEach(val => {
        let div = document.createElement("div");
        div.classList.add("carousel__item");

        let img = document.createElement("img");
        img.setAttribute("src", val);
        img.setAttribute("referrerpolicy", "no-referrer");
        div.appendChild(img);

        divs.push(div);
    });
    section__image.append(...divs);
    let textContainer = document.createElement("div");
    textContainer.classList.add("text-container");
    let text1 = document.createElement("div");
    text1.textContent = "CABIN MICS:";
    text1.style.color = "white";
    let text2 = document.createElement("div");
    text2.textContent = "RECORDING";
    text2.style.color = "red";
    textContainer.appendChild(text1);
    textContainer.appendChild(text2);

    section__image.appendChild(textContainer);
};


//////////////7 IMAGENES CAPSULAS /////////////////////////////////////////////////////////////

export const imageDragons = async (flickr_images) => {
    let section__image = document.querySelector("#section__image");
    let divs = [];

    flickr_images.forEach(val => {
        let div = document.createElement("div");
        div.classList.add("carousel__item");

        let img = document.createElement("img");
        img.setAttribute("src", val);
        img.setAttribute("referrerpolicy", "no-referrer");
        div.appendChild(img);

        divs.push(div);
    });
    section__image.append(...divs);
    let textContainer = document.createElement("div");
    textContainer.classList.add("text-container");
    let text1 = document.createElement("div");
    text1.textContent = "CABIN MICS:";
    text1.style.color = "white";
    let text2 = document.createElement("div");
    text2.textContent = "RECORDING";
    text2.style.color = "red";
    textContainer.appendChild(text1);
    textContainer.appendChild(text2);

    section__image.appendChild(textContainer);
};

//////////////7 IMAGENES CREWS /////////////////////////////////////////////////////////////

export const imageCrews = async (crewData) => {
    let section__image = document.querySelector("#section__image");
    section__image.innerHTML = ""; // Limpiar el contenedor de imágenes antes de agregar una nueva
    
    crewData.forEach(member => {
        let div = document.createElement("div");
        div.classList.add("carousel__item");
        
        let img = document.createElement("img");
        img.setAttribute("src", member.image);
        img.setAttribute("alt", member.name); // Asociar el nombre como atributo alt para accesibilidad
        img.setAttribute("referrerpolicy", "no-referrer");

        // Establecer el tamaño de la imagen
        img.setAttribute("style", "width: 200px; height: auto;"); // Ejemplo de tamaño (ajusta según lo necesites)
        
        // Centrar la imagen
        img.onload = function() {
            let imgWidth = this.width;
            let imgHeight = this.height;
            let containerWidth = section__image.offsetWidth;
            let containerHeight = section__image.offsetHeight;
            let marginLeft = (containerWidth - imgWidth) / 2;
            let marginTop = (containerHeight - imgHeight) / 2;
            
            this.style.marginLeft = marginLeft + "px";
            this.style.marginTop = marginTop + "px";
        };

        div.append(img);
        section__image.append(div);
    });
};



/////////////////////////////////////////   LANDPADS ///////////////////////777

export const imageLandpads = async (landpadData) => {

    landpadData.forEach(pad => {
        let div = document.createElement("div");
        div.classList.add("carousel__item");
        
        let img = document.createElement("img");
        img.setAttribute("src", pad.images.large[0]); // Acceder a la imagen "large"
        img.setAttribute("alt", pad.name); // Asociar el nombre como atributo alt para accesibilidad
        img.setAttribute("referrerpolicy", "no-referrer");

        // Establecer el tamaño de la imagen
        img.setAttribute("style", "width: 80vh; height: auto;"); // Ejemplo de tamaño (ajusta según lo necesites)
        
        // Centrar la imagen
        img.onload = function() {
            let imgWidth = this.width;
            let imgHeight = this.height;
            let containerWidth = section__image.offsetWidth;
            let containerHeight = section__image.offsetHeight;
            let marginLeft = (containerWidth - imgWidth) / 2;
            let marginTop = (containerHeight - imgHeight) / 2;
            
            this.style.marginLeft = marginLeft + "px";
            this.style.marginTop = marginTop + "px";
        };

        div.append(img);
        section__image.append(div);
    });
};

/////////////////////7 SHIPS ////////////////////////////////

export const imageShips = async (shipData) => {
    shipData.forEach(ship => {
        let div = document.createElement("div");
        div.classList.add("carousel__item");

        let img = document.createElement("img");
        img.setAttribute("src", ship.image); // Acceder a la imagen de la nave
        img.setAttribute("alt", ship.name); // Asociar el nombre como atributo alt para accesibilidad
        img.setAttribute("referrerpolicy", "no-referrer");

        // Establecer el tamaño de la imagen
        img.setAttribute("style", "width: 80vh; height: auto;"); // Ejemplo de tamaño (ajusta según lo necesites)

        // Centrar la imagen
        img.onload = function() {
            let imgWidth = this.width;
            let imgHeight = this.height;
            let containerWidth = section__image.offsetWidth;
            let containerHeight = section__image.offsetHeight;
            let marginLeft = (containerWidth - imgWidth) / 2;
            let marginTop = (containerHeight - imgHeight) / 2;

            this.style.marginLeft = marginLeft + "px";
            this.style.marginTop = marginTop + "px";
        };

        div.append(img);
        section__image.append(div);
    });
};
