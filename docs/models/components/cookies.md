# Cookies

## Example Usage

```typescript
import { Cookies } from "@momentic/js/models/components";

let value: Cookies = {
  name: "<value>",
  value: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `name`             | *string*           | :heavy_check_mark: | N/A                |
| `value`            | *string*           | :heavy_check_mark: | N/A                |
| `path`             | *string*           | :heavy_minus_sign: | N/A                |
| `domain`           | *string*           | :heavy_minus_sign: | N/A                |
| `expires`          | *string*           | :heavy_minus_sign: | N/A                |
| `httpOnly`         | *boolean*          | :heavy_minus_sign: | N/A                |
| `secure`           | *boolean*          | :heavy_minus_sign: | N/A                |
| `comment`          | *string*           | :heavy_minus_sign: | N/A                |