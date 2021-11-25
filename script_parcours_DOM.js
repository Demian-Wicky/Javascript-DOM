// Question 1 :
console.log("---- Question 1 ----")
// Combien y a-t-il d'éléments <p> présents dans la page HTML ? Imprime-le résultat dans la console.
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
a = document.getElementsByTagName("p").length
console.log(a)



// Question 2 :
console.log("---- Question 2 ----")
// Quel est le contenu texte de l'élément portant l'id coucou ? Imprime-le dans la console.
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
b = document.getElementById("coucou").textContent
console.log(b)



// Question 3 :
console.log("---- Question 3 ----")
// Quelle est l'URL vers laquelle pointe le 3ème élément <a> de la page HTML ? Imprime-la dans la console.
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
c = document.getElementsByTagName("a")[2].href
console.log(c)



// Question 4 :
console.log("---- Question 4 ----")
// Combien d'éléments portent la classe compte-moi ? Imprime le résultat dans la console.
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
d = document.getElementsByClassName("compte-moi").length
console.log(d)



// Question 5 :
console.log("---- Question 5 ----")
// Combien d'éléments <li> portent la classe compte-moi ? Imprime le résultat dans la console.
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
e = document.querySelectorAll("li.compte-moi").length
console.log(e)



// Question 6 :
console.log("---- Question 6 ----")
// Combien d'éléments <li> et situés dans une liste ordonnée (<ol>) portent la classe compte-moi ? Imprime le résultat dans la console.
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
f = document.querySelectorAll('ol li.compte-moi').length
console.log(f)



// Question 7 :
console.log("---- Question 7 ----")
// Petit jeu de piste à résoudre si possible sans regarder le fichier HTML…
// La page contient un seul élément <div>. Celui-ci contient 2 éléments "unordered list" ou <ul>.
// Dans le second <ul>, le premier élément de la liste (tag <li>) est caché visuellement de l'utilisateur mais toi,
//      tu peux en récupérer le contenu. Affiche-le dans la console.
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
g = document.querySelectorAll('div ul')[1].querySelectorAll('li')[0].innerText
console.log(g)

