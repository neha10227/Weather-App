let form = document.querySelector("form");
let input = document.querySelector("input");
let h2 = document.querySelector("h2");
let h4 = document.querySelector("h4");
let h1 = document.querySelector("h1");
let p = document.querySelector("p");
let img = document.querySelector("img");
let Section = document.querySelector(".section");
let humidity = document.getElementById("humidity");
let temp_f = document.getElementById("temp_f");
let windy = document.getElementById("windy");
let rain = document.getElementById("rain");
let ul = document.querySelector("ul");


ul.addEventListener("click", clickfunc)


function clickfunc(e){
    let li = e.target;
    let cityName = li.innerText
    input.value = cityName
}


form.addEventListener("submit", search)
async function search(e) {
    e.preventDefault()

    let res = await fetch(`https://api.weatherapi.com/v1/current.json?key=22af615fe10e4b5593990007221606&q=${input.value}&aqi=yes`)
    let data = await res.json()

    if (data.success === false) {
        window.alert("Enter Correct City")
    } else {
        let temp_c = data.current.temp_c;
        let cityName = data.location.name;
        let text = data.current.condition.text;
        let localtime  = data.location.localtime;
        let icons = data.current.condition.icon;
        let humidty = data.current.humidity;
        let temp_f1 = data.current.temp_f;
        let windy1 = data.current.wind_degree;

        h1.innerText = `${temp_c}°C`;
        h2.innerText = cityName;
        h4.innerText = localtime;
        p.innerText = text;
        img.setAttribute("src", icons)
        humidity.innerText = humidty; 
        temp_f.innerText = temp_f1; 
        windy.innerText = windy1; 


        if(temp_c > 30){
            Section.style.backgroundImage = "url('https://c4.wallpaperflare.com/wallpaper/227/541/117/sunny-spring-time-wallpaper-preview.jpg')"
        } else if (temp_c > 20) {
            Section.style.backgroundImage = "url('https://img.freepik.com/free-photo/scenic-sunny-green-landscape-scenery-morning-nature-sunlight-trees-silhouettes-sunrise-sunbeams-lens-flare-foliage-with-copy-space-bright-sun-shines-through-trees-leaves-sunset_102332-3684.jpg?w=2000')"
        } else {
            Section.style.backgroundImage = "url('https://images.unsplash.com/photo-1500740516770-92bd004b996e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y2xvdWR5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60')"
        }

        form.reset()
    }
}