# TryAcquireLockRequestBody

## Example Usage

```typescript
import { TryAcquireLockRequestBody } from "momentic/models/operations";

let value: TryAcquireLockRequestBody = {
    keyParams: {
        orgId: "<value>",
        cacheKeys: ["<value>"],
    },
    clientMetadata: "<value>",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `keyParams`                                                  | [operations.KeyParams](../../models/operations/keyparams.md) | :heavy_check_mark:                                           | N/A                                                          |
| `clientMetadata`                                             | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `lockAcquisitionTimeoutMs`                                   | *number*                                                     | :heavy_minus_sign:                                           | N/A                                                          |