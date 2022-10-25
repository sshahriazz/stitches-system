# For those who don't like any UI library but still want a structured design system. This design system based on NextUI which built on top op stitches. You use these design system as next ui doc. Cool thing is these package is bloat component free.

# How to use?

## Getting started

### Installation

<br>
Inside your React project directory, install NextUI by running either of the following:

```bash
yarn add stitches-system
```

or

```bash
npm install stitches-system
```

### Setup

<br>
For NextUI to work correctly, you need to set up the <code>TNextUIProvider</code> at the root of your application.

#### React

Go to the root of your application and do this:

```jsx
import * as React from "react";

// 1. import `TNextUIProvider` component
import { TNextUIProvider } from "stitches-system";

function App({ Component }) {
  // 2. Use at the root of your app
  return (
    <TNextUIProvider>
      <Component />
    </TNextUIProvider>
  );
}
```

## Using NextUI components

Once NextUI is installed you can use any of the components as follows. NextUI uses tree-shaking so the unused modules will not be included in the bundle during the build process and each component is exported separately.

```jsx
import { Container } from "stitches-system";

const Component = () => <Container>Click me</Container>;
```

## Individual Imports

```jsx
import Text from "stitches-system/text";

const Component = () => <Text h3>Click me</Text>;
```

[Use SSR](https://nextui.org/docs/guide/nextui-plus-nextjs). <br>
[Default theme](https://nextui.org/docs/theme/default-theme).<br>
[Customize Theme](https://nextui.org/docs/theme/customize-theme).<br>
[Use CSS utilities](https://nextui.org/docs/theme/utilities).

Basically you can use the whole theme section from the nextui doc.

[New Addition]() <br>

- [Container](https://nextui.org/docs/layout/container)
- [Grid](https://nextui.org/docs/layout/grid)
- [Spacer](https://nextui.org/docs/layout/spacer)
- [Text](https://nextui.org/docs/components/text)

## Demo Project

[Repo: st-react](https://github.com/sshahriazz/st-react/tree/from-package)

- Text Component
- Grid Component
- Keyframe animations
- Spacer Component
- Custom Font installation look at `public/index.html` & `App.tsx`
- Light mode dark mode
- LRT, RTL mode support

## If you find any issue please report in github issues.

# Thanks for using.
