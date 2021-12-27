fastlane documentation
----

# Installation

Make sure you have the latest version of the Xcode command line tools installed:

```sh
xcode-select --install
```

For _fastlane_ installation instructions, see [Installing _fastlane_](https://docs.fastlane.tools/#installing-fastlane)

# Available Actions

## Android

### android version

```sh
[bundle exec] fastlane android version
```

Update version

### android gradle_clean

```sh
[bundle exec] fastlane android gradle_clean
```

Clean gradle

### android cpy_artifacts_apk

```sh
[bundle exec] fastlane android cpy_artifacts_apk
```

Copy artifacts apk

### android cpy_artifacts_aab

```sh
[bundle exec] fastlane android cpy_artifacts_aab
```

Copy artifacts aab

### android app_center_dev

```sh
[bundle exec] fastlane android app_center_dev
```

Deploy a dev version to appcenter

### android app_center_prod

```sh
[bundle exec] fastlane android app_center_prod
```

Deploy a prod version to appcenter

### android deploy_playstore

```sh
[bundle exec] fastlane android deploy_playstore
```

Deploy a new version to the Google Play

----

This README.md is auto-generated and will be re-generated every time [_fastlane_](https://fastlane.tools) is run.

More information about _fastlane_ can be found on [fastlane.tools](https://fastlane.tools).

The documentation of _fastlane_ can be found on [docs.fastlane.tools](https://docs.fastlane.tools).
