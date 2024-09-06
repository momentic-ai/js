# ResultClassificationRequestBody

## Example Usage

```typescript
import { ResultClassificationRequestBody } from "momentic/models/operations";

let value: ResultClassificationRequestBody = {
    results: [
        {
            key: "<value>",
        },
    ],
    errorMessage: "<value>",
};
```

## Fields

| Field                   | Type                    | Required                | Description             |
| ----------------------- | ----------------------- | ----------------------- | ----------------------- |
| `results`               | Record<string, *any*>[] | :heavy_check_mark:      | N/A                     |
| `errorMessage`          | *string*                | :heavy_check_mark:      | N/A                     |
| `errorStack`            | *string*                | :heavy_minus_sign:      | N/A                     |