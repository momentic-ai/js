# FileUploadCommand

## Example Usage

```typescript
import { FileUploadCommand } from "momentic/models/components";

let value: FileUploadCommand = {
  id: "789fd871-f99d-4d2e-bd12-1aa6f1e674bd",
  fileSource: {
    url: "https://ancient-encouragement.org",
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