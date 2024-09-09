# GetTestResponseBody

Test retrieved successfully

## Example Usage

```typescript
import { GetTestResponseBody } from "momentic/models/operations";

let value: GetTestResponseBody = {
  id: "<id>",
  name: "<value>",
  schemaVersion: "<value>",
  advanced: {},
  retries: 3250.47,
  steps: [
    {
      "key": "<value>",
    },
  ],
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `id`                                                               | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `name`                                                             | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `baseUrl`                                                          | *string*                                                           | :heavy_minus_sign:                                                 | N/A                                                                |
| `schemaVersion`                                                    | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `advanced`                                                         | [operations.Advanced](../../models/operations/advanced.md)         | :heavy_check_mark:                                                 | N/A                                                                |
| `retries`                                                          | *number*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `envs`                                                             | [operations.Envs](../../models/operations/envs.md)[]               | :heavy_minus_sign:                                                 | N/A                                                                |
| `parameters`                                                       | [operations.ParametersT](../../models/operations/parameterst.md)[] | :heavy_minus_sign:                                                 | N/A                                                                |
| `steps`                                                            | Record<string, *any*>[]                                            | :heavy_check_mark:                                                 | N/A                                                                |