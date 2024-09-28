# ManualElementAssertion


## Supported Types

### `components.ElementContentAssertion`

```typescript
const value: components.ElementContentAssertion = {
  operation: "CONTAINS",
  value: "<value>",
};
```

### `components.ElementAttributeValueAssertion`

```typescript
const value: components.ElementAttributeValueAssertion = {
  operation: "STARTS_WITH",
  attr: "<value>",
  value: "<value>",
};
```

### `components.ElementExistenceAssertion`

```typescript
const value: components.ElementExistenceAssertion = {
  condition: "VISIBLE",
};
```

