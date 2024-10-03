# Drawer

## Integration

```html live

```

## Exemples

<div class = "sample-bloc">

  <pf-action-list>
    <pf-button onmousedown = "return () => {
      let drawer = document.getElementById('drawer');
      if( drawer.isExpanded )drawer.removeAttribute('expanded');
      else drawer.setAttribute('expanded' , 'true');}
    " >
    </pf-button>
  </pf-action-list>
  <div>
    <pf-drawer id = "drawer" expanded></pf-drawer>
  </div>

</div>