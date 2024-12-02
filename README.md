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

- [ ] Quand tu cliques sur `Add Skill` que ça reset les champs du formulaire

- [ ] Rendre le formulaire d’ajout via l’url /skill et l’édition d’une skill en particulier via /skill/:id

- [ ] Quand tu cliques sur une skill de la liste que ça redirige vers /skill/:id, que cette skill soit éditable, qu’un bouton enregistrer persiste les changements et qu’un bouton cancel annule tous les changements en cours et remette la skill au dernier état sauvegardé

- [ ] Les sections FrontEnd - BackEnd et Softskills le code se répète -> en faire un composant -->

- [good -- à embellir] Comment je filtre par level ? => rendre les filtres dynamique via des select, en tant qu’utilisateur mon souhait est de pouvoir afficher une liste des Sofskills de level 2 comme une liste des Backend de niveau 3 par exemple

- [ ] Dans le store le computeColor est dupliqué deux fois ; fais en une fonction. => Ici ton array domains ne peut avoir qu’une valeur en [0] donc le plus simple est de faire
const mapSkillColor = { sofskill: blue, backend: red, frontend: yellow };
const color = mapSkillColor[domains[0]]

// => Roadmap -- 

// 1. Ajouter dans ma view card et ma view list des boutons de sélection pour filtrer dynamiquement l'affichage : 
// - Par Domaine de compétences 
// - Par Niveau de compétences

// 2. Modifier l'affichage de ces derniers en déplaçant la logique dans un nouveau composant qui reçoit juste l'ID de la compétence à afficher 

// 3. Clean le formulaire d'ajout après chaque validation de compétence

// 4. Séparer en 2 nouvelles view mon formulaire d'ajout et d'édition -- remplacer les boutons actuels par des redirections link du coup

// 5. S'assurer du bon fonctionnement du conseil 3

// 6. Completer le dernier conseil de la liste.