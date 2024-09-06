# GetRunStatusesAdvanced

## Example Usage

```typescript
import { GetRunStatusesAdvanced } from "momentic/models/operations";

let value: GetRunStatusesAdvanced = {};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `disableAICaching`                                                                     | *boolean*                                                                              | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `viewport`                                                                             | [operations.GetRunStatusesViewport](../../models/operations/getrunstatusesviewport.md) | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `pageLoadTimeoutMs`                                                                    | *number*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `smartWaitingTimeoutMs`                                                                | *number*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `extraHeaders`                                                                         | Record<string, *string*>                                                               | :heavy_minus_sign:                                                                     | HTTP headers to be sent on every request                                               |
| `userAgent`                                                                            | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |