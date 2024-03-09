
fetch("data.json")
.then(response => response.json())
.then(myVehicles => loadCarzAndTruckz(myVehicles))


function getInputValue(){
    let vehicleMake = document.forms["my_form"]["Make"].value;
    let vehicleModel = document.forms["my_form"]["Model"].value;
    let vehicleYear = document.forms["my_form"]["Year"].value;
    let vehicleColor = document.forms["my_form"]["Color"].value;
    let vehiclePrice = document.forms["my_form"]["Price"].value;
    console.log(vehicleMake);


    fetch("data.json")
    .then(response => response.json())
    .then(myVehicles => loadVehicles(myVehicles, vehicleMake, vehicleModel, vehicleYear, vehicleColor, vehiclePrice))
}

function loadVehicles(myVehicles, vehicleMake, vehicleModel, vehicleYear, vehicleColor, vehiclePrice){
    removeChildren();
    var vehicleCatalog = document.getElementById("col");
    //Get vehicles from json file
    let vehicles = myVehicles.vehicles;
    console.log(vehicles);

    makeEmpty = vehicleMake === "";
    modelEmpty = vehicleModel === "";
    yearEmpty = vehicleYear === "";
    colorEmpty = vehicleColor === "";
    priceEmpty = vehiclePrice === "";

    for (var i = 0; i<vehicles.length; i++){
        //Get all json info
        let make = vehicles[i].make;
        let model = vehicles[i].model;
        let year = vehicles[i].year;
        let color = vehicles[i].color;
        let price = vehicles[i].price;
        let path = vehicles[i].path;
        let card = "vehicle" + i.toString;

        if ((make.toUpperCase() === vehicleMake.toUpperCase() || makeEmpty) 
            && (model.toUpperCase() === vehicleModel.toUpperCase() || modelEmpty) && 
            (year == vehicleYear || yearEmpty) && (color === vehicleColor || colorEmpty) && (price <= vehiclePrice || priceEmpty)){
            let AddVehicle = document.createElement("div");
            // add class = “col” to new division for Bootstrap
            AddVehicle.classList.add("col"); 
            // create Bootstrap card 
            AddVehicle.innerHTML = `
                <div id=${card} class="card shadow-sm">
                <img src=${path} class="card-img-top" alt="${color}"></img>
                <div class="card-body">
                <h2 class="car-title">${year} ${make} ${model} ${color}</h2>
                <p class="price">Price: $${price}</p>
                </div>
                </div>`;
            //append new division
            vehicleCatalog.appendChild(AddVehicle);
        }
    }
}

function removeChildren(){
    var mainContainer = document.getElementById("col");
    while (mainContainer.firstChild){
        mainContainer.removeChild(mainContainer.firstChild);
    }
}

function loadCarzAndTruckz(myVehicles){
    //Get "col" node of Browse.html
    var vehicleCatalog = document.getElementById("col");
    //Get vehicles from json file
    let vehicles = myVehicles.vehicles;
    console.log(vehicles);

    for (var i = 0; i<vehicles.length; i++){
        //Get all json info
        let make = vehicles[i].make;
        let model = vehicles[i].model;
        let year = vehicles[i].year;
        let color = vehicles[i].color;
        let price = vehicles[i].price;
        let path = vehicles[i].path;
        let card = "vehicle" + i.toString;

        let AddVehicle = document.createElement("div");
        // add class = “col” to new division for Bootstrap
        AddVehicle.classList.add("col"); 
        // create Bootstrap card 
        AddVehicle.innerHTML = `
            <div id=${card} class="card shadow-sm">
            <img src=${path} class="card-img-top" alt="${color}"></img>
            <div class="card-body">
            <h2 class="car-title">${year} ${make} ${model} ${color}</h2>
            <p class="price">Price: $${price}</p>
            </div>
            </div>`;
        //append new division
        vehicleCatalog.appendChild(AddVehicle);
    }
}
