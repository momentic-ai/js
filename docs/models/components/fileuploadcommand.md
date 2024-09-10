# FileUploadCommand

## Example Usage

```typescript
import { FileUploadCommand } from "momentic/models/components";

let value: FileUploadCommand = {
  id: "1f99dd2e-fd12-41aa-af1e-674bdb04f157",
  fileSource: {
    url: "http://horrible-aide.name",
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