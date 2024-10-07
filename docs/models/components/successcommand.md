# SuccessCommand

## Example Usage

```typescript
import { SuccessCommand } from "@momentic/js/models/components";

let value: SuccessCommand = {
  id: "3cd87968-66b1-42dc-b46e-d9306add0353",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `thoughts`                                                                     | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `id`                                                                           | *string*                                                                       | :heavy_check_mark:                                                             | unique identifier to this step, used for step cache                            |
| `type`                                                                         | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `condition`                                                                    | [components.AIAssertionCommand](../../models/components/aiassertioncommand.md) | :heavy_minus_sign:                                                             | N/A                                                                            |