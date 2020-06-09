// les différents tableaux

var firstPartskungfu = [ "Maitre Lee ","Petit Bambou ", "Moine shaolin ", "jet lee ","jackie chan " ];

var secondPartskungfu = [ "utilise la technique de l'homme ivre ", "imite la mante religieuse  ", "fait 1000 pompes par jour ","médite sous une chute d'eau ", "utilise la technique du poing de fer "];

var thirdPartskungfu = [ "pour vaincre son adversaire","pendant que son adversaire le sous estime","après avoir mangé 1000 bols de nouilles sauce soja sucré","quand il comprends que son aversaire est redoutable ","quand il sent que la fin est proche" ];

var firstPartsKarate = ["Makoto ","Honda sensei ","Kasumi-chan ","Le Samurai ","Mister karaté "];

var secondPartsKarate = ["préfère se servir de sa lame ", "frappe dans des rondins de bois 1000x par jour ","fait 1000 tractions par jour  ","casse des bamboo avec ses poings tous les jours  ","utilise sa prise de karaté secrète "];

var thirdPartsKarate = ["pour vaincre son adversaire","pendant que son adversaire ne se doute de rien","quand il comprends que son adversaire ne le prend pas au sérieu","pour éviter que les combats ne s'éternisent","quand le malheureu se moque"];

// fonction qui permet de générer des phrases aléatoirement.
// Utilisation de la fonction Math.random (renvoie un nombre aléatoire compris entre 0 inclus et 1 exclus)associé aux indices des item de chaque tableaux
// Math.ceil() renvoie le plus petit entier supérieur ou égal à un nombre donnée
// Math.floor() renvoie le plus grand entier qui est inférieur ou égal à un nombre donnée

function getRandomIndex (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
};

// variables permettant de fixer le parametre max de la fonction getRandomIndex
var firstPartsLength = firstPartskungfu.length;
var secondPartsLength = secondPartskungfu.length;
var thirdPartsLength = thirdPartskungfu.length;

// variables permettant de stocker la valeur retourner par la fonction getRandomIndex
var indexFirstPart = "";
var indexSecondPart = "";
var indexThirdPart = "";

// Création d'un tableau pour regrouper les différentes parties de phrases
// Cela permettra de donner le choix à l'utilisateur entre thème 1 ou thème 2 
var kungfuTabs=[firstPartskungfu, secondPartskungfu, thirdPartskungfu];
var kungfuphrase1 = "";

var karateTabs=[firstPartsKarate, secondPartsKarate, thirdPartsKarate];
var karatePhrase = "";

//selection des elements dans le DOM
var containerQuote = document.getElementById("textZone");
var kungfuBtn = document.getElementById("kungfu");
var karateBtn = document.getElementById("karate");
var themeTitle = document.createElement("h2");
const stopBtn = document.querySelector("#stopIt");

//fonction qui permetant de créer aléatoirement le nombre de citations demandées par l'utilisateur
function createQuote(myThemeTitle){
    containerQuote.innerHTML= "";

    var currentNbQuote = NbQuote.value;
    themeTitle.textContent = myThemeTitle;
    document.getElementById("textZone").appendChild(themeTitle);
    
    for(i=0; i<currentNbQuote; i++){
        indexFirstPart = getRandomIndex(0, firstPartsLength-1);
        indexSecondPart = getRandomIndex(0, secondPartsLength-1);
        indexThirdPart = getRandomIndex(0, thirdPartsLength-1);
        if(myThemeTitle == "proverbes Kung-fu"){
            var phrase1 = kungfuTabs[0][indexFirstPart] + kungfuTabs[1][indexSecondPart] + kungfuTabs[2][indexThirdPart];
        }
        else{
            phrase1 = karateTabs[0][indexFirstPart] + karateTabs[1][indexSecondPart] +  karateTabs[2][indexThirdPart];
        }
        var newQuote = document.createElement("p");
        newQuote.textContent = phrase1;
        document.getElementById("textZone").appendChild(newQuote);
    };
}

// interaction avec les boutons et les evenements 
kungfuBtn.addEventListener("click", function(){
    createQuote("proverbes Kung-fu")
});

karateBtn.addEventListener("click", function(){
    createQuote("proverbes Karaté")

});

stopBtn.addEventListener("click", function() {
    containerQuote.innerHTML = "";
  });