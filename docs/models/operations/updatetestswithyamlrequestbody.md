# UpdateTestsWithYAMLRequestBody

## Example Usage

```typescript
import { UpdateTestsWithYAMLRequestBody } from "momentic/models/operations";

let value: UpdateTestsWithYAMLRequestBody = {
  test: "<value>",
  modules: {
    "key": "<value>",
  },
};
```

## Fields

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `test`                   | *string*                 | :heavy_check_mark:       | test YAML                |
| `modules`                | Record<string, *string*> | :heavy_check_mark:       | N/A                      |