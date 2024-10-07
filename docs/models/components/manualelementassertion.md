# ManualElementAssertion


## Supported Types

### `components.ElementContentAssertion`

```typescript
const value: components.ElementContentAssertion = {
  operation: "STARTS_WITH",
  value: "<value>",
};
```

### `components.ElementAttributeValueAssertion`

```typescript
const value: components.ElementAttributeValueAssertion = {
  operation: "CONTAINS",
  attr: "<value>",
  value: "<value>",
};
```

### `components.ElementExistenceAssertion`

```typescript
const value: components.ElementExistenceAssertion = {
  condition: "EXISTS",
};
```

