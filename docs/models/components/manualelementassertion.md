# ManualElementAssertion


## Supported Types

### `components.ElementContentAssertion`

```typescript
const value: components.ElementContentAssertion = {
  operation: "EQUALS",
  value: "<value>",
};
```

### `components.ElementAttributeValueAssertion`

```typescript
const value: components.ElementAttributeValueAssertion = {
  operation: "EQUALS",
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

