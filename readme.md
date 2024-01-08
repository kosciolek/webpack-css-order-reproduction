Install deps **WITH YARN** (it links the `pkg1` subpackage):

```
yarn
```

Run webpack:

```
yarn webpack
```

View `dist/main.css`:

```css
.class__first-module__first{color:red}
.class__second-module__second{color:green}
.class__pkg1-module__pkg1Class{color:red}
```

`"sideEffects": [ "*.module.scss" ]` in the main `package.json` seems to work. If we do:

```js
import first from "./first.module.scss";
import second from "./second.module.scss";
```

Then in `main.css`, `first` classes will always be first. If you do `"sideEffects": false`, then webpack starts reodering them sometimes, which is okay.

However, it does NOT work when we introduce a subpackage. 

Classes are reordered, despite the css file being marked as effectful with `"sideEffects": [ "*.module.scss" ]`.

Using `"sideEffects": true` yields proper order, but disables all tree shaking.

For whatever reason `"sideEffects": [ "./index.js" ]` also seems to work (using the path that is the client-facing entrypoint), but it's useless, we should be able to mark just CSS files.



