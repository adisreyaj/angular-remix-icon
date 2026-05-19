<p align="center">
    <img src="https://raw.githubusercontent.com/adisreyaj/angular-remix-icon/master/angular-remix-icon.png" alt="Angular Remix Icon">
</p>
<h1 align="center">Angular Remix Icon</h1>
<p align="center">
    <img src="https://img.shields.io/badge/Angular-21-red?style=for-the-badge&logo=angular" alt="angular">
  <a href="https://github.com/adisreyaj/angular-remix-icon/blob/master/LICENSE.md">
    <img alt="License: Apache License 2.0" src="https://img.shields.io/badge/License-Apache License 2.0-yellow.svg?style=for-the-badge&logo=apache" target="_blank" />
  </a>
  <a href="https://twitter.com/AdiSreyaj">
    <img alt="Twitter: Adithya Sreyaj" src="https://img.shields.io/twitter/follow/AdiSreyaj.svg?style=for-the-badge&logo=twitter" target="_blank" />
  </a>
</p>

> Use Remix Icons in your angular application

Wrapper for using remix icons in your angular application.
All the icons are injected as svgs and you can apply color and sizes to them with ease.

### Usage

_1. Install the package_

```sh
npm install angular-remix-icon
```

_2. Configure the icons_

For the library to work, the required icons need to be configured first.

**For standalone applications (Recommended):**

```ts
import { ApplicationConfig } from '@angular/core';
import { provideRemixIcon, RiHome2Fill, RiAncientGateFill } from 'angular-remix-icon';

const ICONS = {
  RiAncientGateFill,
  RiHome2Fill,
};

export const appConfig: ApplicationConfig = {
  providers: [provideRemixIcon(ICONS)],
};
```

**For NgModule applications (Deprecated):**

```ts
import {
  RiAncientGateFill,
  RiHome2Fill,
  RemixIconModule,
} from 'angular-remix-icon';

const icons = {
  RiAncientGateFill,
  RiHome2Fill,
};

@NgModule({
  imports: [
    BrowserModule,
    RemixIconModule.configure(icons),
  ],
  ...
})
export class AppModule {}
```

You can get the name from the [Remix Icon](https://remixicon.com) website

![Angular Remix Icon](https://raw.githubusercontent.com/adisreyaj/angular-remix-icon/master/remix-icon-example.png)

For eg: If you need the `home-3-line`, import the corresponding icon:

```ts
import { RiHome3Line } from "angular-remix-icon";
```

_3. Use in template_

You can now use the icons like so:

```html
<rmx-icon name="home-3-line"></rmx-icon>
```

### Styling

If you want change color or size of the icons,

```html
<rmx-icon name="home-3-line" style="color:blue"></rmx-icon>
```

or

```css
.blue-icon {
  color: blue;
}
.large-icon {
  width: 30px;
  height: 30px;
}
```

```html
<rmx-icon name="home-3-line" class="blue-icon large-icon"></rmx-icon>
```


## Versions

| Angular        | Angular Remix Icon |
|----------------|--------------------|
| v21            | v8.2+              |
| \>= v18        | v8                 |
| v16 & v17      | v6                 |
| v15            | v5                 |
| v14            | v4                 |
| v13            | v3                 |
| v12            | v2                 |

`v8` uses signal inputs for icon names. `v8.2` adds Angular 21 support and fixes icon updates when the `name` input changes.

## 🤝 Contributing

Contributions, issues and feature requests are welcome.<br />
Feel free to check [issues page](https://github.com/adisreyaj/angular-remix-icon/issues) if you want to contribute.

## Author

👤 **Adithya Sreyaj**

- Twitter: [@AdiSreyaj](https://twitter.com/AdiSreyaj)
- Github: [@adisreyaj](https://github.com/adisreyaj)

## 👍🏼 Show your support

Please ⭐️ this repository if this project helped you!

## 📝 License

Copyright © 2020 [Adithya Sreyaj](https://github.com/adisreyaj).<br />

This project is [Apache License 2.0](https://github.com/adisreyaj/angular-remix-icon/blob/master/LICENSE.md) licensed.
