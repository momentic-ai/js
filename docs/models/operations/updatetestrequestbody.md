# UpdateTestRequestBody

## Example Usage

```typescript
import { UpdateTestRequestBody } from "momentic/models/operations";

let value: UpdateTestRequestBody = {
    testId: "<value>",
    schemaVersion: "<value>",
    steps: [
        {
            key: "<value>",
        },
    ],
};
```

## Fields

| Field                   | Type                    | Required                | Description             |
| ----------------------- | ----------------------- | ----------------------- | ----------------------- |
| `testId`                | *string*                | :heavy_check_mark:      | N/A                     |
| `schemaVersion`         | *string*                | :heavy_check_mark:      | N/A                     |
| `steps`                 | Record<string, *any*>[] | :heavy_check_mark:      | N/A                     |