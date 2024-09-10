# FileUploadCommand

## Example Usage

```typescript
import { FileUploadCommand } from "momentic/models/components";

let value: FileUploadCommand = {
  id: "82aa4825-62f2-422e-9817-ee17cbe61e6b",
  fileSource: {
    url: "http://right-mouse.biz",
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