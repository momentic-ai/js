# JavaScriptCommand

## Example Usage

```typescript
import { JavaScriptCommand } from "momentic/models/components";

let value: JavaScriptCommand = {
  id: "f93f5f06-42da-4c7a-b515-cc413aa63aae",
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