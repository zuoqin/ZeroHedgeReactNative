# ZeroHedgeReactNative
Zero Hedge Android app

Use API: https://zh.eliz.club/swagger-ui/index.html


java -jar ~/Downloads/bundletool-all-0.12.0.jar build-apks --bundle=./app/build/outputs/bundle/release/app.aab --output=./app/build/outputs/bundle/release/app/app.apks --ks=app/my-upload-key.keystore --ks-pass=pass:Qwerty123 --ks-key-alias=my-key-alias --key-pass=pass:Qwerty123 --mode=universal --overwrite


emulator @Nexus_5X_API_29_x86


npx react-native run-android

adb install app/build/outputs/bundle/release/app/app/universal.apk
