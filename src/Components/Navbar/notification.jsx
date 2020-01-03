import React, { useState } from 'react'
import classnames from 'classnames';
import NoticeIcon from '../Notification/src/NoticeIcon';


export default class Notification
    extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'hahah',
        };
    }
    onBottomClick = () => {
        console.log('Bottom action bar is clicked');
    }
    onTopClick = () => {
        console.log('Top action is activated');
    }
    onVisibleChange = (isDisplay) => {
        console.log(isDisplay);
    }
    onIconClick = (text) => {
        console.log(text);
    }
    render() {
        const topAction = <span onClick={this.onTopClick}>Tienes 19 Notificaciones</span>;
        const bottomAction = [
            { "text": "Ver Todas", "action": function () { console.log("Left Clicked") } },
            { "text": "Ignorarlas", "action": function () { console.log("Middle Clicked") } },
            { "text": "Limpiar", "action": function () { console.log("Right Clicked") } }
        ]
        return (
            <div>
                <NoticeIcon
                    overlayClassName="test-popover"
                    emptyIcon="active_empty"
                    topAction={topAction}
                    bottomAction={bottomAction}
                    title="Notificaciones"
                    className="test"
                    enablePopover
                    trigger="click"
                >
                    <ItemNotification />
                    {/* <div style={{ width: '100%', height: '100px', lineHeight: '100px', textAlign: 'center' }}>Hola</div> */}
                </NoticeIcon>

            </div >
        );
    }
}



import { InfiniteScroller, Card } from 'zent';

function ItemNotification() {
    const [state, setState] = useState({
        list: [
        { id: 1, mensaje: `Tienes 19 cotizaciones nuevas`},
        { id: 2, mensaje: `Tienes 4 mensajes sin leer`},
        { id: 3, mensaje: `Hay 4 proyectos nuevos sin ver`}
        ]
    })
    function loadMore(closeLoading) {
        const { list } = state;
        const latestList = list.slice(list.length - 1);
        const newList = latestList.map(item => { 
            item.id = item.id + 1, item.mensaje = "tienes 3 cotizaciones nuevas" }
            )
        
        setTimeout(() => {
            setState({
                ...state,
                // list: [...list, ...newList]
            });
            console.log(newList)
            console.log(list)
            closeLoading && closeLoading();

        }, 500);

    }
    const { list } = state;
    return (
        <InfiniteScroller
            className="infinite-scroller-demo"
            useWindow={false}
            // loadMore={loadMore}
        >
            {
                list.map(item => <Card key={item.id}>{item.mensaje}</Card>)
            }
        </InfiniteScroller>
    );
}
