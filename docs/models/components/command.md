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

### `components.HoverCommand`

```typescript
const value: components.HoverCommand = {
  id: "164d0f55-026e-41fd-b753-900614342019",
  target: {
    percentXYLocation: {
      percentX: 4090.54,
      percentY: 1629.54,
    },
  },
};
```

### `components.WaitCommand`

```typescript
const value: components.WaitCommand = {
  id: "a7f1c43a-3a86-484b-b65d-e035dffe4f31",
  delay: 2334.20,
};
```

### `components.SuccessCommand`

```typescript
const value: components.SuccessCommand = {
  id: "b0be465b-3274-4d38-9fad-fcbff7142629",
};
```

### `components.AIWaitCommand`

```typescript
const value: components.AIWaitCommand = {
  id: "ef849e68-4763-4845-98c5-ed04715ba9b3",
  assertion: "<value>",
};
```

### `components.AIExtractCommand`

```typescript
const value: components.AIExtractCommand = {
  id: "ae840b05-8e16-4059-a431-9baf0a99f0bd",
  goal: "<value>",
};
```

### `components.AuthLoadCommand`

```typescript
const value: components.AuthLoadCommand = {
  id: "5c178b13-69e9-42fd-b8e8-edfe026f42e7",
  storageState: "<value>",
};
```

### `components.AuthSaveCommand`

```typescript
const value: components.AuthSaveCommand = {
  id: "2a71b300-0ebe-4a84-9f57-6f25a1974385",
};
```

### `components.CaptchaCommand`

```typescript
const value: components.CaptchaCommand = {
  id: "5f2159a6-f5ba-4dfe-bcb5-21368cf119bd",
};
```

### `components.CookieCommand`

```typescript
const value: components.CookieCommand = {
  id: "f662aad1-7932-4d07-a17f-6d1466a5ba66",
  value: "<value>",
};
```

### `components.DialogCommand`

```typescript
const value: components.DialogCommand = {
  id: "1dab8166-50b1-49ba-8f1d-08685308d531",
};
```

### `components.DragCommand`

```typescript
const value: components.DragCommand = {
  id: "31411d28-c723-4685-9cce-0e6ebfc58654",
  fromTarget: {
    percentXYLocation: {
      percentX: 2773.40,
      percentY: 5243.80,
    },
  },
  toTarget: {
    elementDescriptor: "<value>",
  },
};
```

### `components.ElementAssertionCommand`

```typescript
const value: components.ElementAssertionCommand = {
  id: "20f0291e-bf84-48e8-b4e5-035d775eff6f",
  target: {
    percentXYLocation: {
      percentX: 2448.89,
      percentY: 2164.57,
    },
  },
  assertion: {
    operation: "EQUALS",
    value: "<value>",
  },
};
```

### `components.FileUploadCommand`

```typescript
const value: components.FileUploadCommand = {
  id: "477cd26d-d124-4161-a939-1fe63470a66c",
  fileSource: {
    url: "https://hairy-technologist.net",
  },
};
```

### `components.GoBackCommand`

```typescript
const value: components.GoBackCommand = {
  id: "594d1326-b870-4613-9e3d-c291bac7e04b",
};
```

### `components.GoForwardCommand`

```typescript
const value: components.GoForwardCommand = {
  id: "21d7eb65-8eb0-4beb-8272-5ee459f24d7e",
};
```

### `components.JavaScriptCommand`

```typescript
const value: components.JavaScriptCommand = {
  id: "855765eb-b49c-4c5c-8b2d-777997da66c5",
  code: "<value>",
};
```

### `components.LocalStorageCommand`

```typescript
const value: components.LocalStorageCommand = {
  id: "0ee1521e-0f1d-4955-8c5a-87e8db0c3e05",
  key: "<key>",
  value: "<value>",
};
```

### `components.MouseDragCommand`

```typescript
const value: components.MouseDragCommand = {
  id: "7d425d23-1b64-4b5b-9d3f-242578de3917",
  deltaX: "<value>",
  deltaY: "<value>",
};
```

### `components.NewTabCommand`

```typescript
const value: components.NewTabCommand = {
  id: "57b1eb2f-8f38-4449-8ecb-8e7dd3c0538b",
  url: "https://warmhearted-deed.net",
};
```

### `components.PageAssertionCommand`

```typescript
const value: components.PageAssertionCommand = {
  id: "907b0e80-3f91-4470-9673-9c39afcd72f2",
  assertion: {
    value: "<value>",
  },
};
```

### `components.RefreshCommand`

```typescript
const value: components.RefreshCommand = {
  id: "1ffb5442-825a-4b06-9ad7-f4074d34cb8b",
};
```

### `components.RequestCommand`

```typescript
const value: components.RequestCommand = {
  id: "00810fd2-0f42-4b14-bfa8-6c2fd90be851",
  url: "https://calculating-reward.com",
};
```

### `components.ScrollLeftCommand`

```typescript
const value: components.ScrollLeftCommand = {
  id: "f984e4df-c817-4736-a527-480ed8df1aff",
};
```

### `components.ScrollRightCommand`

```typescript
const value: components.ScrollRightCommand = {
  id: "2903f5a4-fb5c-4163-8a16-485b0a34cf5d",
};
```

### `components.TabCommand`

```typescript
const value: components.TabCommand = {
  id: "ac26e109-6ce4-4679-bfb6-4f2bea635bae",
  url: "https://unwelcome-dulcimer.info",
};
```

### `components.VisualDiffCommand`

```typescript
const value: components.VisualDiffCommand = {
  id: "68a4064f-eda5-48d1-bc0d-c0a822c9fff1",
};
```

### `components.FocusCommand`

```typescript
const value: components.FocusCommand = {
  id: "37c39211-506a-4611-842f-2c998f5c86f9",
  target: {
    elementDescriptor: "<value>",
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

