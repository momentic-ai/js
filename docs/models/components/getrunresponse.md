# GetRunResponse

## Example Usage

```typescript
import { GetRunResponse } from "momentic/models/components";

let value: GetRunResponse = {
  id: "<id>",
  runKey: "<value>",
  organizationId: "<value>",
  createdAt: "<value>",
  createdBy: "<value>",
  scheduledAt: "<value>",
  startedAt: "<value>",
  finishedAt: "<value>",
  status: "FAILED",
  trigger: "CRON",
  attempts: 9255.97,
  testId: "<value>",
  results: [
    {
      "key": "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `id`                                                                                               | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `runKey`                                                                                           | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `organizationId`                                                                                   | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `createdAt`                                                                                        | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `createdBy`                                                                                        | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `flake`                                                                                            | *boolean*                                                                                          | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `scheduledAt`                                                                                      | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `startedAt`                                                                                        | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `updatedAt`                                                                                        | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `finishedAt`                                                                                       | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `resolvedBaseUrl`                                                                                  | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `status`                                                                                           | [components.GetRunResponseStatus](../../models/components/getrunresponsestatus.md)                 | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `trigger`                                                                                          | [components.Trigger](../../models/components/trigger.md)                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `attempts`                                                                                         | *number*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `failureReason`                                                                                    | [components.GetRunResponseFailureReason](../../models/components/getrunresponsefailurereason.md)   | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `failureDetails`                                                                                   | [components.GetRunResponseFailureDetails](../../models/components/getrunresponsefailuredetails.md) | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `testId`                                                                                           | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `testName`                                                                                         | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `test`                                                                                             | [components.GetRunResponseTest](../../models/components/getrunresponsetest.md)                     | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `suiteId`                                                                                          | *string*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `results`                                                                                          | Record<string, *any*>[]                                                                            | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `debugData`                                                                                        | [components.DebugData](../../models/components/debugdata.md)                                       | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `resolvedInputs`                                                                                   | Record<string, *string*>                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                |