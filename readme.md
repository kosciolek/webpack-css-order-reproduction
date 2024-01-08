Install deps **WITH YARN**:

```
yarn
```

Run webpack:

```
yarn webpack
```

View `dist/main.css`:

```css
.class__index-module__index{color:brown}
.class__pkg1-module__pkg1-class-1{color:red}.class__pkg1-module__pkg1-class-2{color:blue}.class__pkg1-module__pkg1-class-3{color:green}.class__pkg1-module__pkg1-class-4{color:#7fffd4}
```

Classes are reordered, despite the css file being marked as effectful with `"sideEffects": [ "*.module.scss" ]`.

Using `"sideEffects": true` yields proper order, but disables all tree shaking.

For whatever reason `"sideEffects": [ "./index.js" ]` also seems to work (using the path that is the client-facing entrypoint), but it's useless, we should be able to mark just CSS files.



