# FileUploadCommand

## Example Usage

```typescript
import { FileUploadCommand } from "@momentic/js/models/components";

let value: FileUploadCommand = {
  id: "51cbe31b-325d-4807-9a89-3d8bf6e00943",
  fileSource: {
    url: "https://shadowy-metal.net/",
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
| `filename`                                          | *string*                                            | :heavy_minus_sign:                                  | N/A                                                 |