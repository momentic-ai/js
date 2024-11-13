# SuccessCommand

## Example Usage

```typescript
import { SuccessCommand } from "@momentic/js/models/components";

let value: SuccessCommand = {
  id: "4f305808-db9f-4fd9-a709-fd52cbfd8175",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `thoughts`                                                                     | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `id`                                                                           | *string*                                                                       | :heavy_check_mark:                                                             | unique identifier to this step, used for step cache                            |
| `type`                                                                         | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `condition`                                                                    | [components.AIAssertionCommand](../../models/components/aiassertioncommand.md) | :heavy_minus_sign:                                                             | N/A                                                                            |