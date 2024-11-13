# PostData

## Example Usage

```typescript
import { PostData } from "@momentic/js/models/components";

let value: PostData = {
  mimeType: "<value>",
  params: [
    {
      name: "<value>",
    },
  ],
  text: "<value>",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `mimeType`                                               | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `params`                                                 | [components.Params](../../models/components/params.md)[] | :heavy_check_mark:                                       | N/A                                                      |
| `text`                                                   | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `comment`                                                | *string*                                                 | :heavy_minus_sign:                                       | N/A                                                      |