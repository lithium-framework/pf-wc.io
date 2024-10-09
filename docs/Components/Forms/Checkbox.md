# Checkbox

A **checkbox** is used to select a single item or multiple items, typically to choose elements to perform an action or to reflect a binary setting.

## Examples

### Basic

<div class="sample-bloc">

  <pf-checkbox>Basic Checkbox</pf-checkbox>

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
            <pf-checkbox>Basic Checkbox</pf-checkbox>
          ```
        </td>
        <td>None</td>
        <td>
          <pf-checkbox>Basic Checkbox</pf-checkbox>
        </td>
      </tr>
    </tbody>
  </table>

</div>

### Required

<div class="sample-bloc">

  <pf-checkbox required>Required Checkbox</pf-checkbox>

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
            <pf-checkbox required>
            Required Checkbox
            </pf-checkbox>
          ```
        </td>
        <td>Required</td>
        <td>
          <pf-checkbox required>Required checkbox</pf-checkbox>
        </td>
      </tr>
    </tbody>
  </table>

</div>

### Checked

<div class="sample-bloc">

  <pf-checkbox checked>Checked Checkbox</pf-checkbox>

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
            <pf-checkbox checked>
            Checked Checkbox
            </pf-checkbox>
          ```
        </td>
        <td>checked</td>
        <td>
          <pf-checkbox checked>Checked checkbox</pf-checkbox>
        </td>
      </tr>
    </tbody>
  </table>

</div>

### Reversed

<div class="sample-bloc">

  <pf-checkbox reverse>Reversed Checkbox</pf-checkbox>

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
            <pf-checkbox reverse>
            Reversed Checkbox
            </pf-checkbox>
          ```
        </td>
        <td>reverse</td>
        <td>
          <pf-checkbox reverse>Reversed Checkbox</pf-checkbox>
        </td>
      </tr>
    </tbody>
  </table>

</div>

### Disabled

<div class="sample-bloc">

  <pf-checkbox disabled>Disabled Checkbox</pf-checkbox>

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
            <pf-checkbox disabled>
            Disabled Checkbox
            </pf-checkbox>
          ```
        </td>
        <td>reverse</td>
        <td>
          <pf-checkbox disabled>Disabled Checkbox</pf-checkbox>
        </td>
      </tr>
    </tbody>
  </table>

</div>

### With description

<div class="sample-bloc">

  <pf-checkbox description>Checkbox with description</pf-checkbox>

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
            <pf-checkbox description>
            Checkbox with description
            </pf-checkbox>
          ```
        </td>
        <td>description</td>
        <td>
          <pf-checkbox description>
            Checkbox with description
            <slot name="description">
              <p>Little description here</p>
            </slot>
          </pf-checkbox>
        </td>
      </tr>
    </tbody>
  </table>

</div>

### With body

<div class="sample-bloc">

  <pf-checkbox body>Checkbox with body</pf-checkbox>

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
            <pf-checkbox body>
            Checkbox with body
            </pf-checkbox>
          ```
        </td>
        <td>body</td>
        <td>
          <pf-checkbox description>
            Checkbox with body
            <slot name="body">
              <p>Little body<pf-button variant = "primary">here</pf-button></p>
            </slot>
          </pf-checkbox>
        </td>
      </tr>
    </tbody>
  </table>

</div>

### With description and body

<div class="sample-bloc">

  <pf-checkbox body>Checkbox with body & description</pf-checkbox>

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
            <pf-checkbox description body>
            Checkbox with body & description
            </pf-checkbox>
          ```
        </td>
        <td>body, description</td>
        <td>
          <pf-checkbox description>
            Checkbox with body & description
            <slot name="description">
              <p>description</p>
            </slot>
            <slot name="body">
              <p>Little body<pf-button variant = "primary">here</pf-button></p>
            </slot>
          </pf-checkbox>
        </td>
      </tr>
    </tbody>
  </table>

</div>