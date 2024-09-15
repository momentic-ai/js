<!-- Start SDK Example Usage [usage] -->
```typescript
import { Momentic } from "@momentic/js";

const momentic = new Momentic({
  apiKey: process.env["MOMENTIC_API_KEY"] ?? "",
});

async function run() {
  const result = await momentic.getRunStatuses();

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->