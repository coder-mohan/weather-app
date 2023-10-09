console.log("Welcome to the Console");

const API_KEY = "d0ddb337a63b12dd3a9516fb4b766ed6"
async function fetchweatherdetails(){
    
    try {
        
        // let lat = 15.3333;
        // let lon = 74.0833;
        
        let city = "goa";
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        // const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid={API key}`);
        
        const data = await response.json();
        
        console.log("weather->data",data);
        
        // let newPara = document.createElement('p');
        // newPara.textContent = `${data?.main?.temp.toFixed(2)}°C`;
        // document.body.appendChild(newPara);
        
        renderWeatherInformation(data);
    }
    catch(err){
        //handle the error here
    }
}

function renderWeatherInformation(data){
    let newPara = document.createElement('p');
    newPara.textContent = `${data?.main?.temp.toFixed(2)}°C`;
    document.body.appendChild(newPara);
}
async function getCustomWeatherDetails(){

    try{
    let lat = 15.3333;
    let lon= 74.0833;

    let result = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
    let data = await result.json();

    console.log(data);

    }
    catch(err){
        console.log("Error found" , err);
    }
}

function switchTab(clickedTab){

    apiErrorContainer.classList.remove("active");

    if(clickedTab !== currentTab){
        currentTab.classList.remove("current-tab");
        currentTab = clickedTab;
        currentTab.classList.add("current-tab");

        if(!searchForm.classList.contains("active")){
            UserInfoContainer.classList.remove("active");
            grantAccessContainer.classList.remove("active");
            searchForm.classList.add("active");
        }
        else{
            searchForm.classList.remove("active");
            UserInfoContainer.classList.remove("active");
            getFromSessionStorage();
        }
    }
}

function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else{
        console.log("No geoLocation Support");
    }
}

function showPosition(position){
    let lat = position.coords.latitude;
    let long = position.coords.longitude;

    console.log(lat);
    console.log(long);
}