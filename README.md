# momentic

Developer-friendly & type-safe Typescript SDK specifically catered to leverage *momentic* API.

<div align="left">
    <a href="https://www.speakeasy.com/?utm_source=momentic&utm_campaign=typescript"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" style="width: 100px; height: 28px;" />
    </a>
</div>

<!-- Start Summary [summary] -->
## Summary

Momentic API: The Momentic REST API. Please see https://docs.momentic.ai for more details.
<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents

* [SDK Installation](#sdk-installation)
* [Requirements](#requirements)
* [SDK Example Usage](#sdk-example-usage)
* [Available Resources and Operations](#available-resources-and-operations)
* [Standalone functions](#standalone-functions)
* [Retries](#retries)
* [Error Handling](#error-handling)
* [Server Selection](#server-selection)
* [Custom HTTP Client](#custom-http-client)
* [Authentication](#authentication)
* [Debugging](#debugging)
<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add momentic
```

### PNPM

```bash
pnpm add momentic
```

### Bun

```bash
bun add momentic
```

### Yarn

```bash
yarn add momentic zod

# Note that Yarn does not install peer dependencies automatically. You will need
# to install zod as shown above.
```

> [!NOTE]
> This package is published with CommonJS and ES Modules (ESM) support.
<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { Momentic } from "momentic";

const momentic = new Momentic({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
    const result = await momentic.authCheck();

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

### [Momentic SDK](docs/sdks/momentic/README.md)

* [authCheck](docs/sdks/momentic/README.md#authcheck) - Check authentication status
* [getFeatureFlags](docs/sdks/momentic/README.md#getfeatureflags) - Get feature flags
* [updateStepCaches](docs/sdks/momentic/README.md#updatestepcaches) - Update step caches
* [getStepCaches](docs/sdks/momentic/README.md#getstepcaches) - Get step caches
* [updateLastUsedAt](docs/sdks/momentic/README.md#updatelastusedat) - Update last used at for cache entries
* [getAllEnvironments](docs/sdks/momentic/README.md#getallenvironments) - Get all resolved environments
* [updateEnvironments](docs/sdks/momentic/README.md#updateenvironments) - Update environments
* [getEnvironmentByName](docs/sdks/momentic/README.md#getenvironmentbyname) - Get a specific environment by name
* [getCachedResult](docs/sdks/momentic/README.md#getcachedresult) - Get cached result
* [setCachedResult](docs/sdks/momentic/README.md#setcachedresult) - Set cached result
* [tryAcquireLock](docs/sdks/momentic/README.md#tryacquirelock) - Try to acquire a lock
* [releaseLock](docs/sdks/momentic/README.md#releaselock) - Release a lock
* [createRun](docs/sdks/momentic/README.md#createrun) - Create a new run
* [updateRun](docs/sdks/momentic/README.md#updaterun) - Update an existing run
* [getRunStatuses](docs/sdks/momentic/README.md#getrunstatuses) - Get run statuses
* [uploadProposedSteps](docs/sdks/momentic/README.md#uploadproposedsteps) - Upload set of proposed steps
* [uploadScreenshot](docs/sdks/momentic/README.md#uploadscreenshot) - Upload a screenshot
* [getSuiteRunStatuses](docs/sdks/momentic/README.md#getsuiterunstatuses) - Get suite run statuses
* [queueSuites](docs/sdks/momentic/README.md#queuesuites) - Queue suites
* [getAllTestIds](docs/sdks/momentic/README.md#getalltestids) - Get all test IDs
* [exportTests](docs/sdks/momentic/README.md#exporttests) - Export tests as YAML
* [updateTestsWithYAML](docs/sdks/momentic/README.md#updatetestswithyaml) - Update tests with YAML representation
* [queueTests](docs/sdks/momentic/README.md#queuetests) - Queue multiple test runs
* [queueSingleTest](docs/sdks/momentic/README.md#queuesingletest) - Queue a single test run
* [getTest](docs/sdks/momentic/README.md#gettest) - Get a single test
* [updateTest](docs/sdks/momentic/README.md#updatetest) - Update a single test
* [getNextCommand](docs/sdks/momentic/README.md#getnextcommand) - Get the next command for the web agent
* [getAssertionResult](docs/sdks/momentic/README.md#getassertionresult) - Get the assertion result for the web agent
* [locateElement](docs/sdks/momentic/README.md#locateelement) - Locate an element for the web agent
* [splitGoal](docs/sdks/momentic/README.md#splitgoal) - Split a goal into granular goals
* [reverseMappedDescription](docs/sdks/momentic/README.md#reversemappeddescription) - Get reverse mapped description
* [textExtraction](docs/sdks/momentic/README.md#textextraction) - Extract text from the web page
* [recommendChunks](docs/sdks/momentic/README.md#recommendchunks) - Get recommended chunks
* [templateMatching](docs/sdks/momentic/README.md#templatematching) - Perform template matching
* [resultClassification](docs/sdks/momentic/README.md#resultclassification) - Classify test results
* [autohealSection](docs/sdks/momentic/README.md#autohealsection) - Get autohealing proposal for a section
* [keywordExtractor](docs/sdks/momentic/README.md#keywordextractor) - Extract keywords
* [smsSend](docs/sdks/momentic/README.md#smssend) - Send an SMS message
* [smsFetchLatest](docs/sdks/momentic/README.md#smsfetchlatest) - Fetch the latest SMS message
* [emailFetchLatest](docs/sdks/momentic/README.md#emailfetchlatest) - Fetch the latest email
<!-- End Available Resources and Operations [operations] -->

<!-- Start Standalone functions [standalone-funcs] -->
## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [authCheck](docs/sdks/momentic/README.md#authcheck)
- [autohealSection](docs/sdks/momentic/README.md#autohealsection)
- [createRun](docs/sdks/momentic/README.md#createrun)
- [emailFetchLatest](docs/sdks/momentic/README.md#emailfetchlatest)
- [exportTests](docs/sdks/momentic/README.md#exporttests)
- [getAllEnvironments](docs/sdks/momentic/README.md#getallenvironments)
- [getAllTestIds](docs/sdks/momentic/README.md#getalltestids)
- [getAssertionResult](docs/sdks/momentic/README.md#getassertionresult)
- [getCachedResult](docs/sdks/momentic/README.md#getcachedresult)
- [getEnvironmentByName](docs/sdks/momentic/README.md#getenvironmentbyname)
- [getFeatureFlags](docs/sdks/momentic/README.md#getfeatureflags)
- [getNextCommand](docs/sdks/momentic/README.md#getnextcommand)
- [getRunStatuses](docs/sdks/momentic/README.md#getrunstatuses)
- [getStepCaches](docs/sdks/momentic/README.md#getstepcaches)
- [getSuiteRunStatuses](docs/sdks/momentic/README.md#getsuiterunstatuses)
- [getTest](docs/sdks/momentic/README.md#gettest)
- [keywordExtractor](docs/sdks/momentic/README.md#keywordextractor)
- [locateElement](docs/sdks/momentic/README.md#locateelement)
- [queueSingleTest](docs/sdks/momentic/README.md#queuesingletest)
- [queueSuites](docs/sdks/momentic/README.md#queuesuites)
- [queueTests](docs/sdks/momentic/README.md#queuetests)
- [recommendChunks](docs/sdks/momentic/README.md#recommendchunks)
- [releaseLock](docs/sdks/momentic/README.md#releaselock)
- [resultClassification](docs/sdks/momentic/README.md#resultclassification)
- [reverseMappedDescription](docs/sdks/momentic/README.md#reversemappeddescription)
- [setCachedResult](docs/sdks/momentic/README.md#setcachedresult)
- [smsFetchLatest](docs/sdks/momentic/README.md#smsfetchlatest)
- [smsSend](docs/sdks/momentic/README.md#smssend)
- [splitGoal](docs/sdks/momentic/README.md#splitgoal)
- [templateMatching](docs/sdks/momentic/README.md#templatematching)
- [textExtraction](docs/sdks/momentic/README.md#textextraction)
- [tryAcquireLock](docs/sdks/momentic/README.md#tryacquirelock)
- [updateEnvironments](docs/sdks/momentic/README.md#updateenvironments)
- [updateLastUsedAt](docs/sdks/momentic/README.md#updatelastusedat)
- [updateRun](docs/sdks/momentic/README.md#updaterun)
- [updateStepCaches](docs/sdks/momentic/README.md#updatestepcaches)
- [updateTest](docs/sdks/momentic/README.md#updatetest)
- [updateTestsWithYAML](docs/sdks/momentic/README.md#updatetestswithyaml)
- [uploadProposedSteps](docs/sdks/momentic/README.md#uploadproposedsteps)
- [uploadScreenshot](docs/sdks/momentic/README.md#uploadscreenshot)


</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { Momentic } from "momentic";

const momentic = new Momentic({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
    const result = await momentic.authCheck({
        retries: {
            strategy: "backoff",
            backoff: {
                initialInterval: 1,
                maxInterval: 50,
                exponent: 1.1,
                maxElapsedTime: 100,
            },
            retryConnectionErrors: false,
        },
    });

    // Handle the result
    console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { Momentic } from "momentic";

const momentic = new Momentic({
    retryConfig: {
        strategy: "backoff",
        backoff: {
            initialInterval: 1,
            maxInterval: 50,
            exponent: 1.1,
            maxElapsedTime: 100,
        },
        retryConnectionErrors: false,
    },
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
    const result = await momentic.authCheck();

    // Handle the result
    console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

All SDK methods return a response object or throw an error. If Error objects are specified in your OpenAPI Spec, the SDK will throw the appropriate Error type.

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

Validation errors can also occur when either method arguments or data returned from the server do not match the expected format. The `SDKValidationError` that is thrown as a result will capture the raw value that failed validation in an attribute called `rawValue`. Additionally, a `pretty()` method is available on this error that can be used to log a nicely formatted string since validation errors can list many issues and the plain error string may be difficult read when debugging. 


```typescript
import { Momentic } from "momentic";
import { SDKValidationError } from "momentic/models/errors";

const momentic = new Momentic({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
    let result;
    try {
        result = await momentic.authCheck();

        // Handle the result
        console.log(result);
    } catch (err) {
        switch (true) {
            case err instanceof SDKValidationError: {
                // Validation errors can be pretty-printed
                console.error(err.pretty());
                // Raw value may also be inspected
                console.error(err.rawValue);
                return;
            }
            default: {
                throw err;
            }
        }
    }
}

run();

```
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| # | Server | Variables |
| - | ------ | --------- |
| 0 | `https://api.momentic.ai` | None |
| 1 | `https://api.staging.momentic.ai` | None |

```typescript
import { Momentic } from "momentic";

const momentic = new Momentic({
    serverIdx: 1,
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
    const result = await momentic.authCheck();

    // Handle the result
    console.log(result);
}

run();

```


### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL` optional parameter when initializing the SDK client instance. For example:

```typescript
import { Momentic } from "momentic";

const momentic = new Momentic({
    serverURL: "https://api.momentic.ai",
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
    const result = await momentic.authCheck();

    // Handle the result
    console.log(result);
}

run();

```
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { Momentic } from "momentic";
import { HTTPClient } from "momentic/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new Momentic({ httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name         | Type         | Scheme       |
| ------------ | ------------ | ------------ |
| `bearerAuth` | http         | HTTP Bearer  |

To authenticate with the API the `bearerAuth` parameter must be set when initializing the SDK client instance. For example:
```typescript
import { Momentic } from "momentic";

const momentic = new Momentic({
    bearerAuth: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
    const result = await momentic.authCheck();

    // Handle the result
    console.log(result);
}

run();

```
<!-- End Authentication [security] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { Momentic } from "momentic";

const sdk = new Momentic({ debugLogger: console });
```
<!-- End Debugging [debug] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. Any manual changes added to internal files will be overwritten on the next generation. 
We look forward to hearing your feedback. Feel free to open a PR or an issue with a proof of concept and we'll do our best to include it in a future release. 

### SDK Created by [Speakeasy](https://www.speakeasy.com/?utm_source=momentic&utm_campaign=typescript)
