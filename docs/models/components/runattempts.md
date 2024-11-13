# RunAttempts

## Example Usage

```typescript
import { RunAttempts } from "@momentic/js/models/components";

let value: RunAttempts = {
  id: "<id>",
  status: "PASSED",
  startedAt: "<value>",
  finishedAt: "<value>",
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                     | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `status`                                                                                                 | [components.GetRunResponseRunAttemptsStatus](../../models/components/getrunresponserunattemptsstatus.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `startedAt`                                                                                              | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `finishedAt`                                                                                             | *string*                                                                                                 | :heavy_check_mark:                                                                                       | N/A                                                                                                      |