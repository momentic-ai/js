# Advanced

## Example Usage

```typescript
import { Advanced } from "@momentic/js/models/components";

let value: Advanced = {};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `disableAICaching`                                                             | *boolean*                                                                      | :heavy_minus_sign:                                                             | N/A                                                                            |
| `viewport`                                                                     | [components.Viewport](../../models/components/viewport.md)                     | :heavy_minus_sign:                                                             | N/A                                                                            |
| `browserType`                                                                  | [components.BrowserType](../../models/components/browsertype.md)               | :heavy_minus_sign:                                                             | N/A                                                                            |
| `pageLoadTimeoutMs`                                                            | *number*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `smartWaitingTimeoutMs`                                                        | *number*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `extraHeaders`                                                                 | Record<string, *string*>                                                       | :heavy_minus_sign:                                                             | HTTP headers to be sent on every request                                       |
| `userAgent`                                                                    | *string*                                                                       | :heavy_minus_sign:                                                             | N/A                                                                            |
| `basicAuthorization`                                                           | [components.BasicAuthorization](../../models/components/basicauthorization.md) | :heavy_minus_sign:                                                             | N/A                                                                            |
| `localChromeExtensionPaths`                                                    | *string*[]                                                                     | :heavy_minus_sign:                                                             | N/A                                                                            |