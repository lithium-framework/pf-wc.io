# Masthead

## Examples

### Basic

<div class="sample-bloc full-width">

  <pf-masthead>
    <slot slot="toggle-icon">
      <pf-icons-cog></pf-icons-cog>
    </slot>
    <slot slot="brand">Branding</slot>
  </pf-masthead>

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
            <pf-masthead>
              <slot slot="toggle-icon">
                <pf-icons-cog></pf-icons-cog>
              </slot>
              <slot slot="brand">Trolol</slot>
            </pf-masthead>
          ```
        </td>
        <td>None</td>
        <td>
          <pf-masthead>
            <slot slot="toggle-icon">
              <pf-icons-cog></pf-icons-cog>
            </slot>
            <slot slot="brand">Trolol</slot>
          </pf-masthead>
        </td>
      </tr>
    </tbody>
  </table>

</div>

### Basic with mixed-content

<div class="sample-bloc full-width">

  <pf-masthead mixed-content>
    <slot slot="toggle-icon">
      <pf-icons-add-circle-o></pf-icons-add-circle-o>
    </slot>
    <slot slot="brand">Branding</slot>
    <slot>
      <pf-button primary>Button 1</pf-button>
      <pf-button primary>Button 2</pf-button>
      <pf-button primary>Button 3</pf-button>
      <pf-button primary>Button 4</pf-button>
    </slot>
  </pf-masthead>

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
            <pf-masthead mixed-content>
              <slot slot="toggle-icon">
                <pf-icons-add-circle-o></pf-icons-add-circle-o>
              </slot>
              <slot slot="brand">Branding</slot>
              <slot>
                <pf-button primary>Button 1</pf-button>
                <pf-button primary>Button 2</pf-button>
                <pf-button primary>Button 3</pf-button>
                <pf-button primary>Button 4</pf-button>
              </slot>
            </pf-masthead>
          ```
        </td>
        <td>mixed-content</td>
        <td>
          <pf-masthead mixed-content>
              <slot slot="toggle-icon">
                <pf-icons-add-circle-o></pf-icons-add-circle-o>
              </slot>
              <slot slot="brand">Branding</slot>
              <slot>
                <pf-button primary>Button 1</pf-button>
                <pf-button primary>Button 2</pf-button>
                <pf-button primary>Button 3</pf-button>
                <pf-button primary>Button 4</pf-button>
              </slot>
            </pf-masthead>
        </td>
      </tr>
    </tbody>
  </table>

</div>

### Display inline

<div class="sample-bloc full-width">

  <pf-masthead display-inline>
    <slot slot="toggle-icon">
      <pf-icons-border-style></pf-icons-border-style>
    </slot>
    <slot slot="brand">Branding</slot>
    <slot>
      <pf-button primary>Button 1</pf-button>
      <pf-button primary>Button 2</pf-button>
      <pf-button primary>Button 3</pf-button>
      <pf-button primary>Button 4</pf-button>
    </slot>
  </pf-masthead>

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
            <pf-masthead display-inline>
              <slot slot="toggle-icon">
                <pf-icons-border-style></pf-icons-border-style>
              </slot>
              <slot slot="brand">Branding</slot>
              <slot>
                <pf-button primary>Button 1</pf-button>
                <pf-button primary>Button 2</pf-button>
                <pf-button primary>Button 3</pf-button>
                <pf-button primary>Button 4</pf-button>
              </slot>
            </pf-masthead>
          ```
        </td>
        <td>display-inline</td>
        <td>
          <pf-masthead display-inline>
              <slot slot="toggle-icon">
                <pf-icons-border-style></pf-icons-border-style>
              </slot>
              <slot slot="brand">Branding</slot>
              <slot>
                <pf-button primary>Button 1</pf-button>
                <pf-button primary>Button 2</pf-button>
                <pf-button primary>Button 3</pf-button>
                <pf-button primary>Button 4</pf-button>
              </slot>
            </pf-masthead>
        </td>
      </tr>
    </tbody>
  </table>

</div>