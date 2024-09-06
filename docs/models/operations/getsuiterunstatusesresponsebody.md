# GetSuiteRunStatusesResponseBody

## Example Usage

```typescript
import { GetSuiteRunStatusesResponseBody } from "momentic/models/operations";

let value: GetSuiteRunStatusesResponseBody = {
    id: "05dfc2dd-f7cc-478c-a1ba-928fc816742c",
    orgId: "<value>",
    createdAt: "<value>",
    startedAt: "<value>",
    finishedAt: "<value>",
    status: "RETRYING",
    trigger: "CRON",
    runs: [
        {
            id: "<id>",
            status: "RUNNING",
            testId: "<value>",
            test: {
                name: "<value>",
                id: "<id>",
            },
        },
    ],
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `id`                                                                                           | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `orgId`                                                                                        | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `createdAt`                                                                                    | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `startedAt`                                                                                    | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `finishedAt`                                                                                   | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `status`                                                                                       | [operations.GetSuiteRunStatusesStatus](../../models/operations/getsuiterunstatusesstatus.md)   | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `trigger`                                                                                      | [operations.GetSuiteRunStatusesTrigger](../../models/operations/getsuiterunstatusestrigger.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `suite`                                                                                        | [operations.Suite](../../models/operations/suite.md)                                           | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `runs`                                                                                         | [operations.Runs](../../models/operations/runs.md)[]                                           | :heavy_check_mark:                                                                             | N/A                                                                                            |