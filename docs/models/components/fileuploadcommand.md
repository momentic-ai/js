# FileUploadCommand

## Example Usage

```typescript
import { FileUploadCommand } from "@momentic/js/models/components";

let value: FileUploadCommand = {
  id: "be61e6b7-b95b-4c0a-b3c2-0c4f3789fd87",
  fileSource: {
    url: "http://weekly-overexertion.name",
  },
};
```

## Fields

| Field                                               | Type                                                | Required                                            | Description                                         |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `thoughts`                                          | *string*                                            | :heavy_minus_sign:                                  | N/A                                                 |
| `id`                                                | *string*                                            | :heavy_check_mark:                                  | unique identifier to this step, used for step cache |
| `type`                                              | *string*                                            | :heavy_check_mark:                                  | N/A                                                 |
| `fileSource`                                        | *components.FileSource*                             | :heavy_check_mark:                                  | N/A                                                 |