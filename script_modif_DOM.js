// https://stackoverflow.com/questions/4550505/getting-a-random-value-from-a-javascript-array
Array.prototype.sample = function(){
    return this[Math.floor(Math.random()*this.length)];
}

// Modification n°1     changeTitles()
function changeTitles(){
    let title = document.getElementsByClassName("jumbotron-heading")[0]
    title.textContent = "Ce que j'ai appris à THP"
    /////
    let subtitle = document.getElementsByClassName("lead text-muted")[0]
    subtitle.textContent = "THP est une formation qui, en 3 mois, à plein temps, vous apportera des connaissances actionnables pour vous permettre de voir plus loin. Chez nous, pas de professeurs, pas de locaux, mais un groupe de travail en présentiel. Après 11 semaines, les principaux langages et outils du web n'auront plus de secret pour vous !"
}
changeTitles()


// Modification n°2     changeCallToActions()
function changeCallToActions(){
    let btn1 = document.getElementsByClassName("jumbotron")[0].getElementsByClassName("btn-primary")[0]
    btn1.textContent = "OK je veux tester !"
    btn1.href = "http://www.thehackingproject.org"
    ///////
    let btn2 = document.getElementsByClassName("jumbotron")[0].getElementsByClassName("btn-secondary")[0]
    btn2.textContent = "Non Merci"
    btn2.href = "https://www.pole-emploi.fr/accueil/"
}
changeCallToActions()


// Modification n°3     changeLogoName()
function changeLogoName(){
    let title = document.getElementsByClassName("navbar")[0].getElementsByClassName("navbar-brand")[0].getElementsByTagName("strong")[0]
    title.textContent = "The THP Experience (Non Merci)"
    title.style.fontSize = "2em"
}
changeLogoName()


// Modification n°4     populateImages()
function populateImages(){


    let imagesArray = ["https://img.icons8.com/color/480/000000/html-5.png", "https://img.icons8.com/color/480/000000/css3.png", "https://img.icons8.com/color/480/000000/javascript.png", "https://img.icons8.com/color/480/000000/ruby-programming-language.png", "https://img.icons8.com/color/480/000000/bootstrap.png", "https://img.icons8.com/color/480/000000/github.png", "https://i.imgur.com/bJE9Pka.png", "https://avatars2.githubusercontent.com/u/25484553?s=200&v=4", "https://img.icons8.com/color/480/000000/heroku.png"];
    
    let nbImages = document.getElementsByClassName("album")[0].getElementsByClassName("card-img-top").length

    // https://www.gavsblog.com/blog/htmlcollection-foreach-loop-convert-object-to-array-javascript
    for (let i = 0; i < nbImages; i++){
        document.getElementsByClassName("album")[0].getElementsByClassName("card-img-top")[i].src = imagesArray.sample()
    }
}
populateImages()


// Modification n°5     deleteLastCards()
function deleteLastCards(){
    let length = document.getElementsByClassName("album")[0].getElementsByClassName("col-md-4").length

    for(var i = length-3 ; i < length ; i++){
        lastCard = document.getElementsByClassName("album")[0].getElementsByClassName("col-md-4")[i]
        console.log(lastCard)
        // elementFromDOM.remove(lastCard)
    }

}
deleteLastCards()


// Modification n°6     changeCardsText()



// Modification n°7     changeViewButtons()



// Modification n°8     tordu()