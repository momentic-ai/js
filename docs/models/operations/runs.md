# Runs

## Example Usage

```typescript
import { Runs } from "momentic/models/operations";

let value: Runs = {
  id: "<id>",
  status: "CANCELLED",
  testId: "<value>",
  test: {
    name: "<value>",
    id: "<id>",
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                         | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `status`                                                                                                     | [operations.GetSuiteRunStatusesResponseStatus](../../models/operations/getsuiterunstatusesresponsestatus.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `testName`                                                                                                   | *string*                                                                                                     | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `testId`                                                                                                     | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `test`                                                                                                       | [operations.GetSuiteRunStatusesTest](../../models/operations/getsuiterunstatusestest.md)                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `failureReason`                                                                                              | [operations.GetSuiteRunStatusesFailureReason](../../models/operations/getsuiterunstatusesfailurereason.md)   | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |
| `failureDetails`                                                                                             | [operations.GetSuiteRunStatusesFailureDetails](../../models/operations/getsuiterunstatusesfailuredetails.md) | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |