# Training

## Goal

First approach of the VueJs language, using VueJs2, VueX and VueRouter (specified version for X and Router to be ok with VueJs2).


### Compiles and hot-reloads for development
```
npm run serve
```


### Illustration V1 (Avant premier feedback)

https://github.com/user-attachments/assets/c605111f-ecdf-4cee-b8a4-a5811199dfd8

### Illustration V2 (Après premier feedback)

https://github.com/user-attachments/assets/926af649-74d8-40c9-b725-1aec0ca306eb

### Illustration V3 (Après deuxième feedback)

https://github.com/user-attachments/assets/12e1817e-400a-4e44-8ac3-a514dacf89ba


### Améliorations possibles pour V2

- [x] Check mapGetters et mapActions pour cleaner l'utilisation du store dans les composants .vue.
- [x] Tu peux avoir des soucis de réactivité en mettant index en key du v-for, il vaut mieux y mettre un id unique. Je te laisse check pourquoi.
- [x] Skills pourrait être un array d'objet { id: string, label: string, level: number, domains: ('dom1' | 'dom2' | 'dom3')[], color: string }
- [x] Changer le formulaire d'ajout d'un skill pour convenir à la nouvelle forme de l'objet Skills
- [x] Rendre possible l'édition d'une skill
- [x] Filtrer les skills par level, domains et label... -->> répartition par domains
- [x] Faire une view de ces skills display sous forme de liste atteignable via l'url /list et une autre display sous forme de cards atteignable via l'url /cards (en gros pour utiliser la data de ton store dans deux view différente, checker vuex-persisted-state)
- [o] Bulk la suppression


### Améliorations possibles pour V3

- [x] Quand tu cliques sur `Add Skill`, que ça reset les champs du formulaire

- [x] Rendre le formulaire d’ajout via l’url /skill et l’édition d’une skill en particulier via /skill/:id

- [x] Quand tu cliques sur une skill de la liste que ça redirige vers /skill/:id, que cette skill soit éditable, qu’un bouton enregistrer persiste les changements et qu’un bouton cancel annule tous les changements en cours et remette la skill au dernier état sauvegardé

- [x] Les sections FrontEnd - BackEnd et Softskills le code se répète -> en faire un composant (Problème reglé, mais se redédouble : - la section du filtre (en faire un compo) - voir si il est possible de faire un unique composant pour l'affichage des listes et des cards en passant juste different type de css par dessus (clairement pas sur que ça marche)) 

- [x] Comment je filtre par level ? => rendre les filtres dynamique via des select, en tant qu’utilisateur mon souhait est de pouvoir afficher une liste des Sofskills de level 2 comme une liste des Backend de niveau 3 par exemple

- [x] Dans le store le computeColor est dupliqué deux fois ; fais en une fonction. => Ici ton array domains ne peut avoir qu’une valeur en [0] donc le plus simple est de faire
const mapSkillColor = { sofskill: blue, backend: red, frontend: yellow };
const color = mapSkillColor[domains[0]]

Roadmap -- 

1. Ajouter dans ma view card et ma view list des boutons de sélection pour filtrer dynamiquement l'affichage : 
- Par Domaine de compétences 
- Par Niveau de compétences 

2. Modifier l'affichage de ces derniers en déplaçant la logique dans un nouveau composant qui reçoit juste l'ID de la compétence à afficher 

3. Clean le formulaire d'ajout après chaque validation de compétence

4. Séparer en 2 nouvelles view mon formulaire d'ajout et d'édition -- remplacer les boutons actuels par des redirections link du coup

5. S'assurer du bon fonctionnement du conseil 3 

6. Completer le dernier conseil de la liste.

7. Faire un coup de clean côté UX/UI avec du css 

8. Ajouter les idées pensées au cours de l'ajout des conseils

A rajouter => 
- [x] Ajouter un bouton de redirection vers /skill pour ajouter une skill
- [x] Rendre commun le component d'édition et celui d'ajout des skills 
- [x] Transformer le choix de filtre dynamique en component utilisable dans /list et /cards


### Questions

- Est ce que avec mapGetter et mapAction je dois mettre tous les getter et toutes les actions de mon store ou bien je peux me contenter de le remplir uniquement des getters et actions utiles a mon component ? 

- Pour les actions spécifiques à un unique component, je dois les intégrer quand même au store ou je peux les laisser être défini dans le script du component ?

- Est ce que ça vaut le coup de chercher un moyen de passer en component le v-if v-else de la list et des cards pour avoir globalement le même fonctionnement commun mais en affichage de list ou de card ? Je vois pas bien bien comment le faire mais ça doit pas être impossible mais je ne suis pas sur de si ça va pas rendre plus lourd le component commun et compliqué le code.
