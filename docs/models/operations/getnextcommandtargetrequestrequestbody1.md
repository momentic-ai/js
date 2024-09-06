# GetNextCommandTargetRequestRequestBody1

## Example Usage

```typescript
import { GetNextCommandTargetRequestRequestBody1 } from "momentic/models/operations";

let value: GetNextCommandTargetRequestRequestBody1 = {
    elementDescriptor: "<value>",
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                                                 | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `elementDescriptor`                                                                                                                    | *string*                                                                                                                               | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `a11yData`                                                                                                                             | [operations.GetNextCommandTargetRequestRequestBodyA11yData](../../models/operations/getnextcommandtargetrequestrequestbodya11ydata.md) | :heavy_minus_sign:                                                                                                                     | DEPRECATED: new a11y cache is stored in DB and resolved into the 'cache' field                                                         |