const createRecipeHtml = (id, name, ingredients, method)  => {
    const html = `
    <li class="list-group-item list-border" data-recipe-id="${id}">
      <div class="card cardstyle">
        <div class="card-body">
          <h5 class="card-title text-center">${name}</h5>
          <h6 class="card-title">Ingredients:</h6>
          <p class="card-text"> ${ingredients}</p>
          <h6 class="card-title">Method:</h6>
          <p class="card-text"> ${method} </p>
            <div class="container">
              <div class="row row-cols-1 row-cols-md-4 justify-content-between ">
                <button class="btn btn-danger"> Delete Recipe</button>
              </div>
            </div>
        </div>
      </div>
    </li> `
  return html;
  }

class RecipeManager {
    constructor(currentId = 0){
        this.recipes = [];
        this.currentId = currentId;
    }
    
    addRecipe(name, ingredients, method) {
        const newRecipe = {
            id: this.currentId++,
            name: name,
            ingredients: ingredients,
            method: method
        };
        this.recipes.push(newRecipe);
    }

    render(){
        const recipesHtmlList = [];
        for(let i = 0; i < this.recipes.length; i++){
            const renderRecipe = this.recipes[i];
            const recipeHtml = createRecipeHtml(
                renderRecipe.id,
                renderRecipe.name, 
                renderRecipe.ingredients, 
                renderRecipe.method, 
                );
            recipesHtmlList.push(recipeHtml);
        }

        const recipesHtml = recipesHtmlList.join("\n");
        const recipesList = document.querySelector("#recipesList");
        recipesList.innerHTML = recipesHtml;
    }
}


// Hard coded Display from an object
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