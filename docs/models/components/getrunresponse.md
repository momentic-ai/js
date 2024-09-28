# GetRunResponse

## Example Usage

```typescript
import { GetRunResponse } from "@momentic/js/models/components";

let value: GetRunResponse = {
  id: "<id>",
  runKey: "<value>",
  organizationId: "<id>",
  createdAt: "<value>",
  createdBy: "<value>",
  scheduledAt: "<value>",
  startedAt: "<value>",
  finishedAt: "<value>",
  status: "RETRYING",
  trigger: "CLI",
  attempts: 8700.12,
  testId: "<id>",
  results: [
    {
      startedAt: "<value>",
      finishedAt: "<value>",
      status: "CANCELLED",
      results: [
        {
          "key": "<value>",
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `id`                                                                                             | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `runKey`                                                                                         | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `organizationId`                                                                                 | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `createdAt`                                                                                      | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `createdBy`                                                                                      | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `flake`                                                                                          | *boolean*                                                                                        | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `scheduledAt`                                                                                    | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `startedAt`                                                                                      | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `updatedAt`                                                                                      | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `finishedAt`                                                                                     | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `resolvedBaseUrl`                                                                                | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `status`                                                                                         | [components.GetRunResponseStatus](../../models/components/getrunresponsestatus.md)               | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `trigger`                                                                                        | [components.Trigger](../../models/components/trigger.md)                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `attempts`                                                                                       | *number*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `runAttempts`                                                                                    | [components.RunAttempts](../../models/components/runattempts.md)[]                               | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `videos`                                                                                         | *string*[]                                                                                       | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `failureReason`                                                                                  | [components.GetRunResponseFailureReason](../../models/components/getrunresponsefailurereason.md) | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `failureDetails`                                                                                 | [components.TestFailureDetails](../../models/components/testfailuredetails.md)                   | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `testId`                                                                                         | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `testName`                                                                                       | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `test`                                                                                           | [components.GetRunResponseTest](../../models/components/getrunresponsetest.md)                   | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `suiteId`                                                                                        | *string*                                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `results`                                                                                        | [components.Results](../../models/components/results.md)[]                                       | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `debugData`                                                                                      | [components.DebugData](../../models/components/debugdata.md)                                     | :heavy_minus_sign:                                                                               | N/A                                                                                              |
| `resolvedInputs`                                                                                 | Record<string, *string*>                                                                         | :heavy_minus_sign:                                                                               | N/A                                                                                              |