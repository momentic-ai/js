# GetRunStatusesResponseBody

## Example Usage

```typescript
import { GetRunStatusesResponseBody } from "momentic/models/operations";

let value: GetRunStatusesResponseBody = {
  id: "<id>",
  status: "FAILED",
  testId: "<value>",
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `id`                                                                                               | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `status`                                                                                           | [operations.GetRunStatusesStatus](../../models/operations/getrunstatusesstatus.md)                 | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `testName`                                                                                         | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `testId`                                                                                           | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `test`                                                                                             | [operations.Test](../../models/operations/test.md)                                                 | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `failureReason`                                                                                    | [operations.GetRunStatusesFailureReason](../../models/operations/getrunstatusesfailurereason.md)   | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `failureDetails`                                                                                   | [operations.GetRunStatusesFailureDetails](../../models/operations/getrunstatusesfailuredetails.md) | :heavy_minus_sign:                                                                                 | N/A                                                                                                |