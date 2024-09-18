# JavaScriptCommand

## Example Usage

```typescript
import { JavaScriptCommand } from "@momentic/js/models/components";

let value: JavaScriptCommand = {
  id: "aae8d678-64db-4b67-9fd5-e60b375ed4f6",
  code: "<value>",
};
```

## Fields

| Field                                               | Type                                                | Required                                            | Description                                         |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `thoughts`                                          | *string*                                            | :heavy_minus_sign:                                  | N/A                                                 |
| `id`                                                | *string*                                            | :heavy_check_mark:                                  | unique identifier to this step, used for step cache |
| `type`                                              | *string*                                            | :heavy_check_mark:                                  | N/A                                                 |
| `code`                                              | *string*                                            | :heavy_check_mark:                                  | N/A                                                 |
| `fragment`                                          | *boolean*                                           | :heavy_minus_sign:                                  | N/A                                                 |
| `envKey`                                            | *string*                                            | :heavy_minus_sign:                                  | N/A                                                 |
| `environment`                                       | *string*                                            | :heavy_minus_sign:                                  | default NODE                                        |
| `timeout`                                           | *number*                                            | :heavy_minus_sign:                                  | Max seconds for the code to complete                |