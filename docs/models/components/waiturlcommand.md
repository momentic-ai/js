# WaitUrlCommand

## Example Usage

```typescript
import { WaitUrlCommand } from "@momentic/js/models/components";

let value: WaitUrlCommand = {
  id: "f44ec39b-5697-4c06-b59c-12ab9f72a998",
  url: "https://blind-clamp.biz/",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `thoughts`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | unique identifier to this step, used for step cache                                           |
| `type`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `url`                                                                                         | *string*                                                                                      | :heavy_check_mark:                                                                            | Deprecated: url or glob to wait for. New commands should use the discriminated matcher field. |
| `caseInsensitive`                                                                             | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | Whether to ignore case when matching the URL                                                  |
| `negated`                                                                                     | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | Wait for the URL to NOT match the provided matcher instead.                                   |
| `timeout`                                                                                     | *number*                                                                                      | :heavy_minus_sign:                                                                            | Max seconds to wait for the URL to match                                                      |