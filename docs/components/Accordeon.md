# Accordeon

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