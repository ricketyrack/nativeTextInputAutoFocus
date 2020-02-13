import { createElement } from "react";
const React = { createElement };

import { ActionProperty } from "mendix/ActionProperty";
import { DerivedUniqueIdProperty } from "mendix/DerivedUniqueIdProperty";
import { DynamicTextProperty } from "mendix/DynamicTextProperty";
import { IconProperty } from "mendix/IconProperty";
import { NanoflowObjectListProperty } from "mendix/NanoflowObjectListProperty";

import { Button } from "mendix/Button";
import { ClickableArea } from "mendix/ClickableArea";
import { Container } from "mendix/Container";
import { NativeList } from "mendix/NativeList";
import { Text } from "mendix/Text";
import { asPluginWidgets, t } from "mendix/native";

import { mainContent, sidebar } from "C:/Users/Rick.wilson/projects/nativeTextInputAutoFocus/dist/MxTestProject/deployment/native/layouts/Atlas_UI_Resources.NativePhone_Default.js";

import * as styles from "C:/Users/Rick.wilson/projects/nativeTextInputAutoFocus/dist/MxTestProject/theme/styles.js";

const { $Container, $Text, $Button, $NativeList, $ClickableArea } = asPluginWidgets({ Container, Text, Button, NativeList, ClickableArea });

const placeholder$Main = () => [
    <$Container key="0_1"
        $widgetId="0_1"
        name="container1"
        style={[ styles.Container, styles.spacingInnerTopLarge, styles.spacingInnerBottomLarge, styles.spacingInnerLeftMedium, styles.spacingInnerRightMedium ]}
        onClick={undefined}
        content={[
            <$Text key="0_2"
                $widgetId="0_2"
                name="text1"
                style={[ styles.Text, styles.TextHeading3, styles.spacingOuterBottom ]}
                text={DynamicTextProperty({
                    template: { "elements": t( [ [ "Home" ] ] ), "friendlyId": "MyFirstModule.Home_Native.text1" }
                })} />,
            <$Button key="0_3"
                $widgetId="0_3"
                name="actionButton1"
                style={[ styles.ActionButton, styles.btnSuccess ]}
                caption={DynamicTextProperty({
                    template: { "elements": t( [ [ "Add" ] ] ), "friendlyId": "MyFirstModule.Home_Native.actionButton1" }
                })}
                icon={IconProperty({
                    icon: { "type": "glyph", "iconClass": "glyphicon-plus" }
                })}
                onClick={ActionProperty({
                    action: { "type": "callNanoflow", "argMap": {}, "config": { "nanoflow": () => require("C:/Users/Rick.wilson/projects/nativeTextInputAutoFocus/dist/MxTestProject/deployment/native/nanoflows/MyFirstModule.ACT_NF_PersonCreateNew").ACT_NF_PersonCreateNew } },
                    abortOnServerValidation: false,
                    friendlyId: "On click at MyFirstModule.Home_Native.actionButton1"
                })}
                disabledDuringAction={true} />
        ]} />,
    <$NativeList key="0_0"
        $widgetId="0_0"
        name="listView1"
        style={[ styles.ListView, styles.listItemBorderRight ]}
        listInfo={NanoflowObjectListProperty({
            argMap: {},
            entity: "MyFirstModule.Person",
            friendlyId: "MyFirstModule.Home_Native.listView1",
            defaultAmount: 3,
            source: { "nanoflow": () => require("C:/Users/Rick.wilson/projects/nativeTextInputAutoFocus/dist/MxTestProject/deployment/native/nanoflows/MyFirstModule.ACT_NF_PersonGetNonDeleted").ACT_NF_PersonGetNonDeleted }
        })}
        itemTemplate={() => [
            <$ClickableArea key="0_4"
                $widgetId="0_4"
                name=""
                content={[
                    <$Container key="0_5"
                        $widgetId="0_5"
                        name="container2"
                        style={[ styles.Container, styles.nameRow, styles.flexMain, styles.flexRow, styles.spacingInnerBottom, styles.spacingInnerLeft, styles.spacingInnerRight, styles.justifyContentSpaceEvenly, styles.spacingInnerTop ]}
                        onClick={undefined}
                        content={[
                            <$Container key="0_6"
                                $widgetId="0_6"
                                name="container6"
                                style={[ styles.Container, styles.alignSelfStart ]}
                                onClick={undefined}
                                content={[
                                    <$Text key="0_7"
                                        $widgetId="0_7"
                                        name="text4"
                                        style={[ styles.Text ]}
                                        text={DynamicTextProperty({
                                            scope: "0_0",
                                            template: { "elements": t( [ [ 1 ] ] ), "friendlyId": "MyFirstModule.Home_Native.text4", "parameters": { "1": "MyFirstModule.Person/CustomerId" }, "formats": { "1": t( [ { "groupDigits": false } ] ) } }
                                        })} />
                                ]} />,
                            <$Container key="0_8"
                                $widgetId="0_8"
                                name="container3"
                                style={[ styles.Container, styles.alignSelfStart ]}
                                onClick={undefined}
                                content={[
                                    <$Text key="0_9"
                                        $widgetId="0_9"
                                        name="text2"
                                        style={[ styles.Text ]}
                                        text={DynamicTextProperty({
                                            scope: "0_0",
                                            template: { "elements": t( [ [ 1 ] ] ), "friendlyId": "MyFirstModule.Home_Native.text2", "parameters": { "1": "MyFirstModule.Person/FirstName" }, "formats": { "1": t( [ {} ] ) } }
                                        })} />
                                ]} />,
                            <$Container key="0_10"
                                $widgetId="0_10"
                                name="container4"
                                style={[ styles.Container, styles.alignSelfStart ]}
                                onClick={undefined}
                                content={[
                                    <$Text key="0_11"
                                        $widgetId="0_11"
                                        name="text3"
                                        style={[ styles.Text ]}
                                        text={DynamicTextProperty({
                                            scope: "0_0",
                                            template: { "elements": t( [ [ 1 ] ] ), "friendlyId": "MyFirstModule.Home_Native.text3", "parameters": { "1": "MyFirstModule.Person/LastName" }, "formats": { "1": t( [ {} ] ) } }
                                        })} />
                                ]} />,
                            <$Container key="0_12"
                                $widgetId="0_12"
                                name="container5"
                                style={[ styles.Container, styles.alignSelfStart ]}
                                onClick={undefined}
                                content={[
                                    <$Button key="0_13"
                                        $widgetId="0_13"
                                        name="actionButton2"
                                        style={[ styles.ActionButton ]}
                                        caption={DynamicTextProperty({
                                            template: { "elements": t( [ [ "Delete" ] ] ), "friendlyId": "MyFirstModule.Home_Native.actionButton2" }
                                        })}
                                        icon={IconProperty({
                                            icon: { "type": "glyph", "iconClass": "glyphicon-minus" }
                                        })}
                                        onClick={ActionProperty({
                                            action: { "type": "callNanoflow", "argMap": { "Person": { "widget": "0_0", "source": "object" } }, "config": { "nanoflow": () => require("C:/Users/Rick.wilson/projects/nativeTextInputAutoFocus/dist/MxTestProject/deployment/native/nanoflows/MyFirstModule.ACT_NF_PersonMarkDeleted").ACT_NF_PersonMarkDeleted } },
                                            abortOnServerValidation: false,
                                            friendlyId: "On click at MyFirstModule.Home_Native.actionButton2"
                                        })}
                                        disabledDuringAction={true} />
                                ]} />
                        ]} />
                ]}
                onClick={ActionProperty({
                    action: { "type": "openPage", "argMap": { "$pageParameter": { "widget": "0_0", "source": "object" } }, "config": { "name": "MyFirstModule.Person_NewEdit_Native", "location": "content" } },
                    abortOnServerValidation: false,
                    friendlyId: "On click at MyFirstModule.Home_Native."
                })} />
        ]}
        pageSize={3}
        id={DerivedUniqueIdProperty({
            widgetId: "0_0"
        })}
        scrollDirection={"vertical"}
        numberOfColumns={1}
        onPullDown={ActionProperty({
            action: { "type": "callNanoflow", "argMap": {}, "config": { "nanoflow": () => require("C:/Users/Rick.wilson/projects/nativeTextInputAutoFocus/dist/MxTestProject/deployment/native/nanoflows/MyFirstModule.ACT_NF_PersonGetNonDeleted").ACT_NF_PersonGetNonDeleted } },
            abortOnServerValidation: false,
            friendlyId: "Pull down at MyFirstModule.Home_Native.listView1"
        })} />
];

export const placeholder$Header = () => null;

export const $$title = t([
    "Home"
] );

export const $$style = [];

export const $$page = () => mainContent(placeholder$Main);

export const $$sidebar = () => sidebar(placeholder$Main);

