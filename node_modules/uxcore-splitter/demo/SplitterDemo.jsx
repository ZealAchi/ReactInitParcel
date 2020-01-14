/**
 * Splitter Component Demo for uxcore
 * @author vincent.bian
 *
 * Copyright 2015-2016, Uxcore Team, Alinw.
 * All rights reserved.
 */
import React from 'react';
import Splitter, { Pane } from '../src';

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      paneSize: 200,
      collapsed: true,
    };
    this.handleChangePaneSize = this.handleChangePaneSize.bind(this);
    this.handleTogglePane = this.handleTogglePane.bind(this);
  }

  handleChangePaneSize() {
    this.setState({
      paneSize: Math.ceil(Math.random() * (300 - 50) + 50, 10),
    });
  }

  handleTogglePane() {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    return (
      <div style={{ padding: '0 20px' }}>
        <h1>
          Splitter Demo:
        </h1>
        <h2>
          Nested Layout
        </h2>
        <Splitter orientation="vertical" className="wrapper">
          <Pane defaultSize={50} resizable collapsible>
            left panel
          </Pane>
          <Pane defaultSize={70} resizable collapsible>
            left panel
          </Pane>
          <Pane defaultSize={80} resizable collapsible>
            left panel
          </Pane>
          <Pane>
            <Splitter orientation="horizontal">
              <Pane defaultSize={100} collapsible>
                top panel
              </Pane>
              <Pane defaultSize={50} collapsible>
                top panel
              </Pane>
              <Pane>
                middle panel
              </Pane>
              <Pane defaultSize={100} collapsible>
                bottom panel
              </Pane>
              <Pane defaultSize={100} collapsible>
                bottom panel
              </Pane>
              <Pane defaultSize={50} collapsible>
                bottom panel
              </Pane>
            </Splitter>
          </Pane>
          <Pane defaultSize={50} resizable collapsible>
            right panel
          </Pane>
          <Pane defaultSize={60} resizable collapsible>
            right panel
          </Pane>
          <Pane defaultSize={80} resizable collapsible>
            right panel
          </Pane>
        </Splitter>
        <h2>
          Change layout by logic
        </h2>
        <Splitter orientation="vertical" className="wrapper">
          <Pane
            onCollapse={c => (this.setState({
              collapsed: c,
            }))}
            size={this.state.paneSize}
            collapsible
            resizable
            collapse={this.state.collapsed ? 'collapsed' : 'uncollapsed'}
          >
            <button onClick={this.handleChangePaneSize}>
              change my size
            </button>
            <button onClick={this.handleTogglePane}>
              collapse me
            </button>
          </Pane>
          <Pane>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a orci ac diam pharetra viverra sit amet eget arcu. Ut sit amet efficitur elit. Suspendisse pulvinar pulvinar lectus ac malesuada. Curabitur ac dictum elit. Nam lectus ex, suscipit nec aliquet vel, molestie sed justo. Nullam commodo dui viverra sem hendrerit, eget iaculis nisi commodo. Aliquam at mauris porta libero mattis convallis et posuere leo. Vivamus vehicula libero lacus, ac molestie mi varius eu. Nam vel libero odio. Nulla sollicitudin dignissim pellentesque. Praesent eleifend tortor ac dapibus efficitur. Nunc eleifend augue vel laoreet rutrum.
          </Pane>
        </Splitter>
      </div>
    );
  }
}

module.exports = Demo;
