const inputValidation = document.querySelector("#input-validation");
const validationName = document.querySelector("#input-validation-name");
const validationIngredients = document.querySelector("#input-validation-ingredients");
const validationMethod = document.querySelector("#input-validation-method");

const newRecipeName = document.querySelector("#new-recipe-name");
const newRecipeIngredients = document.querySelector("#new-recipe-ingredients");
const newRecipeMethod = document.querySelector("#new-recipe-method");

const addRecipe = document.querySelector("#addRecipe");
addRecipe.addEventListener("click",newRecipe);
 
    function newRecipe (event) {
      event.preventDefault();
      if(
        newRecipeName.value === " " && 
        newRecipeIngredients.value === " " && 
        newRecipeMethod.value === " "
      ) {
        inputValidation.innerHTML = "All fields are mandatory.";
        inputValidation.style.color = "red";
      } else if (newRecipeName.value === "") {
        inputValidation.innerHTML = "Recipe name is mandatory";
        inputValidation.style.color = "red";
      } else if (newRecipeIngredients.value === "") {
        inputValidation.innerHTML = "Ingredients are mandatory";
        inputValidation.style.color = "red";
      } else if (newRecipeMethod.value === "") {
        inputValidation.innerHTML = "Method is mandatory";
        inputValidation.style.color = "red";
      } else {
        inputValidation.style.display = "none";
        newRecipeName.value = "";
        newRecipeIngredients.value = "";
        newRecipeMethod.value = "";
      }
    }   

    const recipeManager = new RecipeManager (0);

    recipeManager.load();

    recipeManager.render();


    


  
