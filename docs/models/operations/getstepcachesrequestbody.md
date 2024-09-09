# GetStepCachesRequestBody

## Example Usage

```typescript
import { GetStepCachesRequestBody } from "momentic/models/operations";

let value: GetStepCachesRequestBody = {
  steps: [
    {
      "key": "<value>",
    },
  ],
  testId: "<value>",
  schemaVersion: "<value>",
  organizationId: "<value>",
};
```

## Fields

| Field                   | Type                    | Required                | Description             |
| ----------------------- | ----------------------- | ----------------------- | ----------------------- |
| `steps`                 | Record<string, *any*>[] | :heavy_check_mark:      | N/A                     |
| `testId`                | *string*                | :heavy_check_mark:      | N/A                     |
| `schemaVersion`         | *string*                | :heavy_check_mark:      | N/A                     |
| `organizationId`        | *string*                | :heavy_check_mark:      | N/A                     |