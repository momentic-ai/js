# RequestBody

## Example Usage

```typescript
import { RequestBody } from "momentic/models/operations";

let value: RequestBody = {
    name: "<value>",
    variables: {
        key: "<value>",
    },
};
```

## Fields

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `name`                   | *string*                 | :heavy_check_mark:       | N/A                      |
| `variables`              | Record<string, *string*> | :heavy_check_mark:       | N/A                      |