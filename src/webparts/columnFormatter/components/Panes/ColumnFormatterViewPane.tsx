import * as React from 'react';
import styles from '../ColumnFormatter.module.scss';
import * as strings from 'ColumnFormatterWebPartStrings';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { autobind } from 'office-ui-fabric-react/lib/Utilities';
import { selectTab, resizePane } from '../../state/Actions';
import { IApplicationState } from '../../state/State';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Icon } from 'office-ui-fabric-react/lib/Icon';
import { ColumnFormatterPreviewPanel } from '../Panels/Preview/ColumnFormatterPreviewPanel';
import { ColumnFormatterCodePanel } from '../Panels/Code/ColumnFormatterCodePanel';
var SplitPane = require('react-split-pane');

export interface IColumnFormatterViewPaneProps {
	tabIndex?: number;
	selectTab?: (index:number) => void;
	paneResized?: (size:number) => void;
}

class ColumnFormatterViewPane_ extends React.Component<IColumnFormatterViewPaneProps, {}> {
	public render(): React.ReactElement<IColumnFormatterViewPaneProps> {
		return (
		  <Tabs
		   selectedIndex={this.props.tabIndex}
		   onSelect={this.onSelectTab}>
			  	<TabPanel>
					<ColumnFormatterPreviewPanel/>
				</TabPanel>
				<TabPanel>
					<ColumnFormatterCodePanel/>
				</TabPanel>
				<TabPanel>
					<SplitPane
					split="vertical"
					className={styles.SplitPaneInTab}
					size={209}
					minSize={100}
					maxSize={-100}
					onDragFinished={(size:number) => {this.props.paneResized(size);}}>
						<ColumnFormatterPreviewPanel/>
						<ColumnFormatterCodePanel/>
					</SplitPane>
				</TabPanel>
				<TabList style={{"textAlign":"right"}}>
					<Tab><Icon iconName='RedEye'/><span>{strings.TabPreview}</span></Tab>
					<Tab><Icon iconName='Embed'/><span>{strings.TabCode}</span></Tab>
					<Tab><Icon iconName='DoubleColumn'/><span>{strings.TabSplit}</span></Tab>
				</TabList>
		  </Tabs>
		);
	}

	@autobind
	private onSelectTab(index:number): void {
		this.props.selectTab(index);
	}
}

function mapStateToProps(state: IApplicationState): IColumnFormatterViewPaneProps{
	return {
		tabIndex: state.ui.tabs.viewTab
	};
}

function mapDispatchToProps(dispatch: Dispatch<IColumnFormatterViewPaneProps>): IColumnFormatterViewPaneProps{
	return {
		paneResized: (size:number) => {
			dispatch(resizePane('split', size));
		},
		selectTab: (index:number) => {
			dispatch(selectTab('view', index));
		}
	};
}

export const ColumnFormatterViewPane = connect(mapStateToProps, mapDispatchToProps)(ColumnFormatterViewPane_);