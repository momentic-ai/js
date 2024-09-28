# FileUploadCommand

## Example Usage

```typescript
import { FileUploadCommand } from "@momentic/js/models/components";

let value: FileUploadCommand = {
  id: "0e81df70-16e2-4d07-aa09-f2b92008fab7",
  fileSource: {
    url: "https://ugly-rim.org/",
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