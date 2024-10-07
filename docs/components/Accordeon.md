# Accordeon

An **accordion** is an interactive container that expands and collapses to hide or reveal nested content. It takes advantage of progressive disclosure to help reduce page scrolling, by allowing users to choose whether they want to show or hide more detailed information as needed.

```html live

<pf-accordeon>
  <pf-accordeon-item>
    <span slot = "label" >Item 1</span>
    <div>
      <h3>Contenu primaire</h3>
      <p>Lorem ipsum</p>
    </div>
  </pf-accordeon-item>
  <pf-accordeon-item>
    <span slot = "label" >Item 2</span>
    <div>
      <h3>Contenu primaire</h3>
      <p>Lorem ipsum</p>
    </div>
  </pf-accordeon-item>
</pf-accordeon>

```

## Examples

### Fluid

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
            <pf-accordeon>
              <pf-accordeon-item>
                <span slot = "label" >Item 1</span>
                <div>
                  <h3>Contenu primaire</h3>
                  <p>Lorem ipsum</p>
                </div>
              </pf-accordeon-item>
            </pf-accordeon>
        </td>
      </tr>
    </tbody>
  </table>

</div>