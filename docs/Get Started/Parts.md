# Parts

### Tableau de Parts Génériques et leurs Concepts

| **Nom de la Part** | **Description / Concept** | **Exemples d'Utilisation** |
| --- | --- | --- |
| `wrapper` | Le conteneur global qui englobe tout le composant. Sert souvent à encapsuler le composant ou à fournir un cadre général. | `<div part="wrapper"></div>` dans un composant de carte, modale, etc. |
| `header` | Partie supérieure d'un composant, souvent utilisée pour des titres ou éléments de navigation. | `<header part="header"></header>` dans un composant de modal, panneau latéral, carte. |
| `content` | Partie principale qui contient le contenu, c'est là où l'information ou les données sont généralement affichées. | `<div part="content"></div>` dans une carte, un formulaire, une boîte de dialogue. |
| `footer` | Partie inférieure du composant, souvent utilisée pour les actions (boutons, liens) ou pour des informations complémentaires. | `<footer part="footer"></footer>` dans une modale, carte ou liste d'éléments. |
| `button` | Élément d'interaction, représente une action particulière dans le composant. Peut être décliné en plusieurs boutons dans un composant. | `<button part="button"></button>` dans des dialogues, formulaires ou cartes. |
| `icon` | Élément visuel représentant une icône pour guider l'utilisateur ou donner un contexte visuel. | `<span part="icon"></span>` dans des boutons, alertes ou onglets. |
| `input` | Partie où l'utilisateur fournit des données (champs de texte, radio, checkbox). | `<input part="input" />` dans des formulaires, filtres ou zones de recherche. |
| `label` | Représente un texte explicatif ou un titre associé à un autre élément, généralement un `input`. | `<label part="label"></label>` pour champs de formulaires, cases à cocher, etc. |
| `container` | Une structure interne pour regrouper plusieurs sous-éléments. Peut être utilisé pour créer une disposition plus complexe à l'intérieur du composant. | `<div part="container"></div>` dans une modale, section d'un panneau, layout. |
| `controller` | Élément qui agit comme un contrôle ou une gestion d'autres sous-parties, souvent avec des boutons ou des actions. | `<div part="controller"></div>` pour regrouper des actions, dans un composant contrôlé (ex: navigation). |
| `title` | Représente un titre ou un en-tête secondaire, généralement dans un `header` ou pour identifier un contenu. | `<h1 part="title"></h1>` dans des cartes, modales, boîtes d'alerte. |
| `subtitle` | Un sous-titre, souvent sous un titre pour fournir des détails complémentaires. | `<h2 part="subtitle"></h2>` dans des pages, cartes, sections d'une interface. |
| `description` | Un texte ou une explication détaillée d'un composant ou d'un élément. | `<p part="description"></p>` dans des info-bulles, boîtes de dialogue, cartes. |
| `image` | Une image utilisée dans le composant (illustration, avatar, icône complexe). | `<img part="image" />` dans des cartes, galeries, aperçus. |
| `avatar` | Partie spécifique pour un élément visuel représentant une personne ou un profil. | `<div part="avatar"></div>` dans des listes d'utilisateurs, profils ou cartes de contacts. |
| `menu` | Utilisé pour des options d'interaction, souvent dans un contexte de navigation ou d'actions. | `<ul part="menu"></ul>` dans des barres de navigation ou listes déroulantes. |
| `item` | Élément individuel dans une liste ou un menu. | `<li part="item"></li>` dans des listes, menus ou galeries. |
| `navigation` | Partie dédiée à la navigation entre sections ou pages. | `<nav part="navigation"></nav>` dans un panneau latéral ou une barre de navigation. |
| `breadcrumb` | Utilisé pour afficher une navigation hiérarchique, souvent sous forme de fil d'Ariane. | `<div part="breadcrumb"></div>` dans des barres de navigation. |
| `tab` | Élément d'un système d'onglets permettant de naviguer entre plusieurs vues ou sections. | `<button part="tab"></button>` dans des composants de type onglets (tabs). |
| `list` | Conteneur pour regrouper des éléments, souvent des `items`(articles, objets). | `<ul part="list"></ul>` pour des listes, menus contextuels. |
| `progress` | Élément indiquant une progression (barre de progression, étapes de processus). | `<div part="progress"></div>` pour une barre de progression ou indicateur. |
| `error` | Partie dédiée à la gestion des erreurs ou des messages d'avertissement. | `<div part="error"></div>` dans des formulaires, alertes ou validations. |
| `alert` | Partie visuelle dédiée à l'affichage d'une notification ou d'une alerte. | `<div part="alert"></div>` dans des boîtes de dialogue, notifications. |
| `toggle` | Élément interactif permettant d'activer ou désactiver un état (comme un interrupteur ou un bouton). | `<button part="toggle"></button>` dans des composants à bascule (switches, checkboxes). |