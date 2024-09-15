# GetRunStatusesResponse

## Example Usage

```typescript
import { GetRunStatusesResponse } from "momentic/models/components";

let value: GetRunStatusesResponse = {
  id: "<id>",
  status: "CANCELLED",
  testId: "<value>",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `id`                                                                           | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `status`                                                                       | [components.Status](../../models/components/status.md)                         | :heavy_check_mark:                                                             | N/A                                                                            |
| `testName`                                                                     | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `testId`                                                                       | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `test`                                                                         | [components.Test](../../models/components/test.md)                             | :heavy_minus_sign:                                                             | N/A                                                                            |
| `failureReason`                                                                | [components.FailureReason](../../models/components/failurereason.md)           | :heavy_minus_sign:                                                             | N/A                                                                            |
| `failureDetails`                                                               | [components.TestFailureDetails](../../models/components/testfailuredetails.md) | :heavy_minus_sign:                                                             | N/A                                                                            |