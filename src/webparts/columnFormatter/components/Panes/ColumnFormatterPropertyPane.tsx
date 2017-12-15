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
import { ColumnFormatterTreePanel } from '../Panels/Tree/ColumnFormatterTreePanel';
import { ColumnFormatterDataPanel } from '../Panels/Data/ColumnFormatterDataPanel';

export interface IColumnFormatterPropertyPaneProps {
	tabIndex?: number;
	selectTab?: (index:number) => void;
}

class ColumnFormatterPropertyPane_ extends React.Component<IColumnFormatterPropertyPaneProps, {}> {
	public render(): React.ReactElement<IColumnFormatterPropertyPaneProps> {
		return (
		  <Tabs
			 selectedIndex={this.props.tabIndex}
			 onSelect={this.onSelectTab}>
				<TabPanel>
					Wowee!
				</TabPanel>
				<TabPanel>
					<ColumnFormatterTreePanel/>
				</TabPanel>
				<TabPanel>
					<ColumnFormatterDataPanel/>
				</TabPanel>
				<TabList>
					<Tab><Icon iconName='LightningBolt'/><span>{strings.TabWizard}</span></Tab>
					<Tab><Icon iconName='Bookmarks'/><span>{strings.TabTree}</span></Tab>
					<Tab><Icon iconName='TextField'/><span>{strings.TabData}</span></Tab>
				</TabList>
		  </Tabs>
		);
	}

	@autobind
	private onSelectTab(index:number): void {
		this.props.selectTab(index);
	}
}

function mapStateToProps(state: IApplicationState): IColumnFormatterPropertyPaneProps{
	return {
		tabIndex: state.ui.tabs.propertyTab
	};
}

function mapDispatchToProps(dispatch: Dispatch<IColumnFormatterPropertyPaneProps>): IColumnFormatterPropertyPaneProps{
	return {
		selectTab: (index:number) => {
			dispatch(selectTab('property', index));
		}
	};
}

export const ColumnFormatterPropertyPane = connect(mapStateToProps, mapDispatchToProps)(ColumnFormatterPropertyPane_);