const search = document.getElementById("search");
const searchButton = document.getElementById("search-btn");
const foodItem = document.getElementById("food-item");
const singleFood = document.getElementById("single-food");
const result = document.getElementById("result");

searchButton.addEventListener("click", function(){
    const searchValue = search.value ;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`)
    .then(res => res.json())
    .then(data => {
        result.innerText = `search result for ${searchValue}`
        foodItem.innerHTML = data.meals.map((meal)=>
        `
        <div class="meal">
        <img onclick="getInfo()" src ="${meal.strMealThumb}">
        <h5 id="meal-name"> ${meal.strMeal} </h5>
        </div>
        `
        ).join("");
    });
})

const getInfo = () =>{
    const mealName = document.getElementById("meal-name").innerText ;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`)
    .then(res => res.json())
    .then(data => {
    singleFood.innerHTML=data.meals.map((meal)=>
    `
    <div id="final">
    
    <h1> ${meal.strMeal} </h1>
    <p> ingredients </p>
    <h4>${meal.strMeasure1}</h4>
    <h4>${meal.strMeasure2}</h4>
    <h4>${meal.strMeasure3}</h4>
    <h4>${meal.strMeasure4}</h4>
    <h4>${meal.strMeasure5}</h4>
    <h4>${meal.strMeasure6}</h4>
    <h4>${meal.strMeasure7}</h4>
    <h4>${meal.strMeasure8}</h4>
    <h4>${meal.strMeasure9}</h4>
    <h4>${meal.strMeasure10}</h4>
    </div>
   
    `).join("")
    })

    foodItem.style.display = "none";


}

