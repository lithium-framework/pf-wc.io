# Treeview

## Integration

```html live

<pf-tree-view>
  <pf-tree-view-item no-action>
    <span slot = "label" >Application</span>
    <pf-tree-view-item no-toggle no-action>
      <span slot = "label" >Layer 1</span>
    </pf-tree-view-item>
    <pf-tree-view-item no-toggle no-action>
      <span slot = "label" >Layer 2</span>
    </pf-tree-view-item>
  </pf-tree-view-item>
</pf-tree-view>

```

## Actions

<pf-tree-view>
  <pf-tree-view-item no-action>
    <span slot = "label" >Application</span>
    <pf-tree-view-item no-toggle no-action>
      <span slot = "label" >Layer 1</span>
    </pf-tree-view-item>
    <pf-tree-view-item no-toggle>
      <span slot = "label" >Layer 2</span>
      <pf-action-list slot = "action" >
        <pf-action-list-item>
          <pf-dropdown no-text plain>
            <pf-dropdown-menu-item>Action</pf-dropdown-menu-item>
            <pf-dropdown-menu-item link>Link</pf-dropdown-menu-item>
            <pf-divider></pf-divider>
            <pf-dropdown-menu-item disabled>Action</pf-dropdown-menu-item>
            <pf-dropdown-menu-item link disabled>Link</pf-dropdown-menu-item>
            <pf-divider></pf-divider>
            <pf-dropdown-menu-item area-disabled>Action</pf-dropdown-menu-item>
            <pf-dropdown-menu-item link area-disabled>Link</pf-dropdown-menu-item>
          </pf-dropdown>
        </pf-action-list-item>
      </pf-action-list>
    </pf-tree-view-item>
  </pf-tree-view-item>
</pf-tree-view>