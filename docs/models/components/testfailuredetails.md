# TestFailureDetails

## Example Usage

```typescript
import { TestFailureDetails } from "momentic/models/components";

let value: TestFailureDetails = {
  errorMessage: "<value>",
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `errorMessage`                                                                             | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `errorStack`                                                                               | *string*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `classification`                                                                           | [components.TestResultClassification](../../models/components/testresultclassification.md) | :heavy_minus_sign:                                                                         | N/A                                                                                        |