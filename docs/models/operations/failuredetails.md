# FailureDetails

## Example Usage

```typescript
import { FailureDetails } from "momentic/models/operations";

let value: FailureDetails = {
  errorMessage: "<value>",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `errorMessage`                                                         | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `errorStack`                                                           | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `classification`                                                       | [operations.Classification](../../models/operations/classification.md) | :heavy_minus_sign:                                                     | N/A                                                                    |