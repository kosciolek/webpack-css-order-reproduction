def main [name: string] {
    let pkgJson = (open package.json)
    $pkgJson | update dependencies ($pkgJson.dependencies | insert $name $"portal:./($name)") | save -f package.json

    mkdir $name
    cd $name
    { name: $name, main: "index.js", version: "0.0.1", sideEffects: false  } | save package.json
    $"import styles from './($name).module.scss';

    export const ($name) = \() => console.log\(styles.($name)Class1);
    " | save index.js
    $"
    .($name)-class-1 {
        color: red;
    }

    .($name)-class-2 {
        color: blue;
    }

    .($name)-class-3 {
        color: green;
    }

    .($name)-class-4 {
        color: aquamarine;
    }
    " | save $"($name).module.scss"
}