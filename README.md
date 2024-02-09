## Available Scripts

In the project directory, you can run:

### `yarn build`

Builds the app for production to the `dist` folder.

### `yarn dev`

Builds the app for development mode to the `dist` folder.

### `yarn watch`

Builds the app for development mode to the `dist` folder and re build with each change in the project.

## How public locally this library

First step is run `yarn build`

### using `yarn pack`

You can first run below command at the root directory of the project under test. It will generate a tar file with the name [package-name]-[version].tgz.

`yarn pack`

Now, go to the root directory of target project where you want to consume it, and run below command.

`yarn add [path to the tar file created above]`

### using `yarn link`

In root directory of the project run

`yarn link`

Now, go to the root directory of target project where you want to consume it, and run below command.

`yarn link ui-lib`