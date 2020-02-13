import { createElement } from "react";
const React = { createElement };

import { ActionProperty } from "mendix/ActionProperty";
import { AssociationObjectProperty } from "mendix/AssociationObjectProperty";
import { AttributeProperty } from "mendix/AttributeProperty";
import { DynamicTextProperty } from "mendix/DynamicTextProperty";

import { Button } from "mendix/Button";
import { Container } from "mendix/Container";
import { DataView } from "mendix/DataView";
import { loves_nativetextinputautofocus_NativeTextInputAutoFocus } from "externalWidgets";
import { Text } from "mendix/Text";
import { TextBox } from "mendix/TextBox";
import { asPluginWidgets, t } from "mendix/native";

import { mainContent, sidebar } from "C:/Users/Rick.wilson/projects/nativeTextInputAutoFocus/dist/MxTestProject/deployment/native/layouts/Atlas_UI_Resources.NativePhone_Default.js";

import * as styles from "C:/Users/Rick.wilson/projects/nativeTextInputAutoFocus/dist/MxTestProject/theme/styles.js";

const { $Container, $DataView, $Text, $loves_nativetextinputautofocus_NativeTextInputAutoFocus, $TextBox, $Button } = asPluginWidgets({ Container, DataView, Text, loves_nativetextinputautofocus_NativeTextInputAutoFocus, TextBox, Button });

const placeholder$Main = () => [
    <$Container key="0_0"
        $widgetId="0_0"
        name="container5"
        style={[ styles.Container, styles.spacingInnerTopLarge, styles.spacingInnerBottomLarge, styles.spacingInnerLeftMedium, styles.spacingInnerRightMedium, styles.flexMain, styles.backgroundPrimary ]}
        onClick={undefined}
        content={[
            <$DataView key="0_1"
                $widgetId="0_1"
                name="dataView2"
                style={[ styles.DataView ]}
                object={AssociationObjectProperty({
                    scope: "$pageParameter"
                })}
                content={[
                    <$Container key="0_2"
                        $widgetId="0_2"
                        name="container1"
                        style={[ styles.Container, styles.spacingOuterBottom, styles.spacingOuterLeft, styles.spacingOuterRight ]}
                        onClick={undefined}
                        content={[
                            <$Text key="0_3"
                                $widgetId="0_3"
                                name="text1"
                                style={[ styles.Text ]}
                                text={DynamicTextProperty({
                                    template: { "elements": t( [ [ "Customer ID" ] ] ), "friendlyId": "MyFirstModule.Person_NewEdit_Native.text1" }
                                })} />,
                            <$Container key="0_4"
                                $widgetId="0_4"
                                name="container2"
                                style={[ styles.Container, styles.textContainer, styles.spacingOuterBottomMedium, styles.spacingOuterTopMedium, styles.spacingInnerLeftMedium, styles.spacingInnerRightMedium ]}
                                onClick={undefined}
                                content={[
                                    <$loves_nativetextinputautofocus_NativeTextInputAutoFocus key="0_5"
                                        $widgetId="0_5"
                                        name="nativeTextInputAutoFocus1"
                                        valueAttribute={AttributeProperty({
                                            scope: "0_1",
                                            path: "",
                                            entity: "MyFirstModule.Person",
                                            attribute: "CustomerId",
                                            friendlyId: "MyFirstModule.Person_NewEdit_Native.nativeTextInputAutoFocus1",
                                            onChange: { "type": "saveChanges", "argMap": {}, "config": { "closePage": true, "syncAutomatically": true } }
                                        })}
                                        minLength={14}
                                        style={[ styles.loves_nativetextinputautofocus_NativeTextInputAutoFocus ]} />
                                ]} />
                        ]} />,
                    <$TextBox key="0_6"
                        $widgetId="0_6"
                        name="textBox1"
                        style={[ styles.TextBox, styles.TextBoxVertical ]}
                        onEnter={undefined}
                        onLeave={undefined}
                        formOrientation={"vertical"}
                        labelWidth={0}
                        inputValue={AttributeProperty({
                            scope: "0_1",
                            path: "",
                            entity: "MyFirstModule.Person",
                            attribute: "FirstName",
                            friendlyId: "MyFirstModule.Person_NewEdit_Native.textBox1",
                            onChange: { "type": "doNothing", "argMap": {}, "config": {} },
                            validation: null,
                            formatting: { }
                        })}
                        isPassword={false}
                        placeholder={DynamicTextProperty({
                            template: { "elements": t( [ [ "" ] ] ) }
                        })}
                        label={DynamicTextProperty({
                            template: { "elements": t( [ [ "First Name" ] ] ), "friendlyId": "MyFirstModule.Person_NewEdit_Native.textBox1" }
                        })}
                        maxLength={200}
                        keyboardType={"default"} />,
                    <$TextBox key="0_7"
                        $widgetId="0_7"
                        name="textBox2"
                        style={[ styles.TextBox, styles.TextBoxVertical ]}
                        onEnter={undefined}
                        onLeave={undefined}
                        formOrientation={"vertical"}
                        labelWidth={0}
                        inputValue={AttributeProperty({
                            scope: "0_1",
                            path: "",
                            entity: "MyFirstModule.Person",
                            attribute: "LastName",
                            friendlyId: "MyFirstModule.Person_NewEdit_Native.textBox2",
                            onChange: { "type": "doNothing", "argMap": {}, "config": {} },
                            validation: null,
                            formatting: { }
                        })}
                        isPassword={false}
                        placeholder={DynamicTextProperty({
                            template: { "elements": t( [ [ "" ] ] ) }
                        })}
                        label={DynamicTextProperty({
                            template: { "elements": t( [ [ "Last name" ] ] ), "friendlyId": "MyFirstModule.Person_NewEdit_Native.textBox2" }
                        })}
                        maxLength={200}
                        keyboardType={"default"} />,
                    <$Container key="0_8"
                        $widgetId="0_8"
                        name="container6"
                        style={[ styles.Container, styles.spacingOuterTopLarge ]}
                        onClick={undefined}
                        content={[
                            <$Button key="0_9"
                                $widgetId="0_9"
                                name="actionButton3"
                                style={[ styles.ActionButton, styles.spacingOuterBottom ]}
                                caption={DynamicTextProperty({
                                    template: { "elements": t( [ [ "Save" ] ] ), "friendlyId": "MyFirstModule.Person_NewEdit_Native.actionButton3" }
                                })}
                                icon={undefined}
                                onClick={ActionProperty({
                                    action: { "type": "saveChanges", "argMap": { "$object": { "widget": "0_1", "source": "object" } }, "config": { "closePage": true, "syncAutomatically": true } },
                                    abortOnServerValidation: false,
                                    friendlyId: "On click at MyFirstModule.Person_NewEdit_Native.actionButton3"
                                })}
                                disabledDuringAction={true} />,
                            <$Button key="0_10"
                                $widgetId="0_10"
                                name="actionButton4"
                                style={[ styles.ActionButton, styles.btnSecondary ]}
                                caption={DynamicTextProperty({
                                    template: { "elements": t( [ [ "Cancel" ] ] ), "friendlyId": "MyFirstModule.Person_NewEdit_Native.actionButton4" }
                                })}
                                icon={undefined}
                                onClick={ActionProperty({
                                    action: { "type": "cancelChanges", "argMap": {}, "config": { "closePage": true } },
                                    abortOnServerValidation: false,
                                    friendlyId: "On click at MyFirstModule.Person_NewEdit_Native.actionButton4"
                                })}
                                disabledDuringAction={true} />
                        ]} />
                ]} />
        ]} />
];

export const placeholder$Header = () => null;

export const $$title = t([
    "Edit Person"
] );

export const $$style = [];

export const $$page = () => mainContent(placeholder$Main);

export const $$sidebar = () => sidebar(placeholder$Main);

