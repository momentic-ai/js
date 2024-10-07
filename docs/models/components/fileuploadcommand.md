# FileUploadCommand

## Example Usage

```typescript
import { FileUploadCommand } from "@momentic/js/models/components";

let value: FileUploadCommand = {
  id: "5659e2e0-a6cb-47a8-9c78-494922664200",
  fileSource: {
    url: "https://severe-intent.org/",
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