/**
 * Sticky Component Demo for uxcore
 * @author taoqili
 *
 * Copyright 2017-2018, Uxcore Team, Alinw.
 * All rights reserved.
 */

import React from 'react';
import Sticky from '../src';
import '../style';

class Demo extends React.Component {

  render() {
    return (
      <div>
        <div>这里是其它内容</div>
        <div style={{height: '500'}}>这里是其它内容</div>
        <div>这里是其它内容</div>
        <div>这里是其它内容</div>
        <div>这里是其它内容</div>
        <div>这里是其它内容</div>
        <div style={{
          // width: 1000,
          // margin: '0 auto'
        }}>
          <div>这里是其它内容</div>

          <Sticky offsetTop={10} onChange={(isSticky) => {console.log(isSticky)}}>
            <div style={{ background: 'lightblue', color: 'blue' }}>
              这里是固顶内容
              lskadj十来块都放假了卡机多放辣椒拉屎的
            </div>
          </Sticky>
          <div style={{height: '1000px'}}>
            其它内容
          </div>
        </div>
        <div style={{ height: '2000px' }}>
          <p>这里是其它内容1</p>
          <p>这里是其它内容2</p>
          <p>这里是其它内容3</p>
          <p>这里是其它内容4</p>
        </div>
        <div>这里是其它内容</div>
      </div>
    );
  }
}

export default Demo;
