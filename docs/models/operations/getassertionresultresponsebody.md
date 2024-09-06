# GetAssertionResultResponseBody

Assertion result retrieved successfully

## Example Usage

```typescript
import { GetAssertionResultResponseBody } from "momentic/models/operations";

let value: GetAssertionResultResponseBody = {
    thoughts: "<value>",
    result: false,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `thoughts`         | *string*           | :heavy_check_mark: | N/A                |
| `result`           | *boolean*          | :heavy_check_mark: | N/A                |
| `relevantElements` | *number*[]         | :heavy_minus_sign: | N/A                |