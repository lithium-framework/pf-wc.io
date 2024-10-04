# Masthead

## Examples

### Basic

<div class="sample-bloc full-width">

  <pf-masthead></pf-masthead>

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
            <pf-masthead></pf-masthead>
          ```
        </td>
        <td>None</td>
        <td>
          <pf-masthead></pf-masthead>
        </td>
      </tr>
    </tbody>
  </table>

</div>

### Basic with mixed-content

<div class="sample-bloc full-width">

  <pf-accordeon>
    <pf-accordeon-item>
      <span slot = "label" >Item 1</span>
      <div>
        <h3>Contenu primaire</h3>
        <p>Lorem ipsum</p>
      </div>
    </pf-accordeon-item>
  </pf-accordeon>

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
            <pf-accordeon-item>
              <span slot = "label" >Item 1</span>
              <div>
                <h3>Contenu primaire</h3>
                <p>Lorem ipsum</p>
              </div>
            </pf-accordeon-item>
          ```
        </td>
        <td>description</td>
        <td>
          <pf-masthead mixed-content>
            <div name='content'>
              <h3>Content</h3>
              <pf-button primary>Button 1</pf-button>
            </div>
          </pf-masthead>
        </td>
      </tr>
    </tbody>
  </table>

</div>