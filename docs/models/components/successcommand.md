# SuccessCommand

## Example Usage

```typescript
import { SuccessCommand } from "momentic/models/components";

let value: SuccessCommand = {
  id: "737ae420-3ce5-4e6a-95d8-a0d446ce2af7",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `thoughts`                                                                     | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `id`                                                                           | *string*                                                                       | :heavy_check_mark:                                                             | unique identifier to this step, used for step cache                            |
| `type`                                                                         | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `condition`                                                                    | [components.AIAssertionCommand](../../models/components/aiassertioncommand.md) | :heavy_minus_sign:                                                             | N/A                                                                            |