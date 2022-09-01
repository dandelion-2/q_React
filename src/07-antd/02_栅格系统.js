/**
 *@Author: Jinbo
 *@DATE: 2023/4/13 16:19
 *@Description: ...
 *@Version 1.0
 */

import React from 'react';
import {Row, Col} from "antd";

const App_07_02 = () => {
    return (
        <div>
            <Row>
                <Col span={8} style={{background: '#adc6ff'}}>col111</Col>
                <Col span={8} offset={8} style={{background: '#d9f7be'}}>col222</Col>
                {/*<Col span={8}>col333</Col>*/}
            </Row>
        </div>
    );
};

export default App_07_02;
