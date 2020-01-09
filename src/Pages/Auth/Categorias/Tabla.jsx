import React from 'react'
import classnames from 'classnames';
import { Validator } from 'uxcore';
import { Button } from 'uxcore';
import { Select } from 'uxcore';
const { Option } = Select;
import { RadioGroup } from 'uxcore';
const RadioItem = RadioGroup.Item;
import { Table } from 'uxcore';
const { Constants } = Table;
const mockData = {
    data: [
    ],
};

export default class Tabla extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: mockData,
            showOtherColumn: false,
        };
    }


    getTableValues() {
        console.log(this.table.getData());
    }

    handleTableChange(data, dataKey, pass) {
        console.log(data.data);
    }

    render() {
        const me = this;
        const columns = [
            { dataKey: 'jsxid', title: 'Id', width: 80, ordered: true },
            {
                dataKey: 'estatus',
                editKey: 'categoriaId',
                title: 'Status',
                width: 200,
                type: 'select',
                renderChildren: () => [{ id: '1', name: 'disponible' }, { id: '2', name: 'no disponible' }].map(item => <Option key={item.id}>{item.name}</Option>),
                config: { filterOption: false }
            },
            {
                dataKey: 'categoria',
                title: 'Categoria',
                width: 200,
                type: 'text',
                required: true,
                rules: (cellData) => {
                    if (cellData.length === 0) {
                        return 'No puede estar vacío';
                    }
                    return true;
                },
            },
            {
                dataKey: 'action1',
                title: 'Acciones',
                width: 200,
                type: 'action',
                actions: [
                    {
                        title: 'Editar',
                        callback: (rowData) => {
                            me.table.editRow(rowData);
                        },
                        mode: Constants.MODE.VIEW,
                    },
                    {
                        title: 'Guardar',
                        callback: (rowData) => {
                            me.table.saveRow(rowData);
                        },
                        mode: Constants.MODE.EDIT,
                    },
                    {
                        title: 'Eliminar',
                        callback: (rowData) => {
                            me.table.delRow(rowData);
                        },
                        mode: Constants.MODE.VIEW,
                    },
                    {
                        title: 'Cancelar',
                        callback: (rowData) => {
                            me.table.viewRow(rowData)
                        },
                        mode: Constants.MODE.EDIT,
                    },
                ],
            },
        ];


        const renderProps = {
            showPager: false,
            fetchParams: {},
            jsxdata: me.state.data,
            className: 'kuma-uxtable-split-line',
            actionBar: {
                'Agregar Categoria': () => {
                    me.table.addEmptyRow();
                },
            },
            jsxcolumns: columns,
            processData: data => data,
            onChange: me.handleTableChange,
            emptyText: 'No hay Datos'
        };

        return (
            <div className="container">
                <Table style={{
                    borderCollapse: 'collapse',
                    borderSpacing: 0,
                    width: '100%',
                    border: ' 1px solid #ddd'

                }} {...renderProps} ref={(c) => { this.table = c; }} />
                <Button onClick={me.getTableValues.bind(me)} style={{ marginTop: '12px' }}>Obtener Datos de la Tabla</Button>
            </div>
        );
    }
}
