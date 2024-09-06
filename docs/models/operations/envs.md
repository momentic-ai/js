# Envs

## Example Usage

```typescript
import { Envs } from "momentic/models/operations";

let value: Envs = {
    name: "<value>",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `name`                                                                     | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        |
| `default`                                                                  | *boolean*                                                                  | :heavy_minus_sign:                                                         | N/A                                                                        |
| `defaultOnLocal`                                                           | *boolean*                                                                  | :heavy_minus_sign:                                                         | DEPRECATED: migrated to default instead                                    |
| `defaultOnCloud`                                                           | *boolean*                                                                  | :heavy_minus_sign:                                                         | DEPRECATED: migrated to default instead                                    |
| `fixtures`                                                                 | *string*[]                                                                 | :heavy_minus_sign:                                                         | Name of the fixture (must be available locally in the fixtures directory). |