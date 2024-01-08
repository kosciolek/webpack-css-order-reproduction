Install deps **with yarn** (it links the `child-package` subpackage):

```
yarn
```

Run webpack:

```
yarn webpack
```

View `dist/main.css`:

```css
.first {
  color: red;
}

.second {
  color: green;
}

.child-packageClass {
  color: blue;
}
```

The order is wrong. `.child-packageClass` should be first, because `child-package` is first in the imports:

```
import { child-package } from "child-package";
import "./first.css";
import "./second.css";

child-package();
```

Webpack seems to reorder imports for side effect free modules. However, it should **not** happen for CSS imports, as they're marked as side effectful in package.json via `"sideEffects": [ "*.css" ]`. Setting `sideEffects: true` on the loader in `webpack.config.js` doesn't work either.

The directive works for files in the root package. CSS Files that exist in the `src` dir will be loaded in the order they're imported in. However, **it does NOT work for subpackages**, like `child-package`. This is a a problem for monorepos.

# Other observations

1. Setting `"sideEffects": true` in `child-package/package.json` generates the proper order (puts the `.child-packageClass` first), but disables all treeshaking.

2. It does NOT happen if `child-package/package.json` has `"sideEffects": true` or the field is missing (`true` is the default value AFAIK), only if there's `"sideEffects": [ "*.css" ]`.

3. Same happens with CSS modules enabled.
