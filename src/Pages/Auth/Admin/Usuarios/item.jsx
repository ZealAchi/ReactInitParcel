import React, { useEffect, useState } from 'react'
import { Skeleton, Switch, Card, Icon, Avatar } from 'antd';
import { Modal, Button } from 'antd';
import { toast } from 'react-toastify';
import { Pop, Rate } from 'zent';

const { confirm } = Modal;
const { Meta } = Card;
export default function () {
    const [img, setImg] = useState([])

    async function getDATA() {
        try {
            await fetch('https://randomuser.me/api/').then(response => response.json())
                .then(data => { setImg(data.results[0]); })
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getDATA()
    }, [])

    // console.log(img)

    function showDeleteConfirm() {
        confirm({
            title: '¿Éstas seguro que quieres eliminar este usuario?',
            okText: '¡Estoy seguro!',
            okType: 'danger',
            cancelText: 'No',
            onOk() {
                toast.success("El usuario ah sido removido!");
            },
            onCancel() {
                // toast("Sabia que no lo harias😆!");
            },
        });
    }

    if (!img.picture) {
        return <>Loading</>
    }
    // console.log(img.picture)
    return (
        <Pop trigger="hover" content={`${img.name.title} ${img.name.first} ${img.name.last}`}>
            <Card
                hoverable
                style={{ width: 240 }}
                actions={[
                    <Pop trigger="hover" content="Editar">
                        <Icon type="edit" key="edit" />
                    </Pop>,
                    <Pop trigger="hover" content="Eliminar">
                        <Icon type="delete" onClick={showDeleteConfirm} key="delete" />
                    </Pop>
                    ,
                    <Pop trigger="hover" content="Vér más detalles">
                        <Icon type="ellipsis" key="ellipsis" />
                    </Pop>
                    ,
                ]}
                cover={<img alt="example" src={img.picture && img.picture.large} />}
            >
                <Meta title={`${img.name.title} ${img.name.first} ${img.name.last}`} description={<Description data={img} />} />
            </Card></Pop>)
}
function GetRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

function Description({ data }) {
    const ROL = ['Constructora', 'Proveedor']
    var role=ROL[GetRandom(0, 1)]
    return (
        <>
        {role==='Proveedor'?<>Puntuación: <br/>
              <Rate disabled={true} value={GetRandom(0,5)} /></>
            :null} <br/>
            Tipo de Rol: {role}<br />
            Correo: {data.email} <br />
            Nombre de usuario: {data.login.username}<br />
            Telefono: {data.cell}

        </>
    )
}