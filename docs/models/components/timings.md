# Timings

## Example Usage

```typescript
import { Timings } from "@momentic/js/models/components";

let value: Timings = {
  send: 5759.46,
  wait: 9292.96,
  receive: 3185.69,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `blocked`          | *number*           | :heavy_minus_sign: | N/A                |
| `dns`              | *number*           | :heavy_minus_sign: | N/A                |
| `connect`          | *number*           | :heavy_minus_sign: | N/A                |
| `send`             | *number*           | :heavy_check_mark: | N/A                |
| `wait`             | *number*           | :heavy_check_mark: | N/A                |
| `receive`          | *number*           | :heavy_check_mark: | N/A                |
| `ssl`              | *number*           | :heavy_minus_sign: | N/A                |
| `comment`          | *string*           | :heavy_minus_sign: | N/A                |