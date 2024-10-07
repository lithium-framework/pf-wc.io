# Menu-toggle

The **menu toggle** component pairs with the [menu]( ./Menu ) OR the [panel]( ../Panel ) component to create more customizable dropdown and select implementations. Using a menu toggle with a menu enables you to create custom component configurations not supported by the standard dropdown or select components.

## Exemples

### Collapsed toggle

<div class = "sample-bloc">

  <pf-menu-toggle> 
    <span> Content </span> 
  </pf-menu-toggle>

</div>

### Expanded toggle

<div class = "sample-bloc">

  <pf-menu-toggle expanded> 
    <span> Content </span> 
  </pf-menu-toggle>

</div>

### Disabled toggle

<div class = "sample-bloc">

  <pf-menu-toggle disabled> 
    <span> Content </span> 
  </pf-menu-toggle>

</div>

### With a badge

<div class = "sample-bloc">

  <pf-menu-toggle badge>
    <span> Content </span>
    <span slot = "badge" >4 Selected</span>
  </pf-menu-toggle>

</div>

### Primary

<div class = "sample-bloc row">

  <pf-menu-toggle primary icon>
    <span> Content </span>
  </pf-menu-toggle>

  <pf-menu-toggle primary icon>
    <pf-icons-cog slot = "icon" ></pf-icons-cog>
    <span> Content </span>
  </pf-menu-toggle>

  <pf-menu-toggle primary icon expanded>
    <pf-icons-cog slot = "icon" ></pf-icons-cog>
    <span> Content </span>
  </pf-menu-toggle>

  <pf-menu-toggle primary icon disabled>
    <pf-icons-cog slot = "icon" ></pf-icons-cog>
    <span> Content </span>
  </pf-menu-toggle>

</div>

### Secondary

<div class = "sample-bloc row">

  <pf-menu-toggle secondary icon>
    <span> Content </span>
  </pf-menu-toggle>

  <pf-menu-toggle secondary icon>
    <pf-icons-cog slot = "icon" ></pf-icons-cog>
    <span> Content </span>
  </pf-menu-toggle>

  <pf-menu-toggle secondary icon expanded>
    <pf-icons-cog slot = "icon" ></pf-icons-cog>
    <span> Content </span>
  </pf-menu-toggle>

  <pf-menu-toggle secondary icon disabled>
    <pf-icons-cog slot = "icon" ></pf-icons-cog>
    <span> Content </span>
  </pf-menu-toggle>

</div>

### Plain

<div class = "sample-bloc row">

  <pf-menu-toggle plain icon>
    <pf-icons-ellipsis-v slot = "icon"></pf-icons-ellipsis-v>
  </pf-menu-toggle>

  <pf-menu-toggle plain icon expanded>
    <pf-icons-ellipsis-v slot = "icon"></pf-icons-ellipsis-v>
  </pf-menu-toggle>

  <pf-menu-toggle plain icon disabled>
    <pf-icons-ellipsis-v slot = "icon"></pf-icons-ellipsis-v>
  </pf-menu-toggle>

</div>

### Plain with text

<div class = "sample-bloc row">

  <pf-menu-toggle plain disabled>
    <span>Diasabled</span>
  </pf-menu-toggle>

  <pf-menu-toggle plain>
    <span>Custom Text</span>
  </pf-menu-toggle>

</div>

### Split button (checkbox)

<div class = "sample-bloc row">

  <pf-menu-toggle disabled>
    <pf-checkbox></pf-checkbox>
  </pf-menu-toggle>

  <pf-menu-toggle>
    <pf-checkbox></pf-checkbox>
  </pf-menu-toggle>

  <pf-menu-toggle expanded>
    <pf-checkbox></pf-checkbox>
  </pf-menu-toggle>

</div>

### Split button (checkbox with label)

<div class = "sample-bloc row">

  <pf-menu-toggle disabled>
    <pf-checkbox>10 Selected</pf-checkbox>
  </pf-menu-toggle>

  <pf-menu-toggle>
    <pf-checkbox>10 Selected</pf-checkbox>
  </pf-menu-toggle>

  <pf-menu-toggle expanded>
    <pf-checkbox>10 Selected</pf-checkbox>
  </pf-menu-toggle>

</div>

### Split button (checkbox with toggle button text)

### Split button, primary

### Split button, secondary

### Split button (action)

### Split button, primary (action)

### Split button, secondary (action)

### With icon/image and text

### With avatar and text

### Full height

### Typeahead

### Status <pf-badge readed>beta</pf-badge>