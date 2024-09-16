function displayRecipe(response){
new Typewriter("#recipe",{
        strings: response.data.answer,
        autoStart: true,
        delay: 1,
        cursor: "",
    });
}

function generateRecipe(event){
    event.preventDefault();

    let instructionsInput = document.querySelector("#user-instructions");
    let apiKey = "8f4329a8tf75b2b642a61303d375o2c5";
    let context ="You are a creative chef and love to create new recipes fusioning Mexican and German cuisines. You mission is to generate a simple recipe in basic HTML and separate each line with a <br />. Make sure to follow the user instructions. Please name each recipe in a hipster fashion.";
    let prompt = `User instructions: Generate a Mexican - German fusion recipe using ${instructionsInput.value}`;
    let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    let recipeElement = document.querySelector("#recipe");
    recipeElement.classList.remove("hidden");
    recipeElement.innerHTML = `<div class="generating">⏳ Generating a recipe with ${instructionsInput.value}</div>`;

    axios.get(apiURL).then(displayRecipe);
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);