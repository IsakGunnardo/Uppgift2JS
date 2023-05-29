
const apiKey = "51522e32064eb9eb80d0b088dc452e86"//API Key
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";//URL för fetchen


  const searchBox = document.querySelector(".search input")//Hämtar input i div med klass .search
  const searchBtn = document.querySelector(".search button")//Hämtar button i div med klass .search
  const weatherIcon = document.querySelector(".weather-icon")//Hämtar väder icon diven
  
  let myVar = setInterval(myTime);// visar tid och datum 
  function myTime() {
    const d = new Date();
    document.querySelector(".time").innerHTML = d.toLocaleTimeString();//visar tiden HH:MM:SS
    document.querySelector(".date").innerHTML = d.toDateString().slice(4,15)//visar endast månad dag och år 
  }

   

   async function chechWeather(city){//hämtar URL //async låter funktionen skicka tillbaks en promise
    //genom att dela på URL och låta användaren skriva in "city" så kan man hämta data för en plats användaren söker på
    const response =  await fetch(apiUrl + document.querySelector(".search input").value +  "&appid=" + apiKey);      
    //await låter funktionen vänta på en promise
    if(response.status == 404){
      document.querySelector(".error").style.display = "block";//skriver ut fel meddelande om man skriver in en fel input
      document.querySelector(".weather").style.display = "none";//Visar inte väder data
  
    }
    else{
    
    }
  setTimeout(chechWeather, 1800000)

  let data = await response.json();
      //skriver ut all detalj data i koden //
      document.querySelector(".city").innerHTML = data.name;//hämtar namn på plats
      document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";//Hämtar temeratur
      document.querySelector(".humidity").innerHTML = data.main.humidity + "%";//hämtar luftfuktighet
      document.querySelector(".wind").innerHTML = data.wind.speed + " m/s";//Hämtar vind styrka
      document.querySelector(".description").innerHTML = data.weather[0].description;//hämtar väder förhållande
      document.querySelector(".pressure").innerHTML = data.main.pressure + " hPa";//hämtar lufttryck
      document.querySelector(".countryCode").innerHTML = data.sys.country;//hämtar landkod
  
      if(data )
    
  
      
    //if-sats som byter bild beroende på vad det är för väderförhållande
      if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "/weathericon/clouds.png"
    
      }
      else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "/weathericon/clear.png"
    
      }
      else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "/weathericon/drizzle.png"
    
      }
      else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "/weathericon/Mist.png"
    
      }
      else if(data.weather[0].main == "Snow"){
        weatherIcon.src = "/weathericon/snow.png"
    
      }
      else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "/weathericon/rain.png"
    
      }
    
      document.querySelector(".weather").style.display = "block";//visar väder data
      document.querySelector(".error").style.display = "none";//visar inte felmeddelande
    
      console.log(data)//skriver ut data i konsolen
    
    }
  
  searchBtn.addEventListener("click", ()=>{//event som tillåter användaren att skriva in ett sök värde i input fältet
    chechWeather(searchBox.value);
  
  })



   




  



