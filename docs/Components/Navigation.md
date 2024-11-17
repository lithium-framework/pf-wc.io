```html live

<pf-navigation-v2>
  <pf-navigation-list-v2>

    <pf-navigation-list-item-v2> 
      subItems 
      <pf-navigation-list-item-v2 slot = "subItem" >subItem A</pf-navigation-list-item-v2>
      <pf-navigation-list-item-v2 slot = "subItem" >subItem B</pf-navigation-list-item-v2>
    </pf-navigation-list-item-v2>

    <pf-navigation-list-item-v2 flyout > 
      flyoutItems 
      <pf-navigation-list-item-v2 slot = "flyoutItem" >flyoutItem A</pf-navigation-list-item-v2>
      <pf-navigation-list-item-v2 slot = "flyoutItem" >flyoutItem B</pf-navigation-list-item-v2>
    </pf-navigation-list-item-v2>

  </pf-navigation-list-v2>
</pf-navigation-v2>

```

## Grouped

## Expandable

## Expandable third level

## Mixed

## Horizontal subnav

## Flyout <pf-badge>Beta</pf-badge>

<div class = "sample-bloc" >

  <pf-navigation-v2 style = {{width : '400px'}}>
    <pf-navigation-list-v2>
      <pf-navigation-list-item-v2 > 
        <span>flyoutItems</span>
        <pf-navigation-list-item-v2 slot = "subItem" flyout>
          <span>subItem A</span>
          <pf-navigation-list-item-v2 slot = "flyoutItem" >flyoutItem A</pf-navigation-list-item-v2>
          <pf-navigation-list-item-v2 slot = "flyoutItem" >flyoutItem B</pf-navigation-list-item-v2>
        </pf-navigation-list-item-v2>
        <pf-navigation-list-item-v2 slot = "subItem" >subItem B</pf-navigation-list-item-v2>
      </pf-navigation-list-item-v2>
    </pf-navigation-list-v2>
  </pf-navigation-v2>

</div>

## Drilldown

## Link text

