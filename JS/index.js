// Display a Recipe from a hard coded object
const recipe = {
    name: "Seafood Pasta",
    ingredients: "Pasta, Seafood, Tomatoes Sauce",
    method: "Cook the pasta, cook the seafood in the sauce and combine",
    img: "./images/pasta.png",
  };
  btnDisplay = document.querySelector("#btnDisplay");
  btnDisplay.addEventListener("click", displayRecipe);
  function displayRecipe() {
    for (let property in recipe) {
      if (recipe.hasOwnProperty(property)) {
        // Do things here
        document.querySelector(
          "#displayCard"
        ).innerHTML = `<div class="card" style="width: 18rem;">
                      <img class="card-img-top" src="${recipe.img}" alt="Card image cap">
                      <div class="card-body text-center">
                          <h3 class="card-title">${recipe.name}</h3>
                          <h6 class="card-title text-start">Ingredients:</h6>
                          <p class="card-text text-start">${recipe.ingredients}</p>
                          <h6 class="card-title text-start">Method:</h6>
                          <p class="card-text text-start">${recipe.method}</p>
                          <a href="#" class="btn btn-danger m-4"> Delete Recipe</a>
                      </div>
                      </div>`;
      }
    }
  }

  

const validationName = document.querySelector("#input-validation-name");
const validationIngredients = document.querySelector("#input-validation-ingredients");
const validationMethod = document.querySelector("#input-validation-method");

const newRecipeName = document.querySelector("#new-recipe-name");
const newRecipeIngredients = document.querySelector("#new-recipe-ingredients");
const newRecipeMethod = document.querySelector("#new-recipe-method");

const addRecipe = document.querySelector("#addRecipe");
addRecipe.addEventListener("click",newRecipe);
  // function newRecipe (event) {
  //     event.preventDefault();
  //     if(newRecipeName.value === '' || newRecipeIngredients.value === '' || newRecipeMethod.value === '') {
  //       validationName.innerHTML = "Please add your notes"
  //       validationIngredients.innerHTML = "Please add your notes"
  //       validationMethod.innerHTML = "Please add your notes"
  //     }
  //   }  
   
    function newRecipe (event) {
      event.preventDefault();
      if(newRecipeName.value === '' && newRecipeIngredients.value === '' && newRecipeMethod.value === '') {
        validationName.innerHTML = "Please add your notes"
        validationIngredients.innerHTML = "Please add your notes"
        validationMethod.innerHTML = "Please add your notes"
      } else if (newRecipeIngredients.value === ''){
        validationIngredients.innerHTML = "Please add your notes"
      } else if (newRecipeMethod.value === '') {
        validationMethod.innerHTML = "Please add your notes"
      } else {
        event.target.reset();
      }

    }   