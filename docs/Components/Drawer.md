# Drawer

A **drawer** is a sliding panel that enters from the right edge of the viewport. It can be configured to either overlay content on a page or create a sidebar by pushing that content to the left.

## Integration

```html live
  <div>
    <pf-drawer id = "drawer#basic">
      <pf-action-list>
        <pf-button onmousedown = "return () => {
          let drawer = document.getElementById('drawer#basic');
          if( drawer.isExpanded )drawer.removeAttribute('expanded');
          else drawer.setAttribute('expanded' , 'true');}
        " >Toggle drawer</pf-button>
      </pf-action-list>
      <span>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehiculex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodeleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada seposuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quaullamcorper, in commodo massa vulputate.
      </span>
      <div slot = "panel" >
        <pf-action-list>
          <pf-button onmousedown = "return () => {
            let drawer = document.getElementById('drawer#basic');
            if( drawer.isExpanded )drawer.removeAttribute('expanded');
            else drawer.setAttribute('expanded' , 'true');}
          " >Toggle drawer</pf-button>
        </pf-action-list>
        drawer-panel
      </div>
    </pf-drawer>
  </div>
```

## Exemples

### Panel at end

<div class = "sample-bloc">

  <pf-drawer id = "drawer#panelRight" panel-right >
    <pf-button onmousedown = "return () => {
      let drawer = document.getElementById('drawer#panelRight');
      if( drawer.isExpanded )drawer.removeAttribute('expanded');
      else drawer.setAttribute('expanded' , 'true');}
    " >Toggle drawer</pf-button>
    <span>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vecommodo urna. Morbi mattis rutrum ante, id vehiculex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eropurus aliquet erat, nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodeleifend, eros nibporta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit ametAliquam ex odio, malesuada seposuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar liberauctor pretium. Aliquam erat volutpat. Duis euismod justo in quaullamcorper, in commodo massa vulputate.
    </span>
    <div slot = "panel" >
      <pf-action-list>
        <pf-button onmousedown = "return () => {
          let drawer = document.getElementById('drawer#panelRight');
          if( drawer.isExpanded )drawer.removeAttribute('expanded');
          else drawer.setAttribute('expanded' , 'true');}
        " >Toggle drawer</pf-button>
      </pf-action-list>
      drawer-panel
    </div>
  </pf-drawer>

</div>

### Panel at start

<div class = "sample-bloc">

  <pf-drawer id = "drawer#panelLeft" panel-left >
    <pf-button onmousedown = "return () => {
      let drawer = document.getElementById('drawer#panelLeft');
      if( drawer.isExpanded )drawer.removeAttribute('expanded');
      else drawer.setAttribute('expanded' , 'true');}
    " >Toggle drawer</pf-button>
    <span>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vecommodo urna. Morbi mattis rutrum ante, id vehiculex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eropurus aliquet erat, nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodeleifend, eros nibporta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit ametAliquam ex odio, malesuada seposuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar liberauctor pretium. Aliquam erat volutpat. Duis euismod justo in quaullamcorper, in commodo massa vulputate.
    </span>
    <div slot = "panel" >
      <pf-action-list>
        <pf-button onmousedown = "return () => {
          let drawer = document.getElementById('drawer#panelLeft');
          if( drawer.isExpanded )drawer.removeAttribute('expanded');
          else drawer.setAttribute('expanded' , 'true');}
        " >Toggle drawer</pf-button>
      </pf-action-list>
      drawer-panel
    </div>
  </pf-drawer>

</div>

### Panel on bottom

<div class = "sample-bloc">

  <pf-drawer id = "drawer#panelBottom" panel-bottom >
    <pf-button onmousedown = "return () => {
      let drawer = document.getElementById('drawer#panelBottom');
      if( drawer.isExpanded )drawer.removeAttribute('expanded');
      else drawer.setAttribute('expanded' , 'true');}
    " >Toggle drawer</pf-button>
    <span>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vecommodo urna. Morbi mattis rutrum ante, id vehiculex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eropurus aliquet erat, nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodeleifend, eros nibporta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit ametAliquam ex odio, malesuada seposuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar liberauctor pretium. Aliquam erat volutpat. Duis euismod justo in quaullamcorper, in commodo massa vulputate.
    </span>
    <div slot = "panel" >
      <pf-action-list>
        <pf-button onmousedown = "return () => {
          let drawer = document.getElementById('drawer#panelBottom');
          if( drawer.isExpanded )drawer.removeAttribute('expanded');
          else drawer.setAttribute('expanded' , 'true');}
        " >Toggle drawer</pf-button>
      </pf-action-list>
      drawer-panel
    </div>
  </pf-drawer>

</div>

### Basic inline

<div class = "sample-bloc">

  <pf-drawer id = "drawer#inline" inline >
    <pf-button onmousedown = "return () => {
      let drawer = document.getElementById('drawer#inline');
      if( drawer.isExpanded )drawer.removeAttribute('expanded');
      else drawer.setAttribute('expanded' , 'true');}
    " >Toggle drawer</pf-button>
    <span>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vecommodo urna. Morbi mattis rutrum ante, id vehiculex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eropurus aliquet erat, nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodeleifend, eros nibporta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit ametAliquam ex odio, malesuada seposuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar liberauctor pretium. Aliquam erat volutpat. Duis euismod justo in quaullamcorper, in commodo massa vulputate.
    </span>
    <div slot = "panel" >
      <pf-action-list>
        <pf-button onmousedown = "return () => {
          let drawer = document.getElementById('drawer#inline');
          if( drawer.isExpanded )drawer.removeAttribute('expanded');
          else drawer.setAttribute('expanded' , 'true');}
        " >Toggle drawer</pf-button>
      </pf-action-list>
      drawer-panel
    </div>
  </pf-drawer>

</div>

### Inline panel at end

<div class = "sample-bloc">

  <pf-drawer id = "drawer#inline#panelRight" inline panel-right >
    <pf-button onmousedown = "return () => {
      let drawer = document.getElementById('drawer#inline#panelRight');
      if( drawer.isExpanded )drawer.removeAttribute('expanded');
      else drawer.setAttribute('expanded' , 'true');}
    " >Toggle drawer</pf-button>
    <span>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vecommodo urna. Morbi mattis rutrum ante, id vehiculex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eropurus aliquet erat, nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodeleifend, eros nibporta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit ametAliquam ex odio, malesuada seposuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar liberauctor pretium. Aliquam erat volutpat. Duis euismod justo in quaullamcorper, in commodo massa vulputate.
    </span>
    <div slot = "panel" >
      <pf-action-list>
        <pf-button onmousedown = "return () => {
          let drawer = document.getElementById('drawer#inline#panelRight');
          if( drawer.isExpanded )drawer.removeAttribute('expanded');
          else drawer.setAttribute('expanded' , 'true');}
        " >Toggle drawer</pf-button>
      </pf-action-list>
      drawer-panel
    </div>
  </pf-drawer>

</div>

### Inline panel at start

<div class = "sample-bloc">

  <pf-drawer id = "drawer#inline#panelLeft" inline panel-left >
    <pf-button onmousedown = "return () => {
      let drawer = document.getElementById('drawer#inline#panelLeft');
      if( drawer.isExpanded )drawer.removeAttribute('expanded');
      else drawer.setAttribute('expanded' , 'true');}
    " >Toggle drawer</pf-button>
    <span>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vecommodo urna. Morbi mattis rutrum ante, id vehiculex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eropurus aliquet erat, nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodeleifend, eros nibporta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit ametAliquam ex odio, malesuada seposuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar liberauctor pretium. Aliquam erat volutpat. Duis euismod justo in quaullamcorper, in commodo massa vulputate.
    </span>
    <div slot = "panel" >
      <pf-action-list>
        <pf-button onmousedown = "return () => {
          let drawer = document.getElementById('drawer#inline#panelLeft');
          if( drawer.isExpanded )drawer.removeAttribute('expanded');
          else drawer.setAttribute('expanded' , 'true');}
        " >Toggle drawer</pf-button>
      </pf-action-list>
      drawer-panel
    </div>
  </pf-drawer>

</div>

### Static

<div class = "sample-bloc">

  <pf-drawer id = "drawer#expanded#static" expanded static >
    <pf-button onmousedown = "return () => {
      let drawer = document.getElementById('drawer#expanded#static');
      if( drawer.isExpanded )drawer.removeAttribute('expanded');
      else drawer.setAttribute('expanded' , 'true');}
    " >Toggle drawer</pf-button>
    <span>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vecommodo urna. Morbi mattis rutrum ante, id vehiculex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eropurus aliquet erat, nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodeleifend, eros nibporta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit ametAliquam ex odio, malesuada seposuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar liberauctor pretium. Aliquam erat volutpat. Duis euismod justo in quaullamcorper, in commodo massa vulputate.
    </span>
    <div slot = "panel" >
      <pf-action-list>
        <pf-button onmousedown = "return () => {
          let drawer = document.getElementById('drawer#expanded#static');
          if( drawer.isExpanded )drawer.removeAttribute('expanded');
          else drawer.setAttribute('expanded' , 'true');}
        " >Toggle drawer</pf-button>
      </pf-action-list>
      drawer-panel
    </div>
  </pf-drawer>

</div>

### Stacked content body elements
### Modified content padding
### Modified panel padding
### Additional section above drawer content
### Breakpoint
### Resizable at end

<div class = "sample-bloc">

  <pf-drawer id = "drawer#panelRight#resizable" panel-right resizable >
    <div>
      <pf-action-list>
        <pf-button onmousedown = "return () => {
          let drawer = document.getElementById('drawer#panelRight#resizable');
          if( drawer.isExpanded )drawer.removeAttribute('expanded');
          else drawer.setAttribute('expanded' , 'true');}
        " >Toggle drawer</pf-button>
      </pf-action-list>
      <span>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehiculex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodeleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada seposuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quaullamcorper, in commodo massa vulputate.
      </span>
    </div>
    <div slot = "panel">
      <pf-action-list>
        <pf-button onmousedown = "return () => {
          let drawer = document.getElementById('drawer#panelRight#resizable');
          if( drawer.isExpanded )drawer.removeAttribute('expanded');
          else drawer.setAttribute('expanded' , 'true');}
        " >Toggle drawer</pf-button>
      </pf-action-list>
      drawer-panel
    </div>
  </pf-drawer>

</div>

### Resizable at start

<div class = "sample-bloc">

  <pf-drawer id = "drawer#panelLeft#resizable" panel-left resizable >
    <div>
      <pf-action-list>
        <pf-button onmousedown = "return () => {
          let drawer = document.getElementById('drawer#panelLeft#resizable');
          if( drawer.isExpanded )drawer.removeAttribute('expanded');
          else drawer.setAttribute('expanded' , 'true');}
        " >Toggle drawer</pf-button>
      </pf-action-list>
      <span>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehiculex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodeleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada seposuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quaullamcorper, in commodo massa vulputate.
      </span>
    </div>
    <div slot = "panel">
      <pf-action-list>
        <pf-button onmousedown = "return () => {
          let drawer = document.getElementById('drawer#panelLeft#resizable');
          if( drawer.isExpanded )drawer.removeAttribute('expanded');
          else drawer.setAttribute('expanded' , 'true');}
        " >Toggle drawer</pf-button>
      </pf-action-list>
      drawer-panel
    </div>
  </pf-drawer>

</div>

### Resizable on bottom

<div class = "sample-bloc">

  <pf-drawer id = "drawer#panelBottom#resizable" panel-bottom resizable >
    <div>
      <pf-action-list>
        <pf-button onmousedown = "return () => {
          let drawer = document.getElementById('drawer#panelBottom#resizable');
          if( drawer.isExpanded )drawer.removeAttribute('expanded');
          else drawer.setAttribute('expanded' , 'true');}
        " >Toggle drawer</pf-button>
      </pf-action-list>
      <span>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehiculex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodeleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada seposuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quaullamcorper, in commodo massa vulputate.
      </span>
    </div>
    <div slot = "panel">
      <pf-action-list>
        <pf-button onmousedown = "return () => {
          let drawer = document.getElementById('drawer#panelBottom#resizable');
          if( drawer.isExpanded )drawer.removeAttribute('expanded');
          else drawer.setAttribute('expanded' , 'true');}
        " >Toggle drawer</pf-button>
      </pf-action-list>
      drawer-panel
    </div>
  </pf-drawer>

</div>

### Resizable on inline

<div class = "sample-bloc">

  <pf-drawer id = "drawer#panelRight#resizable#inline" panel-right resizable inline>
    <div>
      <pf-action-list>
        <pf-button onmousedown = "return () => {
          let drawer = document.getElementById('drawer#panelRight#resizable#inline');
          if( drawer.isExpanded )drawer.removeAttribute('expanded');
          else drawer.setAttribute('expanded' , 'true');}
        " >Toggle drawer</pf-button>
      </pf-action-list>
      <span>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehiculex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodeleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada seposuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quaullamcorper, in commodo massa vulputate.
      </span>
    </div>
    <div slot = "panel">
      <pf-action-list>
        <pf-button onmousedown = "return () => {
          let drawer = document.getElementById('drawer#panelRight#resizable#inline');
          if( drawer.isExpanded )drawer.removeAttribute('expanded');
          else drawer.setAttribute('expanded' , 'true');}
        " >Toggle drawer</pf-button>
      </pf-action-list>
      drawer-panel
    </div>
  </pf-drawer>

</div>

### Resizable on inline at start

<div class = "sample-bloc">

  <pf-drawer id = "drawer#panelLeft#resizable#inline" panel-left resizable inline>
    <div>
      <pf-action-list>
        <pf-button onmousedown = "return () => {
          let drawer = document.getElementById('drawer#panelLeft#resizable#inline');
          if( drawer.isExpanded )drawer.removeAttribute('expanded');
          else drawer.setAttribute('expanded' , 'true');}
        " >Toggle drawer</pf-button>
      </pf-action-list>
      <span>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium est a porttitor vehicula. Quisque vel commodo urna. Morbi mattis rutrum ante, id vehiculex accumsan ut. Morbi viverra, eros vel porttitor facilisis, eros purus aliquet erat, nec lobortis felis elit pulvinar sem. Vivamus vulputate, risus eget commodeleifend, eros nibh porta quam, vitae lacinia leo libero at magna. Maecenas aliquam sagittis orci, et posuere nisi ultrices sit amet. Aliquam ex odio, malesuada seposuere quis, pellentesque at mauris. Phasellus venenatis massa ex, eget pulvinar libero auctor pretium. Aliquam erat volutpat. Duis euismod justo in quaullamcorper, in commodo massa vulputate.
      </span>
    </div>
    <div slot = "panel">
      <pf-action-list>
        <pf-button onmousedown = "return () => {
          let drawer = document.getElementById('drawer#panelLeft#resizable#inline');
          if( drawer.isExpanded )drawer.removeAttribute('expanded');
          else drawer.setAttribute('expanded' , 'true');}
        " >Toggle drawer</pf-button>
      </pf-action-list>
      drawer-panel
    </div>
  </pf-drawer>

</div>

### With focus trap
