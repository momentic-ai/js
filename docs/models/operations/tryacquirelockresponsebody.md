# TryAcquireLockResponseBody

Lock acquisition attempt result

## Example Usage

```typescript
import { TryAcquireLockResponseBody } from "momentic/models/operations";

let value: TryAcquireLockResponseBody = {
  acquired: false,
  acquiredByMetadata: "<value>",
  keyPrefix: "<value>",
};
```

## Fields

| Field                | Type                 | Required             | Description          |
| -------------------- | -------------------- | -------------------- | -------------------- |
| `acquired`           | *boolean*            | :heavy_check_mark:   | N/A                  |
| `acquiredByMetadata` | *string*             | :heavy_check_mark:   | N/A                  |
| `keyPrefix`          | *string*             | :heavy_check_mark:   | N/A                  |