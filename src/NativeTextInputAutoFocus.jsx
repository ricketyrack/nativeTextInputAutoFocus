import { Component, createElement } from "react";
import { Keyboard, TextInput } from "react-native";

export class NativeTextInputAutoFocus extends Component {
    constructor(props) {
        super(props);

        this.onChangeTextHandler = this.onChangeText.bind(this);
    }

    componentDidMount() {
        // hide the keyboard after 500ms
        setTimeout(() => { Keyboard.dismiss(); }, 100);
    }

    onChangeText = (text) => {
        if (this.props.valueAttribute) {
            this.props.valueAttribute.setValue(text);
        }
    }

    render() {
        return (
            <TextInput
                autoFocus={true}
                style={this.props.style}
                key="textinput42"
                onChangeText={text => this.onChangeText(text)}
                value={this.props.valueAttribute ? this.props.valueAttribute.displayValue : "Default"}
            />
        );
    }

}
