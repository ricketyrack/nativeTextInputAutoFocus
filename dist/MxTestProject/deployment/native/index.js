import { NativeUI, startApp, t } from "mendix/native";
import { navigationStyle } from "C:/Users/Rick.wilson/projects/nativeTextInputAutoFocus/dist/MxTestProject/theme/styles.js";

startApp({
    "cacheBust": "637171896733432017",
    "languages": [
        "en_US"
    ],
    "navigationStyle": navigationStyle,
    "getTabs": () => ( [
        {
            "pageName": "MyFirstModule.Home_Native",
            "caption": t( [
                "Home"
            ] ),
            "icon": {
                "type": "glyph",
                "iconClass": "glyphicon-home"
            }
        }
    ] ),
    "onStartupNativeClient": () => {
        NativeUI.registerPage("MyFirstModule.Home_Native", require("C:/Users/Rick.wilson/projects/nativeTextInputAutoFocus/dist/MxTestProject/deployment/native/pages/MyFirstModule.Home_Native"), {"sidebar":false,"headerRegionName":"placeholder$Header","showBottomBar":true,"type":"Default"});
        NativeUI.registerPage("MyFirstModule.Person_NewEdit_Native", require("C:/Users/Rick.wilson/projects/nativeTextInputAutoFocus/dist/MxTestProject/deployment/native/pages/MyFirstModule.Person_NewEdit_Native"), {"sidebar":false,"headerRegionName":"placeholder$Header","showBottomBar":true,"type":"Default"});
    }
});