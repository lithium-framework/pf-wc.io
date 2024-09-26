# Radio

## Examples

### Basic

<div class="sample-bloc">

  <pf-radiobox>Basic radio</pf-radiobox>

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
            <pf-radiobox>
              Basic radio
            </pf-radiobox>
          ```
        </td>
        <td>None</td>
        <td>
          <pf-radiobox>Basic radio</pf-radiobox>
        </td>
      </tr>
    </tbody>
  </table>

</div>

### Checked

<div class="sample-bloc">

  <pf-radiobox checked>Checked radiobox</pf-radiobox>

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
            <pf-radiobox checked>
              Checked radiobox
            </pf-radiobox>
          ```
        </td>
        <td>checked</td>
        <td>
          <pf-radiobox checked>Checked radiobox</pf-radiobox>
        </td>
      </tr>
    </tbody>
  </table>

</div>

### Reversed

<div class="sample-bloc">

  <pf-radiobox reverse>Reversed radiobox</pf-radiobox>

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
            <pf-radiobox reverse>
              Reversed radiobox
            </pf-radiobox>
          ```
        </td>
        <td>reverse</td>
        <td>
          <pf-radiobox reverse>Reversed radiobox</pf-radiobox>
        </td>
      </tr>
    </tbody>
  </table>

</div>

### Disabled

<div class="sample-bloc">

  <pf-radiobox disabled>Disabled radiobox</pf-radiobox>

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
            <pf-radiobox disabled>
              Disabled radiobox
            </pf-radiobox>
          ```
        </td>
        <td>reverse</td>
        <td>
          <pf-radiobox disabled>Disabled radiobox</pf-radiobox>
        </td>
      </tr>
    </tbody>
  </table>

</div>

### With description

<div class="sample-bloc">

  <pf-radiobox description>Checkbox with description</pf-radiobox>

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
            <pf-radiobox description>
            Checkbox with description
            </pf-radiobox>
          ```
        </td>
        <td>description</td>
        <td>
          <pf-radiobox description>
            Checkbox with description
            <slot name="description">
              <p>Little description here</p>
            </slot>
          </pf-radiobox>
        </td>
      </tr>
    </tbody>
  </table>

</div>

### With body

<div class="sample-bloc">

  <pf-radiobox body>Checkbox with body</pf-radiobox>

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
            <pf-radiobox body>
            Checkbox with body
            </pf-radiobox>
          ```
        </td>
        <td>body</td>
        <td>
          <pf-radiobox description>
            Checkbox with body
            <slot name="body">
              <p>Little body<pf-button variant = "primary">here</pf-button></p>
            </slot>
          </pf-radiobox>
        </td>
      </tr>
    </tbody>
  </table>

</div>

### With description and body

<div class="sample-bloc">

  <pf-radiobox body>Checkbox with body & description</pf-radiobox>

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
            <pf-radiobox description body>
            Checkbox with body & description
            </pf-radiobox>
          ```
        </td>
        <td>body, description</td>
        <td>
          <pf-radiobox description>
            Checkbox with body & description
            <slot name="description">
              <p>description</p>
            </slot>
            <slot name="body">
              <p>Little body<pf-button variant = "primary">here</pf-button></p>
            </slot>
          </pf-radiobox>
        </td>
      </tr>
    </tbody>
  </table>

</div>