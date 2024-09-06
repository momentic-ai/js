# GetEnvironmentByNameResponseBody

Environment retrieved successfully

## Example Usage

```typescript
import { GetEnvironmentByNameResponseBody } from "momentic/models/operations";

let value: GetEnvironmentByNameResponseBody = {
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