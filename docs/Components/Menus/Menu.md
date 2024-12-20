# Menu

A **menu** is a list of options or actions that users can choose from. It can be used in a variety of contexts whenever the user needs to choose between multiple values, options, or actions. A menu is most often paired with a [menu toggle]( ./Toggle ) as its trigger, but can also be used inline or can be attached to other interactable elements to toggle it open and close.

## Integration

```html live
  <pf-menu>
    <pf-menu-content>
      <pf-menu-list>
        <pf-menu-item>Action</pf-menu-item>
        <pf-menu-item link>Link</pf-menu-item>
        <pf-menu-item disabled>Disabled Action</pf-menu-item>
        <pf-menu-item link disabled>Disabled Link</pf-menu-item>
        <pf-menu-item area-disabled>Aria-Disabled Action</pf-menu-item>
        <pf-menu-item link area-disabled>Aria-Disabled Link</pf-menu-item>
      </pf-menu-list>
    </pf-menu-content>
  </pf-menu>
```

### Basic menus

<div class = "sample-bloc full-width" >

  <pf-menu>
    <pf-menu-content>
      <pf-menu-list>
        <pf-menu-item>Action</pf-menu-item>
        <pf-menu-item link>Link</pf-menu-item>
        <pf-menu-item disabled>Disabled Action</pf-menu-item>
        <pf-menu-item link disabled>Disabled Link</pf-menu-item>
        <pf-menu-item area-disabled>Aria-Disabled Action</pf-menu-item>
        <pf-menu-item link area-disabled>Aria-Disabled Link</pf-menu-item>
      </pf-menu-list>
    </pf-menu-content>
  </pf-menu>

</div>

<div class = "sample-table" >

  <table>
    <thead>
      <tr>
        <th>Code</th>
        <th>Property</th>
        <th>Render</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          ```html
          <pf-menu-item>Action</pf-menu-item>
          ```
          ```html
          <pf-menu-item disabled>Action</pf-menu-item>
          ```
          ```html
          <pf-menu-item area-disabled>Action</pf-menu-item>
          ```
        </td>
        <td></td>
        <td>
          <div class = "sample-bloc column no-border" >
            <pf-menu>
              <pf-menu-content>
                <pf-menu-list>
                  <pf-menu-item>Action</pf-menu-item>
                </pf-menu-list>
              </pf-menu-content>
            </pf-menu>
            <pf-menu>
              <pf-menu-content>
                <pf-menu-list>
                  <pf-menu-item disabled>Action</pf-menu-item>
                </pf-menu-list>
              </pf-menu-content>
            </pf-menu>
            <pf-menu>
              <pf-menu-content>
                <pf-menu-list>
                  <pf-menu-item area-disabled>Action</pf-menu-item>
                </pf-menu-list>
              </pf-menu-content>
            </pf-menu>
          </div>
        </td>
      </tr>
      <tr>
        <td>
          ```html
          <pf-menu-item link>Link</pf-menu-item>
          ```
          ```html
          <pf-menu-item link disabled>Link</pf-menu-item>
          ```
          ```html
          <pf-menu-item link area-disabled>Link</pf-menu-item>
          ```
        </td>
        <td></td>
        <td>
          <div class = "sample-bloc column no-border" >
            <pf-menu>
              <pf-menu-content>
                <pf-menu-list>
                  <pf-menu-item link>Link</pf-menu-item>
                </pf-menu-list>
              </pf-menu-content>
            </pf-menu>
            <pf-menu>
              <pf-menu-content>
                <pf-menu-list>
                  <pf-menu-item link disabled>Link</pf-menu-item>
                </pf-menu-list>
              </pf-menu-content>
            </pf-menu>
            <pf-menu>
              <pf-menu-content>
                <pf-menu-list>
                  <pf-menu-item link area-disabled>Link</pf-menu-item>
                </pf-menu-list>
              </pf-menu-content>
            </pf-menu>
          </div>
        </td>
      </tr>
    </tbody>
  </table>

</div>

### Danger menu item

<div class = "sample-bloc full-width" >

  <pf-menu>
    <pf-menu-content>
      <pf-menu-list>
        <pf-menu-item>Action 1</pf-menu-item>
        <pf-menu-item>Link 2</pf-menu-item>
        <pf-divider></pf-divider>
        <pf-menu-item danger>Danger</pf-menu-item>
      </pf-menu-list>
    </pf-menu-content>
  </pf-menu>

</div>

### With icons

<div class = "sample-bloc full-width" >

  <pf-menu>
    <pf-menu-content>
      <pf-menu-list>
        <pf-menu-item>
          <pf-icons-code-branch slot = "icon" ></pf-icons-code-branch>
          <span>From Git</span>
        </pf-menu-item>
        <pf-menu-item>
          <pf-icons-layer-group slot = "icon" ></pf-icons-layer-group>
          <span>Container image</span>
        </pf-menu-item>
        <pf-menu-item>
          <pf-icons-cube slot = "icon" ></pf-icons-cube>
          <span>From DockerFile</span>
        </pf-menu-item>
      </pf-menu-list>
    </pf-menu-content>
  </pf-menu>

</div>

### With checkbox

<div class = "sample-bloc full-width" >

  <pf-menu>
    <pf-menu-content>
      <pf-menu-list>
        <pf-menu-item>
          <pf-checkbox>Checkbox 1</pf-checkbox>
        </pf-menu-item>
        <pf-menu-item>
          <pf-checkbox>Checkbox 2</pf-checkbox>
        </pf-menu-item>
        <pf-menu-item>
          <pf-checkbox>Checkbox 3</pf-checkbox>
        </pf-menu-item>
      </pf-menu-list>
    </pf-menu-content>
  </pf-menu>

</div>

### Scrollable

<div class = "sample-bloc full-width" >

  <pf-menu scrollable>
    <pf-menu-content>
      <pf-menu-list>
        <pf-menu-item>Action 1</pf-menu-item>
        <pf-menu-item>Action 2</pf-menu-item>
        <pf-menu-item>Action 3</pf-menu-item>
        <pf-menu-item>Action 4</pf-menu-item>
        <pf-menu-item>Action 5</pf-menu-item>
        <pf-menu-item>Action 6</pf-menu-item>
        <pf-menu-item>Action 7</pf-menu-item>
        <pf-menu-item>Action 8</pf-menu-item>
        <pf-menu-item>Action 9</pf-menu-item>
      </pf-menu-list>
    </pf-menu-content>
  </pf-menu>

</div>

### With descriptions

### Item checkbox

### Menu footer

### Separated items

### Titled groups of items

### With favorites

### Filtering with search input

### Option single select menu

### Option multi select menu

### Scrollable menus

### Scrollable menu with custom height

### With view more

### With drilldown

### With drilldown - submenu functions

### With drilldown breadcrumbs

### With drilldown and inline filter

