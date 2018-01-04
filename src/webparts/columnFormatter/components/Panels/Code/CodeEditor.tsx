import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { editorThemes, IApplicationState } from '../../../state/State';
import { updateEditorString } from './../../../state/Actions';
import { MonacoEditor } from './MonacoEditor';

export interface ICodeEditorProps {
	theme?:editorThemes;
	editorString?:string;
	readOnly?: boolean;

	updateEditorString?: (editorString:string, validationErrors:Array<string>) => void;

	//only subscribed so that the editor will be updated and know to
	// recalculate layout
	mainPane?:number;
	splitPane?:number;
	uiHeight?:number;
}

export interface ICodeEditorState {
	//code: string;
}

class CodeEditor_ extends React.Component<ICodeEditorProps, ICodeEditorState> {

	constructor(props: ICodeEditorProps) {
		super(props);
	}

	public render(): React.ReactElement<ICodeEditorProps> {
		return (
			<MonacoEditor
				value={this.props.editorString}
				theme={this.props.theme}
				readOnly={this.props.readOnly}
				onValueChange={this.props.updateEditorString}
			/>
		);
	}
}

function mapStateToProps(state: IApplicationState): ICodeEditorProps{
	return {
		theme: state.code.theme,
		editorString: state.code.editorString,
		readOnly: state.ui.tabs.wizardTabVisible,
		mainPane: state.ui.panes.main,
		splitPane: state.ui.panes.split,
		uiHeight: state.ui.height
	};
}

function mapDispatchToProps(dispatch: Dispatch<ICodeEditorProps>): ICodeEditorProps{
	return {
		updateEditorString: (editorString:string, validationErrors:Array<string>) => {
			dispatch(updateEditorString(editorString, validationErrors));
		}
    };
}

export const CodeEditor = connect(mapStateToProps, mapDispatchToProps)(CodeEditor_);