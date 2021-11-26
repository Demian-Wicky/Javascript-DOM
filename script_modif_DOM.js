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



// Modification n°5     deleteLastCards()



// Modification n°6     changeCardsText()



// Modification n°7     changeViewButtons()



// Modification n°8     tordu()