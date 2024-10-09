# Dropdown

A **dropdown** presents a menu of actions or links in a constrained space that will trigger a process or navigate to a new location. See [select component guidelines]( https://www.patternfly.org/components/menus/select/design-guidelines ) for more information about making one or more selections from a list of items in a value list.

## Exemples

### Basic dropdowns

<div class = "sample-bloc" >

  <pf-dropdown>
    <span slot = "label" >Coucou</span>
    <pf-dropdown-menu-item>Action</pf-dropdown-menu-item>
    <pf-dropdown-menu-item link>Link</pf-dropdown-menu-item>
    <pf-divider></pf-divider>
    <pf-dropdown-menu-item disabled>Action</pf-dropdown-menu-item>
    <pf-dropdown-menu-item link disabled>Link</pf-dropdown-menu-item>
    <pf-divider></pf-divider>
    <pf-dropdown-menu-item area-disabled>Action</pf-dropdown-menu-item>
    <pf-dropdown-menu-item link area-disabled>Link</pf-dropdown-menu-item>
  </pf-dropdown>

</div>

### With kebab toggle

<div class = "sample-bloc" >

  <pf-dropdown plain>
    <pf-dropdown-menu-item>Action</pf-dropdown-menu-item>
    <pf-dropdown-menu-item link>Link</pf-dropdown-menu-item>
    <pf-divider></pf-divider>
    <pf-dropdown-menu-item disabled>Action</pf-dropdown-menu-item>
    <pf-dropdown-menu-item link disabled>Link</pf-dropdown-menu-item>
    <pf-divider></pf-divider>
    <pf-dropdown-menu-item area-disabled>Action</pf-dropdown-menu-item>
    <pf-dropdown-menu-item link area-disabled>Link</pf-dropdown-menu-item>
  </pf-dropdown>

</div>

### With groups of items

### With item descriptions