# Action List

An **action list** is a group of actions, controls, or buttons with set spacing.

## Exemples

```html live

<pf-action-list>
  <pf-action-list-item>
    <pf-button>Next</pf-button>
  </pf-action-list-item>
  <pf-action-list-item>
    <pf-button secondary >Back</pf-button>
  </pf-action-list-item>
  <pf-action-list-item>
    <pf-menu-toggle plain ></pf-menu-toggle>
  </pf-action-list-item>
</pf-action-list>

```

### Action list single group

<div class = "sample-bloc column" >

  <div class = "sample-bloc" >
    <pf-action-list>
      <pf-action-list-item>
        <pf-button>Next</pf-button>
      </pf-action-list-item>
      <pf-action-list-item>
        <pf-button secondary >Back</pf-button>
      </pf-action-list-item>
      <pf-action-list-item>
        <pf-menu-toggle plain ></pf-menu-toggle>
      </pf-action-list-item>
    </pf-action-list>
  </div>
  <div class = "sample-bloc column" >
    <span>With kebab</span>
    <pf-action-list>
      <pf-action-list-item>
        <pf-button>Next</pf-button>
      </pf-action-list-item>
      <pf-action-list-item>
        <pf-button secondary >Back</pf-button>
      </pf-action-list-item>
      <pf-action-list-item>
        <pf-dropdown plain>
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
  </div>

</div>

### Action list with icons

<div class = "sample-bloc" >
  <pf-action-list>
    <pf-action-list-item>
      <pf-icons-check></pf-icons-check>
    </pf-action-list-item>
    <pf-action-list-item>
      <pf-icons-times></pf-icons-times>
    </pf-action-list-item>
  </pf-action-list>
</div>

### Action list multiple groups

<div class = "sample-bloc" >
  <pf-action-list>
    <pf-action-list-group>
      <pf-action-list-item>
        <pf-button>Next</pf-button>
      </pf-action-list-item>
      <pf-action-list-item>
        <pf-button secondary>Back</pf-button>
      </pf-action-list-item>
    </pf-action-list-group>
    <pf-action-list-group>
      <pf-action-list-item>
        <pf-button>Submit</pf-button>
      </pf-action-list-item>
      <pf-action-list-item>
        <pf-button secondary>Cancel</pf-button>
      </pf-action-list-item>
    </pf-action-list-group>
  </pf-action-list>
</div>

### Action list with cancel button

<div class = "sample-bloc column" >
  <div class = "sample-bloc column" >
    <span>In modals, forms, data lists</span>
    <pf-action-list>
      <pf-action-list-group>
        <pf-action-list-item>
          <pf-button>Next</pf-button>
        </pf-action-list-item>
      </pf-action-list-group>
      <pf-action-list-group>
        <pf-action-list-item>
          <pf-button secondary>Back</pf-button>
        </pf-action-list-item>
      </pf-action-list-group>
    </pf-action-list>
  </div>
  <div class = "sample-bloc column" >
    <span>In wizards</span>
    <pf-action-list>
      <pf-action-list-group>
        <pf-action-list-item>
          <pf-button>Next</pf-button>
        </pf-action-list-item>
        <pf-action-list-item>
          <pf-button secondary>Back</pf-button>
        </pf-action-list-item>
      </pf-action-list-group>
      <pf-action-list-group>
        <pf-action-list-item>
          <pf-button link>Cancel</pf-button>
        </pf-action-list-item>
      </pf-action-list-group>
    </pf-action-list>
  </div>
</div>

