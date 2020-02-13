import { createElement } from "react";
const React = { createElement };


import { Placeholder } from "mendix/Placeholder";
import { asPluginWidgets, t } from "mendix/native";

import * as styles from "C:/Users/Rick.wilson/projects/nativeTextInputAutoFocus/dist/MxTestProject/theme/styles.js";

const { $Placeholder } = asPluginWidgets({ Placeholder });

export const mainContent = (placeholder$Main) => [
    <$Placeholder key="0_0"
        $widgetId="0_0"
        name="Main"
        content={placeholder$Main()} />
];

export const sidebar = (placeholder$Main) => [];

