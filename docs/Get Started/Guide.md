# Guide

**Encapsulation Générique d’un Composant PatternFly dans un WebComponent avec Lithium**

Ce guide explique comment encapsuler n’importe quel composant [**PatternFly**](https://www.patternfly.org/) dans un [**WebComponent**](https://developer.mozilla.org/fr/docs/Web/API/Web_components) en utilisant [**Lithium**](https://lithium-framework.github.io/lithium.io/), un framework basé sur [**FAST**](https://fast.design/). L’objectif est de rendre l’utilisation de composants PatternFly, qui sont à la base des composants React, disponible sous forme de **WebComponents** natifs, utilisables dans n’importe quelle application front-end.

**Prérequis**

1.	**Lithium Framework** : Installez et configurez **Lithium**.

•	Pour l’installation, suivez la documentation officielle du framework.

2.	**PatternFly** : Installez **PatternFly** et importez les styles nécessaires dans votre projet :

```bash
npm install @patternfly/react-core
```

Dans vos fichiers TypeScript ou JavaScript, importez les styles de PatternFly pour que le WebComponent puisse les utiliser :

```tsx
import '@patternfly/react-core/dist/styles/base.css';
```

3.	**Lithium Core** : Vous devrez importer les fonctionnalités essentielles de **Lithium** comme :

•	html, render, WebComponent, customElement, attrState, etc.

**Principes de base pour l’encapsulation d’un composant PatternFly**

**1. Création du WebComponent**

Chaque composant PatternFly que vous encapsulez sera transformé en **WebComponent** en utilisant le décorateur @customElement de Lithium. Cela permet de créer une balise HTML personnalisée pour le composant.

**2. Utilisation de attrState pour synchroniser les attributs HTML**

Le décorateur attrState (ou une autre méthode équivalente) est utilisé pour synchroniser les **attributs HTML** avec les **états internes** du WebComponent. Cela permet de rendre les propriétés du composant facilement configurables depuis l’extérieur via les attributs.

**3. Ajout des styles PatternFly**

Les composants PatternFly utilisent des classes CSS spécifiques. Vous devez vous assurer que ces classes sont bien appliquées dans le WebComponent. En désactivant le **Shadow DOM** (avec shadowOptions: null), les styles CSS de PatternFly s’appliquent correctement au composant.

**4. Template du composant**

Le template de votre composant est défini à l’aide de la fonction html de Lithium. Il utilise des expressions JavaScript pour lier les attributs du WebComponent aux classes CSS PatternFly, générant ainsi le composant final avec les bons styles et comportements.

**Étapes Génériques pour Encapsuler un Composant PatternFly**

**Étape 1 : Définir le WebComponent avec @customElement**

Utilisez le décorateur @customElement pour déclarer votre WebComponent.

```tsx
@customElement({
  name: 'nom-du-composant',  // Remplacez par le nom souhaité
  template: html`${(element: NomComposant) => {
    return html`
      <!-- Template du composant ici -->
    `;
  }}`,
  shadowOptions: null  // Shadow DOM désactivé pour appliquer les styles externes
})
```

**Étape 2 : Ajouter des propriétés avec attrState**

Déclarez et synchronisez les attributs que vous souhaitez exposer depuis le WebComponent avec des propriétés internes en utilisant le décorateur attrState.

```tsx
@attrState() nomAttribut: type = valeurParDefaut;
```

Par exemple, pour un bouton PatternFly avec une propriété text, vous pouvez déclarer :

```tsx
@attrState() text: string = "Bouton par défaut";
```

Vous pouvez aussi déclarer des propriétés pour les variantes, les styles, ou toute autre configuration supportée par le composant PatternFly.

**Étape 3 : Appliquer les styles PatternFly**

Ajoutez les classes CSS PatternFly dans le template du composant. Utilisez les expressions JavaScript pour gérer dynamiquement les classes en fonction des valeurs des attributs.

```tsx
<button class=${`pf-v5-c-button pf-m-${element.variant} ${element.disabled ? 'pf-m-disabled' : ''}`}>
  ${element.text}
</button>
```

Cela vous permet d’ajuster les classes en fonction des différentes variantes, états (comme disabled), ou types de composants.

**Exemple Générique d’Encapsulation**

Voici un exemple générique pour encapsuler un composant **PatternFly** :

```tsx
import { html, WebComponent, customElement, attrState } from '@lithium-framework/core';
import '@patternfly/react-core/dist/styles/base.css';

@customElement({
  name: 'pf-generic-component',
  template: html`${(element: PfGenericComponent) => {
    return html`
      <div class=${`pf-v5-c-generic pf-m-${element.variant}`}>
        <span>${element.content}</span>
      </div>`;
  }}`,
  shadowOptions: null  // Désactivation du Shadow DOM pour permettre l'application des styles PatternFly
})
export class PfGenericComponent extends WebComponent {

  @attrState() content: string = "Texte par défaut";
  @attrState() variant: "primary" | "secondary" = "primary";  // Variantes du composant PatternFly
}
```

**Étape 4 : Utilisation du Composant dans du HTML**

Une fois encapsulé, le composant peut être utilisé comme tout autre élément HTML dans votre page. Par exemple :

```html
<pf-generic-component content="Ceci est un composant encapsulé" variant="secondary"></pf-generic-component>
```

Les attributs content et variant définissent respectivement le contenu et la variante du composant PatternFly encapsulé.

**Étape 5 : Personnalisation et Extension**

Vous pouvez ajouter davantage d’attributs ou de méthodes pour personnaliser le comportement du composant encapsulé. Par exemple, vous pouvez ajouter des événements pour capturer les interactions utilisateur ou intégrer d’autres fonctionnalités du framework PatternFly.

**Conclusion**

Encapsuler des composants **PatternFly** dans des **WebComponents** avec **Lithium** permet de rendre ces composants réutilisables dans n’importe quelle application web, indépendamment de la stack utilisée. Grâce au décorateur attrState, vous pouvez facilement lier des propriétés et des états à des attributs HTML, et en désactivant le Shadow DOM, vous assurez que les styles PatternFly s’appliquent correctement.