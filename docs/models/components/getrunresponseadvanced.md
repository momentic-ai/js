# GetRunResponseAdvanced

## Example Usage

```typescript
import { GetRunResponseAdvanced } from "momentic/models/components";

let value: GetRunResponseAdvanced = {};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `disableAICaching`                                                                     | *boolean*                                                                              | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `viewport`                                                                             | [components.GetRunResponseViewport](../../models/components/getrunresponseviewport.md) | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `pageLoadTimeoutMs`                                                                    | *number*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `smartWaitingTimeoutMs`                                                                | *number*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |
| `extraHeaders`                                                                         | Record<string, *string*>                                                               | :heavy_minus_sign:                                                                     | HTTP headers to be sent on every request                                               |
| `userAgent`                                                                            | *string*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |