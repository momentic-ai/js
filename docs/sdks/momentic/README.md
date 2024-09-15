# Momentic SDK

## Overview

Momentic API: The Momentic REST API. Please see https://docs.momentic.ai for more details.

### Available Operations

* [getRunStatuses](#getrunstatuses) - Get run statuses
* [getRun](#getrun) - Get run statuses
* [queueSteps](#queuesteps) - Queue steps run

## getRunStatuses

Get run statuses

### Example Usage

```typescript
import { Momentic } from "@momentic/js";

const momentic = new Momentic({
  apiKey: process.env["MOMENTIC_API_KEY"] ?? "",
});

async function run() {
  const result = await momentic.getRunStatuses();
  
  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MomenticCore } from "@momentic/js/core.js";
import { getRunStatuses } from "@momentic/js/funcs/getRunStatuses.js";

// Use `MomenticCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const momentic = new MomenticCore({
  apiKey: process.env["MOMENTIC_API_KEY"] ?? "",
});

async function run() {
  const res = await getRunStatuses(momentic);

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [string[]](../../models/.md)                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.GetRunStatusesResponse[]](../../models/.md)\>**

### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |


## getRun

Get run statuses

### Example Usage

```typescript
import { Momentic } from "@momentic/js";

const momentic = new Momentic({
  apiKey: process.env["MOMENTIC_API_KEY"] ?? "",
});

async function run() {
  const result = await momentic.getRun({
    runId: "<value>",
  });
  
  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MomenticCore } from "@momentic/js/core.js";
import { getRun } from "@momentic/js/funcs/getRun.js";

// Use `MomenticCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const momentic = new MomenticCore({
  apiKey: process.env["MOMENTIC_API_KEY"] ?? "",
});

async function run() {
  const res = await getRun(momentic, {
    runId: "<value>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetRunRequest](../../models/operations/getrunrequest.md)                                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.GetRunResponse](../../models/components/getrunresponse.md)\>**

### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |


## queueSteps

Queue steps run

### Example Usage

```typescript
import { Momentic } from "@momentic/js";

const momentic = new Momentic({
  apiKey: process.env["MOMENTIC_API_KEY"] ?? "",
});

async function run() {
  const result = await momentic.queueSteps();
  
  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { MomenticCore } from "@momentic/js/core.js";
import { queueSteps } from "@momentic/js/funcs/queueSteps.js";

// Use `MomenticCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const momentic = new MomenticCore({
  apiKey: process.env["MOMENTIC_API_KEY"] ?? "",
});

async function run() {
  const res = await queueSteps(momentic);

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.QueueStepsRequest](../../models/components/queuestepsrequest.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.QueueStepsResponse](../../models/components/queuestepsresponse.md)\>**

### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
