# QueueStepsRequest

## Example Usage

```typescript
import { QueueStepsRequest } from "momentic/models/components";

let value: QueueStepsRequest = {
  testName: "<value>",
  baseUrl: "<value>",
  advanced: {},
  steps: [],
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `testName`                                                 | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `baseUrl`                                                  | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        |
| `advanced`                                                 | [components.Advanced](../../models/components/advanced.md) | :heavy_check_mark:                                         | N/A                                                        |
| `environment`                                              | Record<string, *any*>                                      | :heavy_minus_sign:                                         | N/A                                                        |
| `steps`                                                    | *components.Steps*[]                                       | :heavy_check_mark:                                         | N/A                                                        |