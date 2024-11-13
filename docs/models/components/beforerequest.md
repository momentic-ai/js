# BeforeRequest

## Example Usage

```typescript
import { BeforeRequest } from "@momentic/js/models/components";

let value: BeforeRequest = {
  lastAccess: "<value>",
  eTag: "<value>",
  hitCount: 5232.48,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `expires`          | *string*           | :heavy_minus_sign: | N/A                |
| `lastAccess`       | *string*           | :heavy_check_mark: | N/A                |
| `eTag`             | *string*           | :heavy_check_mark: | N/A                |
| `hitCount`         | *number*           | :heavy_check_mark: | N/A                |
| `comment`          | *string*           | :heavy_minus_sign: | N/A                |