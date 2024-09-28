# Command


## Supported Types

### `components.ClickCommand`

```typescript
const value: components.ClickCommand = {
  id: "999aa6e5-6ecb-41eb-bf2d-291dc961b7bd",
  target: {
    percentXYLocation: {
      percentX: 117.14,
      percentY: 3599.78,
    },
  },
};
```

### `components.TypeCommand`

```typescript
const value: components.TypeCommand = {
  id: "b28030c3-5eb0-4299-83e9-89b4632fb734",
  value: "<value>",
};
```

### `components.PressCommand`

```typescript
const value: components.PressCommand = {
  id: "64b6201a-78ef-43a4-a0c5-69dad4c2fa3f",
  value: "<value>",
};
```

### `components.SelectOptionCommand`

```typescript
const value: components.SelectOptionCommand = {
  id: "43803657-49d1-482b-8692-275fcbe189f4",
  target: {
    elementDescriptor: "<value>",
  },
  option: "<value>",
};
```

### `components.NavigateCommand`

```typescript
const value: components.NavigateCommand = {
  id: "0eac4917-fe5f-43ff-bcad-4d9052f77a52",
  url: "https://merry-declaration.com/",
};
```

### `components.ScrollDownCommand`

```typescript
const value: components.ScrollDownCommand = {
  id: "dffec516-320b-40c2-a11a-368db420447a",
};
```

### `components.ScrollUpCommand`

```typescript
const value: components.ScrollUpCommand = {
  id: "462c0bcc-4594-4537-90c1-849fa0688a42",
};
```

### `components.AIAssertionCommand`

```typescript
const value: components.AIAssertionCommand = {
  id: "f2e87e7b-6ebb-45ca-932c-f79d7f9ded2a",
  assertion: "<value>",
};
```

### `components.SuccessCommand`

```typescript
const value: components.SuccessCommand = {
  id: "164d0f55-026e-41fd-b753-900614342019",
};
```

### `components.AIWaitCommand`

```typescript
const value: components.AIWaitCommand = {
  id: "f62a7f1c-43a3-4a86-b84b-65de035dffe4",
  assertion: "<value>",
};
```

### `components.AIExtractCommand`

```typescript
const value: components.AIExtractCommand = {
  id: "31f3b0be-465b-4327-84d3-8fadfcbff714",
  goal: "<value>",
};
```

### `components.AuthLoadCommand`

```typescript
const value: components.AuthLoadCommand = {
  id: "6296ef84-9e68-4476-a384-58c5ed04715b",
  storageState: "<value>",
};
```

### `components.AuthSaveCommand`

```typescript
const value: components.AuthSaveCommand = {
  id: "9b35ae84-0b05-48e1-b605-94319baf0a99",
};
```

### `components.CaptchaCommand`

```typescript
const value: components.CaptchaCommand = {
  id: "0bd85c17-8b13-469e-992f-d8e8edfe026f",
};
```

### `components.CookieCommand`

```typescript
const value: components.CookieCommand = {
  id: "2e7e2a71-b300-40eb-9ea8-4f576f25a197",
  value: "<value>",
};
```

### `components.DialogCommand`

```typescript
const value: components.DialogCommand = {
  id: "38575f21-59a6-4f5b-8adf-ecb521368cf1",
};
```

### `components.DragCommand`

```typescript
const value: components.DragCommand = {
  id: "9bdef662-aad1-4793-a2d0-717f6d1466a5",
  fromTarget: {
    percentXYLocation: {
      percentX: 3991.61,
      percentY: 4317.60,
    },
  },
  toTarget: {
    percentXYLocation: {
      percentX: 700.42,
      percentY: 8224.07,
    },
  },
};
```

### `components.ElementAssertionCommand`

```typescript
const value: components.ElementAssertionCommand = {
  id: "ab816650-b19b-4af1-8d08-685308d53113",
  target: {
    elementDescriptor: "<value>",
  },
  assertion: {
    operation: "CONTAINS",
    value: "<value>",
  },
};
```

### `components.FileUploadCommand`

```typescript
const value: components.FileUploadCommand = {
  id: "d28c7236-85cc-4e0e-86eb-fc586547a481",
  fileSource: {
    url: "https://wilted-academics.biz/",
  },
};
```

### `components.GoBackCommand`

```typescript
const value: components.GoBackCommand = {
  id: "91ebf848-e84e-4503-b5d7-75eff6fca332",
};
```

### `components.GoForwardCommand`

```typescript
const value: components.GoForwardCommand = {
  id: "477cd26d-d124-4161-a939-1fe63470a66c",
};
```

### `components.HoverCommand`

```typescript
const value: components.HoverCommand = {
  id: "f5ec594d-1326-4b87-b061-3e3dc291bac7",
  target: {
    elementDescriptor: "<value>",
  },
};
```

### `components.JavaScriptCommand`

```typescript
const value: components.JavaScriptCommand = {
  id: "4b621d7e-b658-4eb0-bbeb-2725ee459f24",
  code: "<value>",
};
```

### `components.LocalStorageCommand`

```typescript
const value: components.LocalStorageCommand = {
  id: "7e285576-5ebb-449c-9c5c-b2d777997da6",
  key: "<key>",
  value: "<value>",
};
```

### `components.MouseDragCommand`

```typescript
const value: components.MouseDragCommand = {
  id: "c530ee15-21e0-4f1d-b955-c5a87e8db0c3",
  deltaX: "<value>",
  deltaY: "<value>",
};
```

### `components.NewTabCommand`

```typescript
const value: components.NewTabCommand = {
  id: "0517d425-d231-4b64-ab5b-d3f242578de3",
  url: "https://lavish-fedora.biz/",
};
```

### `components.PageAssertionCommand`

```typescript
const value: components.PageAssertionCommand = {
  id: "7b1eb2f8-f384-449e-acb8-e7dd3c0538b1",
  assertion: {
    value: "<value>",
  },
};
```

### `components.RefreshCommand`

```typescript
const value: components.RefreshCommand = {
  id: "f3a907b0-e803-4f91-8470-6739c39afcd7",
};
```

### `components.RequestCommand`

```typescript
const value: components.RequestCommand = {
  id: "f271ffb5-4428-425a-ab06-ad7f4074d34c",
  url: "https://same-hello.com",
};
```

### `components.ScrollLeftCommand`

```typescript
const value: components.ScrollLeftCommand = {
  id: "0810fd20-f42b-414f-ba86-c2fd90be851c",
};
```

### `components.ScrollRightCommand`

```typescript
const value: components.ScrollRightCommand = {
  id: "1c0f984e-4dfc-4817-a736-527480ed8df1",
};
```

### `components.TabCommand`

```typescript
const value: components.TabCommand = {
  id: "ff92903f-5a4f-4b5c-b163-a16485b0a34c",
  url: "https://supportive-brook.name/",
};
```

### `components.VisualDiffCommand`

```typescript
const value: components.VisualDiffCommand = {
  id: "c26e1096-ce46-479f-bb64-f2bea635baed",
};
```

### `components.WaitCommand`

```typescript
const value: components.WaitCommand = {
  id: "e4568a40-64fe-4da5-b8d1-c0dc0a822c9f",
  delay: 9926.67,
};
```

### `components.FocusCommand`

```typescript
const value: components.FocusCommand = {
  id: "1f37c392-1150-46a6-b114-2f2c998f5c86",
  target: {
    percentXYLocation: {
      percentX: 1189.17,
      percentY: 4175.39,
    },
  },
};
```

### `components.BlurCommand`

```typescript
const value: components.BlurCommand = {
  id: "cbe4c79f-fd5e-4a60-9c8c-bc4c87a014f2",
  target: {
    elementDescriptor: "<value>",
  },
};
```

### `components.WaitUrlCommand`

```typescript
const value: components.WaitUrlCommand = {
  id: "55fd60da-2f1d-446c-baf9-1ecb062dbefc",
  url: "https://any-advancement.info",
};
```

