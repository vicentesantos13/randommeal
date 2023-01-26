document.querySelector('.button').addEventListener('click', showMeals);
let selectLi = document.querySelector('#ingredients-list li' );

function showMeals() {
    
    let random = getRandom();
    document.querySelector('.part2').style.display = 'block';
    document.querySelector('.meal-tittle').innerHTML = `${meals[random].strMeal}`;
    document.querySelector('.meal-preparation').innerHTML = `${meals[random].strInstructions}`;
    document.querySelector('.meal-image img').setAttribute('src', meals[random].strMealThumb);
    document.querySelector('.meal-category').innerHTML = `<b>Category:</b> ${meals[random].strCategory}`;
    document.querySelector('.meal-area').innerHTML = `<b>Area:</b> ${meals[random].strArea}`;
    document.querySelector('.meal-tags').innerHTML = `<b>Tags:</b> ${meals[random].strTags}`;
    removeAllIngredients();
    meals[random].strIngredient.forEach(ingrediente =>{
        renderIngredient(ingrediente);
    });
    
    //renderIngredient(meals[random]);
}

function getRandom() {
    return Math.floor(Math.random() * meals.length);
}

function renderIngredient(ing){
    const ulElement = document.querySelector('#ingredients-list');
    const liElement = document.createElement("li");
    
    liElement.innerHTML = `${ing}`;
    ulElement.appendChild(liElement);
}
function removeAllIngredients(){
    document.getElementById('ingredients-list').removeChild('li');
}