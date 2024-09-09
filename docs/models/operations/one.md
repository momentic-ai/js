# One

## Example Usage

```typescript
import { One } from "momentic/models/operations";

let value: One = {
  elementDescriptor: "<value>",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `type`                                                                         | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `elementDescriptor`                                                            | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `a11yData`                                                                     | [operations.A11yData](../../models/operations/a11ydata.md)                     | :heavy_minus_sign:                                                             | DEPRECATED: new a11y cache is stored in DB and resolved into the 'cache' field |