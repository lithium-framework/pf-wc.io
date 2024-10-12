# Panel

The **panel** component is a container that supports flexible content layouts. It can be used to house other components such as fields, forms, videos, buttons, and more. The panel should not be confused with the [drawer]( ./Drawer ) component, which allows you to surface information via a collapsable container.

## Examples

### Basic

<div class="sample-bloc full-width">

  <pf-panel>
    <span slot = "header" >Header content</span>
    <span>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitvehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehiculex accumsan ut. Morviverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinsem. Vivamus vulputate, risus eget commodeleifend, eros nibh porta quam, vitae lacinia leo libeat magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odimalesuada seposuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinlibero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quaullamcorper, in commomassa vulputate.
    </span>
    <span slot = "footer" >Footer content</span>
  </pf-panel>

</div>

<div class = "sample-table full-width">

  <table>
    <thead>
      <tr>
        <th>Code</th>
        <th>Property</th>
        <th>Result</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          ```html
            <pf-panel>
              <slot>Content</slot>
            </pf-panel>
          ```
        </td>
        <td>None</td>
        <td>
          <pf-panel>
            <slot>Content</slot>
          </pf-panel>
        </td>
      </tr>
    </tbody>
  </table>

</div>

### Header

<div class="sample-bloc full-width">

  <pf-panel header>
    <span slot = "header" >Header content</span>
    <span>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitvehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehiculex accumsan ut. Morviverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinsem. Vivamus vulputate, risus eget commodeleifend, eros nibh porta quam, vitae lacinia leo libeat magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odimalesuada seposuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinlibero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quaullamcorper, in commomassa vulputate.
    </span>
    <span slot = "footer" >Footer content</span>
  </pf-panel>

</div>

<div class = "sample-table full-width">

  <table>
    <thead>
      <tr>
        <th>Code</th>
        <th>Property</th>
        <th>Result</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          ```html
            <pf-panel header>
              <slot slot="header">Header</slot>
            </pf-panel>
          ```
        </td>
        <td>header</td>
        <td>
          <pf-panel header>
            <slot slot="header">Header</slot>
          </pf-panel>
        </td>
      </tr>
    </tbody>
  </table>

</div>

### Footer

<div class="sample-bloc full-width">

  <pf-panel footer>
    <span slot = "header" >Header content</span>
    <span>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitvehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehiculex accumsan ut. Morviverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinsem. Vivamus vulputate, risus eget commodeleifend, eros nibh porta quam, vitae lacinia leo libeat magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odimalesuada seposuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinlibero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quaullamcorper, in commomassa vulputate.
    </span>
    <span slot = "footer" >Footer content</span>
  </pf-panel>

</div>

<div class = "sample-table full-width">

  <table>
    <thead>
      <tr>
        <th>Code</th>
        <th>Property</th>
        <th>Result</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          ```html
            <pf-panel footer>
              <slot slot="header">Header</slot>
              <slot slot="footer">Footer</slot>
            </pf-panel>
          ```
        </td>
        <td>footer</td>
        <td>
          <pf-panel footer>
            <slot slot="header">Header</slot>
            <slot slot="footer">Footer</slot>
          </pf-panel>
        </td>
      </tr>
    </tbody>
  </table>

</div>

### No body

<div class="sample-bloc full-width">

  <pf-panel no-body>
    <span slot = "header" >Header content</span>
    <span>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitvehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehiculex accumsan ut. Morviverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinsem. Vivamus vulputate, risus eget commodeleifend, eros nibh porta quam, vitae lacinia leo libeat magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odimalesuada seposuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinlibero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quaullamcorper, in commomassa vulputate.
    </span>
    <span slot = "footer" >Footer content</span>
  </pf-panel>

</div>

<div class = "sample-table full-width">

  <table>
    <thead>
      <tr>
        <th>Code</th>
        <th>Property</th>
        <th>Result</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          ```html
            <pf-panel no-body>
              <slot slot="header">Header</slot>
              <div>
                <h4>Content</h4>
                <h4>Content</h4>
                <h4>Content</h4>
                <h4>Content</h4>
                <h4>Content</h4>
                <h4>Content</h4>
                <h4>Content</h4>
                <h4>Content</h4>
                <h4>Content</h4>
                <h4>Content</h4>
                <h4>Content</h4>
                <h4>Content</h4>
              </div>
              <slot slot="footer">Footer</slot>
            </pf-panel>
          ```
        </td>
        <td>no-body</td>
        <td>
          <pf-panel no-body>
            <slot slot="header">Header</slot>
            <div>
              <h4>Content</h4>
              <h4>Content</h4>
              <h4>Content</h4>
              <h4>Content</h4>
              <h4>Content</h4>
              <h4>Content</h4>
              <h4>Content</h4>
              <h4>Content</h4>
              <h4>Content</h4>
              <h4>Content</h4>
              <h4>Content</h4>
              <h4>Content</h4>
            </div>
            <slot slot="footer">Footer</slot>
          </pf-panel>
        </td>
      </tr>
    </tbody>
  </table>

</div>

### Raised

<div class="sample-bloc full-width">

  <pf-panel raised>
    <span slot = "header" >Header content</span>
    <span>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitvehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehiculex accumsan ut. Morviverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinsem. Vivamus vulputate, risus eget commodeleifend, eros nibh porta quam, vitae lacinia leo libeat magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odimalesuada seposuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinlibero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quaullamcorper, in commomassa vulputate.
    </span>
    <span slot = "footer" >Footer content</span>
  </pf-panel>

</div>

<div class = "sample-table full-width">

  <table>
    <thead>
      <tr>
        <th>Code</th>
        <th>Property</th>
        <th>Result</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          ```html
            <pf-panel raised>
            <slot slot="header">Header</slot>
            <div>
              <h4>Content</h4>
              <h4>Content</h4>
              <h4>Content</h4>
              <h4>Content</h4>
              <h4>Content</h4>
              <h4>Content</h4>
              <h4>Content</h4>
              <h4>Content</h4>
              <h4>Content</h4>
              <h4>Content</h4>
              <h4>Content</h4>
              <h4>Content</h4>
            </div>
            <slot slot="footer">Footer</slot>
          </pf-panel>
          ```
        </td>
        <td>raised</td>
        <td>
          <pf-panel raised>
            <slot slot="header">Header</slot>
            <div>
              <h4>Content</h4>
              <h4>Content</h4>
              <h4>Content</h4>
              <h4>Content</h4>
              <h4>Content</h4>
              <h4>Content</h4>
              <h4>Content</h4>
              <h4>Content</h4>
              <h4>Content</h4>
              <h4>Content</h4>
              <h4>Content</h4>
              <h4>Content</h4>
            </div>
            <slot slot="footer">Footer</slot>
          </pf-panel>
        </td>
      </tr>
    </tbody>
  </table>

</div>

### Bordered

<div class="sample-bloc full-width">

  <pf-panel bordered>
    <span slot = "header" >Header content</span>
    <span>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitvehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehiculex accumsan ut. Morviverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinsem. Vivamus vulputate, risus eget commodeleifend, eros nibh porta quam, vitae lacinia leo libeat magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odimalesuada seposuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinlibero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quaullamcorper, in commomassa vulputate.
    </span>
    <span slot = "footer" >Footer content</span>
  </pf-panel>

</div>

<div class = "sample-table full-width">

  <table>
    <thead>
      <tr>
        <th>Code</th>
        <th>Property</th>
        <th>Result</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          ```html
            <pf-panel bordered>
            <slot slot="header">Header</slot>
            <div>
              <h4>Content</h4>
              <h4>Content</h4>
              <h4>Content</h4>
              <h4>Content</h4>
              <h4>Content</h4>
              <h4>Content</h4>
              <h4>Content</h4>
              <h4>Content</h4>
              <h4>Content</h4>
              <h4>Content</h4>
              <h4>Content</h4>
              <h4>Content</h4>
            </div>
            <slot slot="footer">Footer</slot>
          </pf-panel>
          ```
        </td>
        <td>bordered</td>
        <td>
          <pf-panel bordered>
            <slot slot="header">Header</slot>
            <div>
              <h4>Content</h4>
              <h4>Content</h4>
              <h4>Content</h4>
              <h4>Content</h4>
              <h4>Content</h4>
              <h4>Content</h4>
              <h4>Content</h4>
              <h4>Content</h4>
              <h4>Content</h4>
              <h4>Content</h4>
              <h4>Content</h4>
              <h4>Content</h4>
            </div>
            <slot slot="footer">Footer</slot>
          </pf-panel>
        </td>
      </tr>
    </tbody>
  </table>

</div>

### Scrollable

<div class="sample-bloc full-width">

  <pf-panel scrollable>
    <span slot = "header" >Header content</span>
    <div style = {{display : "grid"}} >
      <span>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitvehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehiculex accumsan ut. Morviverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinsem. Vivamus vulputate, risus eget commodeleifend, eros nibh porta quam, vitae lacinia leo libeat magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odimalesuada seposuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinlibero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quaullamcorper, in commomassa vulputate.
      </span>
      <span>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitvehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehiculex accumsan ut. Morviverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinsem. Vivamus vulputate, risus eget commodeleifend, eros nibh porta quam, vitae lacinia leo libeat magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odimalesuada seposuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinlibero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quaullamcorper, in commomassa vulputate.
      </span>
    </div>
    <span slot = "footer" >Footer content</span>
  </pf-panel>

</div>

<div class = "sample-table full-width">

  <table>
    <thead>
      <tr>
        <th>Code</th>
        <th>Property</th>
        <th>Result</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          ```html
            <pf-panel scrollable>
            <slot slot="header">Header</slot>
            <div>
              <h4>Content</h4>
              <h4>Content</h4>
              <h4>Content</h4>
              <h4>Content</h4>
              <h4>Content</h4>
              <h4>Content</h4>
              <h4>Content</h4>
              <h4>Content</h4>
              <h4>Content</h4>
              <h4>Content</h4>
              <h4>Content</h4>
              <h4>Content</h4>
            </div>
            <slot slot="footer">Footer</slot>
          </pf-panel>
          ```
        </td>
        <td>scrollable</td>
        <td>
          <pf-panel scrollable>
            <slot slot="header">Header</slot>
            <div>
              <h4>Content</h4>
              <h4>Content</h4>
              <h4>Content</h4>
              <h4>Content</h4>
              <h4>Content</h4>
              <h4>Content</h4>
              <h4>Content</h4>
              <h4>Content</h4>
              <h4>Content</h4>
              <h4>Content</h4>
              <h4>Content</h4>
              <h4>Content</h4>
            </div>
            <slot slot="footer">Footer</slot>
          </pf-panel>
        </td>
      </tr>
    </tbody>
  </table>

</div>

### Scrollable header and footer

<div class="sample-bloc full-width">

  <pf-panel header footer scrollable>
    <span slot = "header" >Header content</span>
    <div style = {{display : "grid"}} >
      <span>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitvehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehiculex accumsan ut. Morviverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinsem. Vivamus vulputate, risus eget commodeleifend, eros nibh porta quam, vitae lacinia leo libeat magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odimalesuada seposuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinlibero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quaullamcorper, in commomassa vulputate.
      </span>
      <span>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitvehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehiculex accumsan ut. Morviverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinsem. Vivamus vulputate, risus eget commodeleifend, eros nibh porta quam, vitae lacinia leo libeat magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odimalesuada seposuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinlibero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quaullamcorper, in commomassa vulputate.
      </span>
    </div>
    <span slot = "footer" >Footer content</span>
  </pf-panel>

</div>

<div class = "sample-table full-width">

  <table>
    <thead>
      <tr>
        <th>Code</th>
        <th>Property</th>
        <th>Result</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          ```html
            <pf-panel header footer scrollable>
            <slot slot="header">Header</slot>
            <div>
              <h4>Content</h4>
              <h4>Content</h4>
              <h4>Content</h4>
              <h4>Content</h4>
              <h4>Content</h4>
              <h4>Content</h4>
              <h4>Content</h4>
              <h4>Content</h4>
              <h4>Content</h4>
              <h4>Content</h4>
              <h4>Content</h4>
              <h4>Content</h4>
            </div>
            <slot slot="footer">Footer</slot>
          </pf-panel>
          ```
        </td>
        <td>scrollable, header, footer</td>
        <td>
          <pf-panel header footer scrollable>
            <slot slot="header">Header</slot>
            <div>
              <h4>Content</h4>
              <h4>Content</h4>
              <h4>Content</h4>
              <h4>Content</h4>
              <h4>Content</h4>
              <h4>Content</h4>
              <h4>Content</h4>
              <h4>Content</h4>
              <h4>Content</h4>
              <h4>Content</h4>
              <h4>Content</h4>
              <h4>Content</h4>
            </div>
            <slot slot="footer">Footer</slot>
          </pf-panel>
        </td>
      </tr>
    </tbody>
  </table>

</div>

 