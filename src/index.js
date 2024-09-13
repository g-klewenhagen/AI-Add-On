
function generateRecipe(event){
    event.preventDefault();

    new Typerwriter("#recipe",{
        strings: "Sauerkraut tacos",
        autostart: true,
        delay: 1,
        cursor: "",
    });
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);

//let apiKey: 8f4329a8tf75b2b642a61303d375o2c5