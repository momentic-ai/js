# SuccessCommand

## Example Usage

```typescript
import { SuccessCommand } from "momentic/models/components";

let value: SuccessCommand = {
  id: "f69280d1-ba77-4a89-abf7-37ae4203ce5e",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `thoughts`                                                                     | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `id`                                                                           | *string*                                                                       | :heavy_check_mark:                                                             | unique identifier to this step, used for step cache                            |
| `type`                                                                         | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `condition`                                                                    | [components.AIAssertionCommand](../../models/components/aiassertioncommand.md) | :heavy_minus_sign:                                                             | N/A                                                                            |