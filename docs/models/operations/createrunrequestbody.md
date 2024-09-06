# CreateRunRequestBody

## Example Usage

```typescript
import { CreateRunRequestBody } from "momentic/models/operations";

let value: CreateRunRequestBody = {
    testId: "<value>",
    testName: "<value>",
    trigger: "CLI",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `testId`                                                 | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `testName`                                               | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `resolvedBaseUrl`                                        | *string*                                                 | :heavy_minus_sign:                                       | N/A                                                      |
| `trigger`                                                | [operations.Trigger](../../models/operations/trigger.md) | :heavy_check_mark:                                       | N/A                                                      |