# AuthSaveCommand

## Example Usage

```typescript
import { AuthSaveCommand } from "@momentic/js/models/components";

let value: AuthSaveCommand = {
  id: "abd74dd3-9c0f-45d2-8ff7-c70a45626d43",
};
```

## Fields

| Field                                               | Type                                                | Required                                            | Description                                         |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `thoughts`                                          | *string*                                            | :heavy_minus_sign:                                  | N/A                                                 |
| `id`                                                | *string*                                            | :heavy_check_mark:                                  | unique identifier to this step, used for step cache |
| `type`                                              | *string*                                            | :heavy_check_mark:                                  | N/A                                                 |