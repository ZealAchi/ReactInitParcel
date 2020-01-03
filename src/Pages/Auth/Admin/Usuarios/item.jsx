import React from 'react'
import { Skeleton, Switch, Card, Icon, Avatar } from 'antd';
import { Sweetalert, Button } from 'zent';

const { Meta } = Card;
export default function () {
    const showAlertInfo = () => {
        Sweetalert.alert({
          content: 'prueba',
          title:'Editar',
          onConfirm:'Editar'
        });
      }
    return (<Card
        hoverable
        style={{ width: 240 }}
        actions={[
            <Icon type="edit" onClick={showAlertInfo} key="edit" />,
            <Icon type="delete" key="delete" />,
            <Icon type="ellipsis" key="ellipsis" />,
        ]}
        cover={<img alt="example" src="https://phoenixpwn.com/phoenix.png" />}
    >
        <Meta title="Europe Street beat" description={<Description />} />
    </Card>)
}

function Description() {
    return (
        <>
            www.instagram.com
        </>
    )
}