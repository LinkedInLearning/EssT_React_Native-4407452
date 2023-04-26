INSTRUCTIONS INSTALLATION

https://reactnative.dev/docs/environment-setup

# Installer les dépendances



## Node & Watchman

```
brew install node
brew install watchman
```

## React Native CLI

`npm uninstall -g react-native-cli @react-native-community/cli`

## Créer un nouveau projet 

`npx react-native@latest init AwesomeProject`

## créer un main.jsbundle

` react-native bundle --entry-file index.js --platform ios --dev false --bundle-output ios/main.jsbundle --assets-dest ios`

## installer les dépendance iOS

```
 cd ios
 pod install
```

## lancer le projet

`npm run ios`

ou 

`npx react-native run-ios`