# FileUploadCommand

## Example Usage

```typescript
import { FileUploadCommand } from "momentic/models/components";

let value: FileUploadCommand = {
  id: "e6b7b95b-c0ab-43c2-8c4f-3789fd871f99",
  fileSource: {
    url: "https://sugary-choice.org",
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