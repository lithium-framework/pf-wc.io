# Panel

## Examples

### Basic

<div class="sample-bloc full-wdth">

  <pf-panel>
    <slot>Content</slot>
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
    <slot slot="header">Header</slot>
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
    <slot slot="header">Header</slot>
    <slot slot="footer">Footer</slot>
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

 