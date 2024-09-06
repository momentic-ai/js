# UpdateRunRequestBody

## Example Usage

```typescript
import { UpdateRunRequestBody } from "momentic/models/operations";

let value: UpdateRunRequestBody = {};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `startedAt`                                                            | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `finishedAt`                                                           | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `results`                                                              | Record<string, *any*>[]                                                | :heavy_minus_sign:                                                     | N/A                                                                    |
| `status`                                                               | [operations.Status](../../models/operations/status.md)                 | :heavy_minus_sign:                                                     | N/A                                                                    |
| `failureDetails`                                                       | [operations.FailureDetails](../../models/operations/failuredetails.md) | :heavy_minus_sign:                                                     | N/A                                                                    |
| `failureReason`                                                        | [operations.FailureReason](../../models/operations/failurereason.md)   | :heavy_minus_sign:                                                     | N/A                                                                    |
| `debugData`                                                            | [operations.DebugData](../../models/operations/debugdata.md)           | :heavy_minus_sign:                                                     | N/A                                                                    |
| `resolvedBaseUrl`                                                      | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `resolvedInputs`                                                       | Record<string, *string*>                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `flake`                                                                | *boolean*                                                              | :heavy_minus_sign:                                                     | N/A                                                                    |