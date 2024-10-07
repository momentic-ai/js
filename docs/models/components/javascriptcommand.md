# JavaScriptCommand

## Example Usage

```typescript
import { JavaScriptCommand } from "@momentic/js/models/components";

let value: JavaScriptCommand = {
  id: "f4b5635f-4394-47d3-a698-fabf650232c8",
  code: "<value>",
};
```

## Fields

| Field                                               | Type                                                | Required                                            | Description                                         |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `thoughts`                                          | *string*                                            | :heavy_minus_sign:                                  | N/A                                                 |
| `id`                                                | *string*                                            | :heavy_check_mark:                                  | unique identifier to this step, used for step cache |
| `code`                                              | *string*                                            | :heavy_check_mark:                                  | N/A                                                 |
| `fragment`                                          | *boolean*                                           | :heavy_minus_sign:                                  | N/A                                                 |
| `environment`                                       | *string*                                            | :heavy_minus_sign:                                  | default NODE                                        |
| `timeout`                                           | *number*                                            | :heavy_minus_sign:                                  | Max seconds for the code to complete                |
| `type`                                              | *string*                                            | :heavy_check_mark:                                  | N/A                                                 |
| `envKey`                                            | *string*                                            | :heavy_minus_sign:                                  | N/A                                                 |