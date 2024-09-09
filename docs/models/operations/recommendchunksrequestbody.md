# RecommendChunksRequestBody

## Example Usage

```typescript
import { RecommendChunksRequestBody } from "momentic/models/operations";

let value: RecommendChunksRequestBody = {
  description: "Implemented tertiary interface",
  tokenLimit: 265.22,
  chunks: [
    {
      content: "<value>",
      ids: [
        "<value>",
      ],
      tokenLength: 7505.95,
    },
  ],
  numRecs: 6256.37,
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `description`                                            | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `tokenLimit`                                             | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `chunks`                                                 | [operations.Chunks](../../models/operations/chunks.md)[] | :heavy_check_mark:                                       | N/A                                                      |
| `numRecs`                                                | *number*                                                 | :heavy_check_mark:                                       | N/A                                                      |