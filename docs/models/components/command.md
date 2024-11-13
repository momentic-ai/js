# Command


## Supported Types

### `components.ClickCommand`

```typescript
const value: components.ClickCommand = {
  id: "b692275f-cbe1-489f-8431-0eac4917fe5f",
  target: {
    pixels: {
      x: 9413.78,
      y: 7992.03,
    },
  },
};
```

### `components.TypeCommand`

```typescript
const value: components.TypeCommand = {
  id: "ad4d9052-f77a-452d-a383-1dffec516320",
  value: "<value>",
};
```

### `components.PressCommand`

```typescript
const value: components.PressCommand = {
  id: "0c211a36-8db4-4204-947a-b462c0bcc459",
  value: "<value>",
};
```

### `components.SelectOptionCommand`

```typescript
const value: components.SelectOptionCommand = {
  id: "5370c184-9fa0-4688-aa42-6f2e87e7b6eb",
  target: {
    elementDescriptor: "<value>",
  },
};
```

### `components.NavigateCommand`

```typescript
const value: components.NavigateCommand = {
  id: "ca32cf79-d7f9-4ded-82a6-164d0f55026e",
  url: "https://troubled-illusion.biz",
};
```

### `components.ScrollDownCommand`

```typescript
const value: components.ScrollDownCommand = {
  id: "39006143-4201-49ff-962a-7f1c43a3a868",
};
```

### `components.ScrollUpCommand`

```typescript
const value: components.ScrollUpCommand = {
  id: "b65de035-dffe-44f3-b1f3-b0be465b3274",
};
```

### `components.AIAssertionCommand`

```typescript
const value: components.AIAssertionCommand = {
  id: "38fadfcb-ff71-4426-a296-ef849e684763",
  assertion: "<value>",
};
```

### `components.HoverCommand`

```typescript
const value: components.HoverCommand = {
  id: "458c5ed0-4715-4ba9-8b35-ae840b058e16",
  target: {
    elementDescriptor: "<value>",
  },
};
```

### `components.WaitCommand`

```typescript
const value: components.WaitCommand = {
  id: "94319baf-0a99-4f0b-bd85-c178b1369e92",
  delay: 8717.86,
};
```

### `components.SuccessCommand`

```typescript
const value: components.SuccessCommand = {
  id: "8e8edfe0-26f4-42e7-9e2a-71b3000ebea8",
};
```

### `components.AIWaitCommand`

```typescript
const value: components.AIWaitCommand = {
  id: "f576f25a-1974-4385-b75f-2159a6f5badf",
  assertion: "<value>",
};
```

### `components.AIExtractCommand`

```typescript
const value: components.AIExtractCommand = {
  id: "cb521368-cf11-49bd-9ef6-62aad17932d0",
  goal: "<value>",
};
```

### `components.AuthLoadCommand`

```typescript
const value: components.AuthLoadCommand = {
  id: "17f6d146-6a5b-4a66-a91d-ab816650b19b",
  storageState: "<value>",
};
```

### `components.AuthSaveCommand`

```typescript
const value: components.AuthSaveCommand = {
  id: "f1d08685-308d-4531-9131-411d28c72368",
};
```

### `components.CaptchaCommand`

```typescript
const value: components.CaptchaCommand = {
  id: "cce0e6eb-fc58-4654-a7a4-8120f0291ebf",
};
```

### `components.CookieCommand`

```typescript
const value: components.CookieCommand = {
  id: "48e84e50-35d7-475e-8ff6-fca332e477cd",
  value: "<value>",
};
```

### `components.DialogCommand`

```typescript
const value: components.DialogCommand = {
  id: "6dd12416-1939-41fe-a634-70a66cbf5ec5",
};
```

### `components.DragCommand`

```typescript
const value: components.DragCommand = {
  id: "4d1326b8-7061-43e3-8dc2-91bac7e04b62",
  fromTarget: {
    pixels: {
      x: 4731.43,
      y: 8822.84,
    },
  },
  toTarget: {
    pixels: {
      x: 4097.26,
      y: 3735.11,
    },
  },
};
```

### `components.ElementAssertionCommand`

```typescript
const value: components.ElementAssertionCommand = {
  id: "8eb0beb2-725e-4e45-a9f2-4d7e2855765e",
  target: {
    pixels: {
      x: 2899.13,
      y: 5777.09,
    },
  },
  assertion: {
    condition: "EDITABLE",
  },
};
```

### `components.FileUploadCommand`

```typescript
const value: components.FileUploadCommand = {
  id: "5cb2d777-997d-4a66-ac53-0ee1521e0f1d",
  fileSource: {
    url: "https://grounded-retrospectivity.biz/",
  },
};
```

### `components.GoBackCommand`

```typescript
const value: components.GoBackCommand = {
  id: "a87e8db0-c3e0-4517-8d42-5d231b64b5bd",
};
```

### `components.GoForwardCommand`

```typescript
const value: components.GoForwardCommand = {
  id: "f242578d-e391-4755-b7b1-eb2f8f38449e",
};
```

### `components.JavaScriptCommand`

```typescript
const value: components.JavaScriptCommand = {
  id: "b8e7dd3c-0538-4b18-9f3a-907b0e803f91",
  code: "<value>",
};
```

### `components.LocalStorageCommand`

```typescript
const value: components.LocalStorageCommand = {
  id: "706739c3-9afc-4d72-af27-1ffb5442825a",
  key: "<key>",
  value: "<value>",
};
```

### `components.MouseDragCommand`

```typescript
const value: components.MouseDragCommand = {
  id: "06ad7f40-74d3-44cb-a8b6-00810fd20f42",
  deltaX: "<value>",
  deltaY: "<value>",
};
```

### `components.NewTabCommand`

```typescript
const value: components.NewTabCommand = {
  id: "14fa86c2-fd90-4be8-b51c-e1c0f984e4df",
  url: "https://biodegradable-integer.info",
};
```

### `components.PageAssertionCommand`

```typescript
const value: components.PageAssertionCommand = {
  id: "36527480-ed8d-4f1a-8ff9-2903f5a4fb5c",
  assertion: {
    value: "<value>",
  },
};
```

### `components.RefreshCommand`

```typescript
const value: components.RefreshCommand = {
  id: "63a16485-b0a3-44cf-95d1-ac26e1096ce4",
};
```

### `components.RequestCommand`

```typescript
const value: components.RequestCommand = {
  id: "79fb64f2-bea6-435b-baed-de4568a4064f",
  url: "https://qualified-flu.name",
};
```

### `components.GraphQLRequestCommand`

```typescript
const value: components.GraphQLRequestCommand = {
  id: "d1c0dc0a-822c-49ff-9f1f-37c39211506a",
  url: "https://beneficial-duster.biz/",
  query: "<value>",
};
```

### `components.ScrollLeftCommand`

```typescript
const value: components.ScrollLeftCommand = {
  id: "f2c998f5-c86f-4916-bcbe-4c79ffd5ea60",
};
```

### `components.ScrollRightCommand`

```typescript
const value: components.ScrollRightCommand = {
  id: "8cbc4c87-a014-4f25-b055-fd60da2f1d46",
};
```

### `components.TabCommand`

```typescript
const value: components.TabCommand = {
  id: "af91ecb0-62db-4efc-af90-05ddf10e48f6",
};
```

### `components.VisualDiffCommand`

```typescript
const value: components.VisualDiffCommand = {
  id: "6c83448b-fbc2-456a-a445-c9115cbbc488",
};
```

### `components.FocusCommand`

```typescript
const value: components.FocusCommand = {
  id: "f4ca9cf0-2c18-434b-a0d7-88a515285ff9",
  target: {
    pixels: {
      x: 8872.83,
      y: 7650.70,
    },
  },
};
```

### `components.BlurCommand`

```typescript
const value: components.BlurCommand = {
  id: "5537fe10-e83a-4a14-9032-3a012544cf8f",
};
```

### `components.WaitUrlCommand`

```typescript
const value: components.WaitUrlCommand = {
  id: "1647a7ee-b726-4b41-beb9-cd7ee4988f4f",
  url: "https://subtle-runway.net/",
};
```

