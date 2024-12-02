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
- [ ] Bulk la suppression
