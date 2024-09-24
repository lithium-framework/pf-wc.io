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

## V2

# Encapsulation Générique d’un Composant PatternFly dans un WebComponent avec Lithium

Ce guide décrit une approche générique pour encapsuler des composants PatternFly dans des WebComponents en utilisant Lithium Framework, un framework basé sur FAST de Microsoft. Cette méthode permet de rendre les composants PatternFly natifs du web, et donc utilisables indépendamment de la stack JavaScript ou framework de votre projet.

## Prérequis
### 1. Installer Lithium Framework
Pour commencer, installez et configurez Lithium en suivant la documentation officielle [Lithium](https://lithium-framework.github.io/lithium.io/).

### 2. Installer PatternFly
Ajoutez PatternFly à votre projet pour accéder aux composants et styles nécessaires :

```bash
npm install @patternfly/react-core @patternfly/react-styles
```

Assurez-vous d’importer les styles dans vos fichiers :

```tsx
import '@patternfly/react-core/dist/styles/base.css';
```

### 3. Importer les fonctionnalités essentielles de Lithium
Lithium fournit les outils nécessaires pour créer et gérer des WebComponents. Vous aurez besoin des éléments suivants :
- **html**, **render** : pour générer le rendu des templates.
- **WebComponent**, **customElement**, **attr**, **state**, **attrState** : pour créer et gérer les composants et leurs états.
Concepts Clés pour l'Encapsulation
## 1. Création d'un WebComponent
Chaque composant PatternFly que vous encapsulez doit être transformé en WebComponent via le décorateur @customElement. Ce décorateur permet de définir une nouvelle balise HTML personnalisée correspondant au composant PatternFly.

### Exemple :
```tsx
@customElement({
  name: 'nom-du-composant',
  template: html`${(element: NomComposant) => {
    return html`<div class="pf-v5-c-composant">
      <!-- Contenu et slots du composant -->
    </div>`;
  }}`,
  shadowOptions: { mode: 'open' } // Shadow DOM activé ou désactivé selon les besoins
})
export class NomComposant extends WebComponent {}
```

## 2. Gestion des Attributs avec @attr et @attrState
Utilisez les décorateurs @attr ou @attrState pour exposer les propriétés du composant PatternFly encapsulé sous forme d’attributs HTML. Cela permet à l’utilisateur de configurer le composant directement dans le HTML.

### Exemple :
```tsx
@attr() variant: "primary" | "secondary" = "primary";
@state() isActive = false;

attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void {
  if (name === 'variant') {
    this.isActive = newValue === 'primary';
  }
  super.attributeChangedCallback(name, oldValue, newValue);
}
```

Cela permet de gérer dynamiquement l’état du composant en fonction des attributs HTML.

## 3. Application des Styles PatternFly
Les composants PatternFly utilisent des classes CSS spécifiques pour leur apparence. Pour garantir que ces styles soient appliqués correctement, vous devez importer les styles PatternFly et désactiver le Shadow DOM (ou l’utiliser avec précaution).

### Exemple d’application des styles :
```tsx
import BadgeStyle from '@patternfly/react-styles/css/components/Badge/badge.css';

@customElement({
  name: 'pf-badge',
  template: html`${(badge: PfBadge) => html`
    <span class=${[
      'pf-v5-c-badge',
      badge.isRead ? 'pf-m-read' : 'pf-m-unread'
    ].join(' ')}>
      <slot></slot>
    </span>
  `}`,
  styles: [css`${String(BadgeStyle)}`],
  shadowOptions: { mode: 'open' }
})
export class PfBadge extends WebComponent {}
```

## 4. Organisation et Utilisation des Slots
Les slots permettent d’injecter du contenu dans les composants PatternFly encapsulés. Utilisez <slot></slot> pour indiquer où le contenu dynamique sera inséré.

### Exemple :
```tsx
@customElement({
  name: 'pf-menu',
  template: html`<div class="pf-v5-c-menu">
    <slot></slot> <!-- Contenu dynamique -->
  </div>`,
  styles: [css`${String(MenuStyle)}`]
})
export class PfMenu extends WebComponent {}
```

## Étapes Génériques pour Encapsuler un Composant PatternFly
### 1. Déclarer le WebComponent avec @customElement
Définissez le nom du composant et structurez son template avec html. Vous pouvez injecter des styles PatternFly à l’aide de css pour maintenir la cohérence visuelle.

```tsx
@customElement({
  name: 'pf-menu-item',
  template: html`${(item: PfMenuItem) => html`
    <li class=${[
      'pf-v5-c-menu__list-item',
      item.isDisabled ? 'pf-m-disabled' : ''
    ].join(' ')}>
      <slot></slot>
    </li>
  `}`,
  styles: [css`${MenuStyle}`],
  shadowOptions: { mode: 'open' }
})
export class PfMenuItem extends WebComponent {}
```

### 2. Synchroniser les Attributs et les États
Exposez les attributs du WebComponent avec @attr ou @attrState et synchronisez-les avec les états internes pour réagir aux changements d’attributs.

```tsx
@attr() disabled: "true" | "false" = "false";
@state() isDisabled = false;

attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void {
  if (name === 'disabled') {
    this.isDisabled = newValue === 'true';
  }
  super.attributeChangedCallback(name, oldValue, newValue);
}
```
### 3. Utiliser les Slots pour le Contenu Dynamique
Utilisez les slots pour insérer du contenu dynamique à l’intérieur de vos composants encapsulés.

### 4. Intégration et Utilisation dans le HTML
Une fois encapsulé, le composant PatternFly est utilisable comme n’importe quel autre élément HTML. Voici un exemple d’utilisation :

```html
<pf-badge readed="true">Nouveau</pf-badge>
<pf-menu>
  <pf-menu-item>Option 1</pf-menu-item>
</pf-menu>
```

## Conclusion
Encapsuler des composants PatternFly dans des WebComponents avec Lithium vous permet de rendre ces composants accessibles dans n’importe quelle application front-end, quel que soit le framework utilisé. Grâce aux attributs HTML et au Shadow DOM (ou non), vous pouvez intégrer facilement les styles et comportements de PatternFly dans des composants web natifs.

Ce guide fournit une approche flexible et réutilisable pour encapsuler tout composant PatternFly de manière générique, en garantissant l’interopérabilité et la modularité.

