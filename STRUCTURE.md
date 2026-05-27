# Ce document explicite les changements de syntaxe qui s'opèrent entre le pseudocode et javascript

Javascript est un language de programmation dit de "scripting" initialement prévu pour le web (APIs, Manipulation du DOM, ...)

## Opérateurs logiques


| Fonction | Pseudocode | Javascript |
| -------  | --------   | -------    |
| Assigner | a <-- valeur| var a= valeur|
| Assigner type | a : entier <-- 0 | non natif (typescript) |
| Egalité  | a = b      | a == b |
| Inégalité | a ≠ b | a != b |
| Supériorité, Infériorité | >/>=, </<= | >/>=, </<= |
| Opérateurs logiques | OU, ET, NON | &#124; &#124; , &&, ! |
| Repetition | POUR n REPETITIONS | for (var i = 0; i < n; i++)|
| Repetition | TANTQUE CONDITION | while (condition) |
| Listes | Liste liste[1] | list [0] |
| Cibler valeur dans une liste avec son index | liste[index] | liste[index] |
| Repetition dans liste | POUR i DANS liste | for (var i = 0, i< list.length; i++) |
| Fonctions | DEBUT .. FIN | function fonction() {} |
| Opérateur conditionnel | SI condition ALORS ... SINON ... FINSI | if (condition) {...} else {...} |
| Opérateur conditionel | CASOU (condition) .. OPERATEUR ... FINCASOU | switch (condition) { case valeur: ...} |

## Opérateurs propres à Javascript (DOM)

| Fonction | Javascript |
| ---      | ---        |
| Déclaration variable par id | var variable = document.getElementById("id-element") |
| Déclarer variable par classe | var variable = document.getElementsByClassName('variable-class'); |
| Cibler le contenu d'une balise | const contenu = variable.innerHTML | 
| Cibler la valeur d'une variable | let contenuVar = variable.value |
| Fonction effectué selon un évenement défini | bouton.addEventListener(evenement, action) |
| Imprimer une variable à la console | console.log(variable) |

## Comprendre les spécificités du languages 

| Question | Réponse |
| ---      | ---     |
| Où s’exécute JavaScript ? | Javascript s'éxecute côté client. |
| Différence front / back | Les notions de 'front' et de 'back' font référence à l'endroit ou un programme applicatif est executé. Le frontend s'éxecute sur la machine de l'utilisateur qui utilise le service/site/application là où le backend s'éxecute sur un serveur distant communiquant avec le client |
| Où placer le JS dans une page HTML ? | Le js est à référencer dans un lien relatif ou absolu au sein d'une balise script mentionné au sein du HTML, sois en bas après la balise fermante body pour s'assurer que le DOM est chargé ou alternativement dans le head en mentionnant 'async' dans la balise pour le charger de manière asynchrone |
| Manipulation du DOM | Javascript peux cibler et manipuler les éléments du dit 'DOM' (Arborescence des balises inclus dans le HTML) en altérant leurs attributs (class,id...) et leurs contenu (opérations sur la base de valeurs, suppression, changement texte...) |
| Pourquoi vérifier un formulaire en JS ? | Un formulaire est généralement utilisé afin d'enregistrer dans un objet (json) des informations de manière à les envoyer dans un serveur distant (server, db..), s'assurer de la conformité des champs fournis (sécurité, respect des convention et rêgles db, ... ) fait partie des conventions respectés pour construire une application web moderne et robuste |


