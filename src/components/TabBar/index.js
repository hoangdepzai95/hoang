import React, { Component } from 'react';
import TabNavigator from 'react-native-tab-navigator';
import {
    Image,
    View,
  } from 'react-native';

import styles from './style';

export default class TabBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: '',
    };
  }
  onSelected(tab) {
    this.setState({ selectedTab: tab });
  }
  renderTabIcon(icon) {
    return (
      <Image
        style={styles.tabBarIcon}
        source={icon}
      />
    );
  }
  renderSelectedTabIcon(icon) {
    return (
      <Image
        style={styles.tabBarSelectedIcon}
        source={icon}
      />
    );
  }
  renderTab(TabContent, name, icon) {
    return (
      <TabNavigator.Item
        key={name}
        selected={this.state.selectedTab === name}
        title={name}
        selectedTitleStyle={styles.selectedTitleStyle}
        renderIcon={() => this.renderTabIcon(icon)}
        renderSelectedIcon={() => this.renderSelectedTabIcon(icon)}
        onPress={() => this.onSelected(name)}
      >
        <TabContent />
      </TabNavigator.Item>
    );
  }
  render() {
    const { tabs } = this.props;
    return (
      <View style={styles.container}>
        <TabNavigator
          tabBarStyle={styles.tabBarStyle}
          sceneStyle={styles.sceneStyle}
        >
          {
            tabs.map(tab => this.renderTab(tab.component, tab.name, tab.icon))
          }
        </TabNavigator>
      </View>
    );
  }
}
