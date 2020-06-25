# Installation

`yarn add redux react-redux redux-devtools-extension`

# Mise en place du store

- créer un reducer `src/reducers/nameForTheReducer.js`

```javascript
const initialState = {
  // ici l'état initial
};

const nameForTheReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    default: return state;
  }
};

export default nameForTheReducer;

```

- créer le store `src/store/index.js`

```javascript
import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

import reducer from 'src/reducers/nameForTheReducer';

const store = createStore(
  // reducer
  reducer,
  // enhancer
  devToolsEnhancer(),
);

export default store;

```

- utilisation du composant Provider pour que nos composants puissent accéder au store. Par exemple dans _src/index.js_ :

```javascript
import { Provider } from 'react-redux';

import store from 'src/store';

[...]

const rootReactElement = (
  <Provider store={store}>
    <App />
  </Provider>
);

[...]

```

- on peut alors visualiser le store dans le navigateur avec Redux Dev Tools

# Connexion d'un composant au store

- créer un fichier dans `src/containers` (utiliser la même structure de fichiers que dans `src/components`) : assistant pour le composant, qui fera le lien avec le store

```javascript
import { connect } from 'react-redux';

// === on importe le composant de présentation
import LeComposant from 'src/components/....../LeComposant';

// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir : élément à récupérer dans le state
});

// === mapDispatchToProps
// si j'ai besoin de dispatcher une action vers le store
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(LeComposant);

```

- utiliser le container à la place du composant de présentation (par exemple remplacer _components_ par _containers_ dans l'import). Si on fournissait des props au composant de présentation qui sont maintenant liées au state, les supprimer en remplaçant par le composant container. 

- pour chaque prop du composant de présentation, se poser la question "est-ce que cette prop est liée au state ?"
  - oui, lecture d'une information => _mapStateToProps_
  - oui, modification d'une information => _mapDispatchToProps_
  - non => on ne gère pas cette prop dans le container

  ## mapStateToProps : les props qui lisent une valeur du state

  - indiquer le nom de la prop à remplir et la propriété du state qui correspond, par exemple :

  ```javascript
  const mapStateToProps = (state) => ({
  // nom de la prop à remplir : élément à récupérer dans le state
    messages: state.messages,
  });
  ```

  => le container injecte `state.messages` dans la prop `messages` du composant de présentation

  ## mapDispatchToProps : les props qui doivent envoyer une action au store

- si on n'a pas encore de fichier pour les actions : créer un fichier `src/actions/nameForTheActions.js`

- si l'action dont on a besoin (intention) n'existe pas encore : définir le _action type_ et le _action creator_ pour cette action :

 ```javascript
 // === action types
 export const DO_SOMETHING = 'DO_SOMETHING';

 // === action creators
 export const doSomething = (/* newValue */) => ({
   type: DO_SOMETHING,
   /* value: newValue, */
 });

```

- ajouter le traitement de cette action dans le reducer (= quel est l'impact de cette action sur le state)

```javascript
import { DO_SOMETHING } from 'src/actions/nameForTheActions';

[...]

switch (action.type) {
  case DO_SOMETHING:
    // on retourne un nouveau state
    return {
      // en déversant les informations du state actuel
      ...state,
      // et en appliquant des modifications
      propriété_à_modifier_1: 'valeur',
      propriété_à_modifier_2: action.newValue,
    };

  [...]
}

```

- dans `mapDispatchToProps` indiquer le nom de la prop à remplir et la callback correspondante qui utilise `dispatch` et le `action creator` pour envoyer l'action au store

```javascript
import { doSomething } from 'src/actions/nameForTheActions';

const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  setValue: (/* param1 */) => {
    dispatch(doSomething(/* param 1 */));
  },
});
```
