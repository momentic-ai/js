<!-- Start SDK Example Usage [usage] -->
```typescript
import { Momentic } from "momentic";

const momentic = new Momentic({
    apiKey: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
    const result = await momentic.authCheck();

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->