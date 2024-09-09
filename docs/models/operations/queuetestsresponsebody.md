# QueueTestsResponseBody

Tests queued successfully

## Example Usage

```typescript
import { QueueTestsResponseBody } from "momentic/models/operations";

let value: QueueTestsResponseBody = {
  message: "<value>",
  queuedTests: [
    {
      name: "<value>",
      id: "<id>",
    },
  ],
  runIds: [
    "92059293-96fe-4a75-96eb-10faaa2352c5",
  ],
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `message`                                                          | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `queuedTests`                                                      | [operations.QueuedTests](../../models/operations/queuedtests.md)[] | :heavy_check_mark:                                                 | N/A                                                                |
| `runIds`                                                           | *string*[]                                                         | :heavy_check_mark:                                                 | N/A                                                                |