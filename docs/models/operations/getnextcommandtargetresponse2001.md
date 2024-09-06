# GetNextCommandTargetResponse2001

## Example Usage

```typescript
import { GetNextCommandTargetResponse2001 } from "momentic/models/operations";

let value: GetNextCommandTargetResponse2001 = {
    elementDescriptor: "<value>",
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                   | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `elementDescriptor`                                                                                                      | *string*                                                                                                                 | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `a11yData`                                                                                                               | [operations.GetNextCommandTargetResponse200A11yData](../../models/operations/getnextcommandtargetresponse200a11ydata.md) | :heavy_minus_sign:                                                                                                       | DEPRECATED: new a11y cache is stored in DB and resolved into the 'cache' field                                           |