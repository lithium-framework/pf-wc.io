# Button

Le composant `<pf-button>` est un **WebComponent** basé sur le framework **Lithium** qui encapsule un bouton PatternFly avec plusieurs options de personnalisation, telles que la variante, le type d'état et l'attribut `disabled`. Il permet d'utiliser un bouton PatternFly sans nécessiter React, tout en restant réactif et compatible avec les fonctionnalités natives du navigateur.

## Utilisation

Une fois déclaré, vous pouvez utiliser le composant `<pf-button>` dans votre application HTML comme suit :

```html
<pf-button text="Envoyer" variant="primary" kind="warning" disabled="false"></pf-button>
```

## Propriétés du Composant

Le composant expose plusieurs attributs HTML qui peuvent être modifiés pour personnaliser l'apparence et le comportement du bouton.

| Propriété   | Type                                      | Valeur par défaut | Description                                                                                                                                   |
|-------------|-------------------------------------------|-------------------|-----------------------------------------------------------------------------------------------------------------------------------------------|
| `text`      | `string`                                  | `"coucou"`        | Texte affiché à l'intérieur du bouton.                                                                                                        |
| `variant`   | `"primary"`, `"secondary"`, `"tertiary"`  | `"primary"`       | La variante du bouton, qui correspond aux variantes de boutons de PatternFly.                                                                 |
| `kind`      | `"warning"`, `"danger"`                   | `undefined`       | Type d'état du bouton. Utilisé pour appliquer des styles supplémentaires tels que l'avertissement (`warning`) ou le danger (`danger`).        |
| `disabled`  | `"true"`, `"false"`                       | `"false"`         | Définit si le bouton est désactivé ou non. Lorsque la valeur est `"true"`, la classe `pf-m-aria-disabled` est appliquée pour désactiver le bouton. |

## Attributs

- text : Le texte visible dans le bouton. Par exemple, dans l’exemple ci-dessus, le bouton affichera “Envoyer”.
- variant : Vous pouvez choisir parmi les variantes primary, secondary, ou tertiary pour changer l’apparence du bouton.
- kind : Ajoutez un style d’état supplémentaire comme warning ou danger.
- disabled : Lorsque défini sur "true", le bouton devient désactivé et inaccessible aux interactions utilisateur.

## Exemple d’intégration

Voici un exemple d’utilisation avec différentes configurations d’attributs :

```html
<!-- Bouton primaire par défaut -->
<pf-button text="Envoyer"></pf-button>

<!-- Bouton secondaire avec un état danger -->
<pf-button text="Supprimer" variant="secondary" kind="danger"></pf-button>

<!-- Bouton tertiaire désactivé -->
<pf-button text="En attente" variant="tertiary" disabled="true"></pf-button>
```

## Comportement

- Le composant applique dynamiquement les classes CSS PatternFly en fonction des valeurs des attributs.
- Si l’attribut disabled est défini sur "true", le bouton sera rendu avec l’apparence désactivée (aria-disabled) et ne sera pas interactif.
- La valeur de variant détermine la couleur et le style du bouton (primary, secondary, tertiary).

## Extension et Personnalisation

Vous pouvez facilement étendre ce composant en ajoutant de nouvelles propriétés ou en modifiant les classes CSS appliquées. Vous pouvez également ajouter des écouteurs d’événements pour gérer les interactions utilisateur au sein du bouton.

## Variant examples

<div class = "sample-table" >

  <table>
    <thead>
      <tr>
        <th>Code</th>
        <th>Property</th>
        <th>Render</th>
      </tr>
    </thead>
    <thead>
      <tr>
        <th></th>
        <th>Variant</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          ```html
          <pf-button>Primary</pf-button>
          ```
        </td>
        <td>Primitive</td>
        <td><pf-button>Primary</pf-button></td>
      </tr>
      <tr>
        <td>
          ```html
          <pf-button variant = "secondary" > 
            Secondary
          </pf-button>
          ```
        </td>
        <td>Secondary</td>
        <td><pf-button variant = "secondary" >Secondary</pf-button></td>
      </tr>
      <tr>
        <td>
          ```html
          <pf-button variant = "tertiary" > 
            Tertiary
          </pf-button>
          ```
        </td>
        <td>Tertiary</td>
        <td><pf-button variant = "tertiary" >Tertiary</pf-button></td>
      </tr>
    </tbody>
    <thead>
      <tr>
        <th></th>
        <th>Diabed</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          ```html
          <pf-button disabled> 
            Disabled
          </pf-button>
          ```
        </td>
        <td>Disabled</td>
        <td><pf-button disabled>Disabled</pf-button></td>
      </tr>
    </tbody>
    <thead>
      <tr>
        <th></th>
        <th>Kind</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          ```html
          <pf-button kind = "warning"> 
            Warning
          </pf-button>
          ```
        </td>
        <td>Warning</td>
        <td><pf-button kind = "warning">Warning</pf-button></td>
      </tr>
      <tr>
        <td>
          ```html
          <pf-button kind = "danger"> 
            Danger
          </pf-button>
          ```
        </td>
        <td>Warning</td>
        <td><pf-button kind = "danger">Danger</pf-button></td>
      </tr>
    </tbody>
  </table>

</div>

<div class = "sample-bloc">

  <pf-action-list>
    <pf-action-list-item>
      <pf-button>Primary</pf-button>
      <pf-button variant = "secondary" >Secondary</pf-button>
      <pf-button variant = "tertiary" >Tertiary</pf-button>
    </pf-action-list-item>
    <pf-action-list-item>
      <pf-button disabled>Disabled</pf-button>
    </pf-action-list-item>
    <pf-action-list-item>
      <pf-button kind = "warning">Warning</pf-button>
      <pf-button kind = "warning" variant = "secondary">Warning Secondary</pf-button>
      <pf-button kind = "warning" variant = "tertiary">Warning Tertiary</pf-button>
    </pf-action-list-item>
    <pf-action-list-item>
      <pf-button kind = "danger">Danger</pf-button>
      <pf-button kind = "danger" variant = "secondary">Danger Secondary</pf-button>
      <pf-button kind = "danger" variant = "tertiary">Danger Tertiary</pf-button>
    </pf-action-list-item>
  </pf-action-list>

</div>