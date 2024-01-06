Install deps **WITH YARN**:

```
yarn
```

Run webpack:

```
yarn webpack
```

View `dist/main.css`.

```css
.class__pkg1-module__pkg1-class-1{color:red}.class__pkg1-module__pkg1-class-2{color:blue}.class__pkg1-module__pkg1-class-3{color:green}.class__pkg1-module__pkg1-class-4{color:#7fffd4}
.class__index-module__index{color:brown}
.class__pkg2-module__pkg2-class-1{color:red}.class__pkg2-module__pkg2-class-2{color:blue}.class__pkg2-module__pkg2-class-3{color:green}.class__pkg2-module__pkg2-class-4{color:#7fffd4}
```

The desired order (below) is wrong, because we want to be able to override library styles, and styles of our own imported components.
```
pkg1 classes
pkg2 classes
index classes
```

The actual generated order (below) is not correct. `pkg2`, despite having `"sideEffects": [ "*.module.scss" ]` got pushed to the bottom, which would cause it to override index styles (which is bad - imagine `pkg2` is an `Input` component, and the index contains a `TextArea` built on top of it, which overrides some `Input` styles).

```
pkg1 classes
index classes
pkg2 classes
```

`pkg1` is in proper order, but it has `"sideEffects": [ "./index.js" ]`. So it looks like you've got to put entry points in `sideEffects`, not particular files. This is weird, as lots of libraries expose just one entry point.



