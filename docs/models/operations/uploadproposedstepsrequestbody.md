# UploadProposedStepsRequestBody

## Example Usage

```typescript
import { UploadProposedStepsRequestBody } from "momentic/models/operations";

let value: UploadProposedStepsRequestBody = {
    testId: "<value>",
    orgId: "<value>",
    runId: "<value>",
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
| `orgId`                 | *string*                | :heavy_check_mark:      | N/A                     |
| `runId`                 | *string*                | :heavy_check_mark:      | N/A                     |
| `steps`                 | Record<string, *any*>[] | :heavy_check_mark:      | N/A                     |