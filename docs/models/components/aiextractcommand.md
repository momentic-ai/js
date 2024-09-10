# AIExtractCommand

## Example Usage

```typescript
import { AIExtractCommand } from "momentic/models/components";

let value: AIExtractCommand = {
  id: "8a0d446c-e2af-47a7-bcf3-be453f870b32",
  goal: "<value>",
};
```

## Fields

| Field                                               | Type                                                | Required                                            | Description                                         |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `thoughts`                                          | *string*                                            | :heavy_minus_sign:                                  | N/A                                                 |
| `id`                                                | *string*                                            | :heavy_check_mark:                                  | unique identifier to this step, used for step cache |
| `type`                                              | *string*                                            | :heavy_check_mark:                                  | N/A                                                 |
| `goal`                                              | *string*                                            | :heavy_check_mark:                                  | N/A                                                 |
| `schema`                                            | *string*                                            | :heavy_minus_sign:                                  | N/A                                                 |
| `envKey`                                            | *string*                                            | :heavy_minus_sign:                                  | N/A                                                 |
| `disableCache`                                      | *boolean*                                           | :heavy_minus_sign:                                  | N/A                                                 |
| `iframeUrl`                                         | *string*                                            | :heavy_minus_sign:                                  | N/A                                                 |