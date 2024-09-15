# TestContextSnapshot

## Example Usage

```typescript
import { TestContextSnapshot } from "@momentic/js/models/components";

let value: TestContextSnapshot = {
  env: {
    "key": "<value>",
  },
  results: [
    "<value>",
  ],
};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `env`                 | Record<string, *any*> | :heavy_check_mark:    | N/A                   |
| `results`             | *any*[]               | :heavy_check_mark:    | N/A                   |
| `inputs`              | Record<string, *any*> | :heavy_minus_sign:    | N/A                   |