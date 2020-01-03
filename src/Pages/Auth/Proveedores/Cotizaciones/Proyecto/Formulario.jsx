import React, { useState } from 'react'

import { Button } from 'uxcore';
import { Form } from 'uxcore'

import { Form as FormAntd, message, Steps, Icon, Upload } from 'antd';

import { Box } from '@material-ui/core';
import { Column, Hero, Divider } from 'rbx';
import { Uploader } from 'uxcore';
import Item from "./../Proyecto/item";

const { Step } = Steps;
const { Dragger } = Upload;



const steps = [
  {
    title: 'Datos del proyecto',
    content: <DatosProyecto />,
    icon: <Icon type="user" />,
  },
  {
    title: 'Suba una Imagen',
    content: <ImagenForm />,
    icon: <Icon type="solution" />,
  },
  {
    title: 'Condiciones de pago',
    content: <CondicionPago />,
    icon: <Icon type="loading" />,
  },
  {
    title: 'Materiales/lotes',
    content: <MaterialLotesForm />,
    icon: <Icon type="loading" />,
  },
  {
    title: 'Vizualiza Proyecto',
    content: <Vizualizar />,
    icon: <Icon type="smile-o" />,
  },
];


function DatosProyecto() {
  const {
    InputFormField: Input,
    DateFormField: Date,
    TextAreaFormField: TextArea,
    FormRow: Row,
    SelectFormField,
    Validators,
  } = Form;

  const [state, setState] = useState({
    mode: true,
    fileList: [],
  })
  function handleModeChange(values, name) {
    console.log(values[name]);
    setState({
      mode: values[name] === 'true',
    })
  }
  return (
    <>
      <Column.Group centered>
        <Column size="three-fifths">
          <Form className="form-select" jsxvalues={{ mode: 'Selecciona un tipo de Proyecto' }} jsxonChange={handleModeChange}>
            <SelectFormField jsxdata={{ tipo1: 'residencial', tipo2: 'comercial', tipo3: 'industrial', tipo4: 'obras publicas', tipo5: 'industrial' }} jsxname="mode" jsxlabel="Tipo de Proyecto" showSearch={false} />
          </Form>
        </Column>
      </Column.Group>
      <Column.Group>
        <Column>
          <Form instantValidate={state.mode}>
            <Input
              jsxname="theme"
              inputBoxMaxWidth="middle"
              jsxlabel="Nombre del proyecto"
              required
              jsxplaceholder="Ingresa el nombre del Proyecto"
              jsxrules={[
                { validator: Validators.isNotEmpty, errMsg: 'No puede estar vacío' },
                { validator(value) { return value.length <= 10; }, errMsg: 'No más de 10 palabras' },
              ]}
            />
          </Form>
        </Column>
        <Column>
          <Form instantValidate={state.mode}>
            <Input
              jsxname="finalizacion"
              jsxlabel="Finalización "
              inputBoxMaxWidth="middle"

              required
              jsxplaceholder="Ingresa la Finalización"
              jsxrules={[
                { validator: Validators.isNotEmpty, errMsg: 'No puede estar vacío' },
              ]}
            />
          </Form>
        </Column>
      </Column.Group>
      <Column.Group>
        <Column>
          <Form instantValidate={state.mode}>
            <Input
              jsxname="location"
              jsxlabel="Lugar"
              inputBoxMaxWidth="middle"

              required
              jsxplaceholder="Ingresa la Ubicación de Entrega"
              jsxrules={[
                { validator: Validators.isNotEmpty, errMsg: 'No puede estar vacío' },
              ]}
            />
          </Form>
        </Column>
        <Column>
          <Form instantValidate={state.mode}>
            <Input
              jsxname="theme"
              inputBoxMaxWidth="middle"
              jsxlabel="Descripción del proyecto"
              required
              jsxplaceholder="Ingresa la descripción del Proyecto"
              jsxrules={[
                { validator: Validators.isNotEmpty, errMsg: 'No puede estar vacío' },
                { validator(value) { return value.length <= 10; }, errMsg: 'No más de 10 palabras' },
              ]}
            />
          </Form>
        </Column>
      </Column.Group>

    </>
  )
}

export default function Prueba() {


  const [state, setState] = useState({
    mode: true,
    fileList: [],
  })

  function handleSubmit() {
    console.log('asd');
  }
  function handleChange(fileList) {
    setState({
      fileList,
    });
  }
  const tips = <span className="tips">Limitado a 0.5M <em>（formatos admitidos：.doc; .docx; .xls; .xlsx）</em></span>;

  return (
    <Hero color="white" style={{
      paddingTop: '51px',
      marginBottom: '1rem',
      backgroundColor: ' #ecf0f1',
      borderRadius: '0.3rem',
      paddingRight: '2rem',
      paddingLeft: '14px',
      marginRight: 'auto',
      marginLeft: 'auto',
    }} >
      <Column.Group style={{ margin: 'auto' }}>
        <Box m={1} css={{ padding: 5 }}>
          <StepForm />
        </Box>
      </Column.Group>
    </Hero >)
}









function StepForm() {
  const [state, setState] = useState({
    current: 0,
  })

  function next() {
    const current = state.current + 1;
    setState({ current });
  }

  function prev() {
    const current = state.current - 1;
    setState({ current });
  }


  const { current } = state;
  return (
    <div>
      <Steps current={current} style={{ boxShadow:' 0 -1px 92px rgba(0,0,0,0.25), 0 6px 28px rgba(0,0,0,0.22)',
        borderRadius: '5px',
        padding: '3px'
      }}>
        {steps.map(item => (
          <Step key={item.title} title={item.title} icon={item.icon} />
        ))}
      </Steps>
      <div className="steps-content">{steps[current].content}</div>
      <div className="steps-action">
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Siguiente
            </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" onClick={() => message.success('Publicacion Realizada!')}>
            Crear Proyecto
            </Button>
        )}
        {current > 0 && (
          <Button style={{ marginLeft: 8 }} onClick={() => prev()}>
            Retroceder
            </Button>
        )}
      </div>
    </div>
  );
}




function ImagenForm() {
  const [state, setState] = useState({
    mode: true,
    fileList: [],
  })
  function handleChange(fileList) {
    setState({
      fileList,
    });
  }
  const tips = <span className="tips">Limitado a 0.5M <em>（formatos admitidos：.doc; .docx; .xls; .xlsx）</em></span>;

  return (

    <div className="demo-validator">
      <div style={{ padding: '2rem' }}>
        <h2>Suba una Imagen de su proyecto</h2>
        <Uploader
          style={{ padding: 10 }}
          multiple={false}
          isOnlyImg={false}
          tips={tips}
          fileList={state.fileList}
          onChange={handleChange}
          name="file"
          url="http://eternalsky.me:8122/file/upload"
          locale="en"
        />
      </div>
    </div>
  )
}


function CondicionPago() {
  const [state, setState] = useState({
    mode: true,
    fileList: [],
  })
  function handleChange(fileList) {
    setState({
      fileList,
    });
  }


  const {
    InputFormField: Input,
    DateFormField: Date,
    TextAreaFormField: TextArea,
    FormRow: Row,
    SelectFormField,
    Validators,
  } = Form;
  return (
    <>
      <Column.Group multiline centered>
        <Column size="half">
          <Form instantValidate={state.mode}>
            <Input
              jsxname="anticipo"
              jsxlabel="%Anticipo"
              inputBoxMaxWidth="middle"

              required
              jsxplaceholder="Ingresa la Ubicación de Entrega"
              jsxrules={[
                { validator: Validators.isNotEmpty, errMsg: 'No puede estar vacío' },
              ]}
            />
          </Form>
        </Column>
        <Column size="half">
          <Form instantValidate={state.mode}>
            <Input
              jsxname="theme"
              inputBoxMaxWidth="middle"
              jsxlabel="Contraentrega"
              required
              jsxplaceholder="Ingresa la descripción del Contraentrega"
              jsxrules={[
                { validator: Validators.isNotEmpty, errMsg: 'No puede estar vacío' },
                { validator(value) { return value.length <= 10; }, errMsg: 'No más de 10 palabras' },
              ]}
            />
          </Form>
        </Column>
        <Column size="half">
          <Form instantValidate={state.mode}>
            <Input
              jsxname="theme"
              inputBoxMaxWidth="middle"
              jsxlabel="Crédito por"
              required
              jsxplaceholder="Ingresa el credito"
              jsxrules={[
                { validator: Validators.isNotEmpty, errMsg: 'No puede estar vacío' },
                { validator(value) { return value.length <= 10; }, errMsg: 'No más de 10 palabras' },
              ]}
            />
          </Form>
        </Column>
      </Column.Group>
    </>
  )
}








function MaterialLotesForm() {
  const [state, setState] = useState({
    mode: true,
    fileList: [],
  })
  function handleChange(fileList) {
    setState({
      fileList,
    });
  }


  const {
    InputFormField: Input,
    DateFormField: Date,
    TextAreaFormField: TextArea,
    FormRow: Row,
    SelectFormField,
    Validators,
  } = Form;
  return (
    <>
      <Column.Group multiline centered>
        <Column size="half">
          <Form instantValidate={state.mode}>
            <Input
              jsxname="Categoria"
              jsxlabel="Categoria"
              inputBoxMaxWidth="middle"

              required
              jsxplaceholder="Ingresa la Categoria de Entrega"
              jsxrules={[
                { validator: Validators.isNotEmpty, errMsg: 'No puede estar vacío' },
              ]}
            />
          </Form>
        </Column>
        <Column size="half">
          <Form instantValidate={state.mode}>
            <Input
              jsxname="Nombre del material/lote"
              inputBoxMaxWidth="middle"
              jsxlabel="Nombre del material/lote"
              required
              jsxplaceholder="Ingresa Nombre del material o lote"
              jsxrules={[
                { validator: Validators.isNotEmpty, errMsg: 'No puede estar vacío' },
                { validator(value) { return value.length <= 10; }, errMsg: 'No más de 10 palabras' },
              ]}
            />
          </Form>
        </Column>
        <Column size="half">
          <Form instantValidate={state.mode}>
            <Input
              jsxname="theme"
              inputBoxMaxWidth="middle"
              jsxlabel=" Fecha límite "
              required
              jsxplaceholder="Ingresa la  Fecha límite "
              jsxrules={[
                { validator: Validators.isNotEmpty, errMsg: 'No puede estar vacío' },
                { validator(value) { return value.length <= 10; }, errMsg: 'No más de 10 palabras' },
              ]}
            />
          </Form>
        </Column>
        <Column size="half">
          Fichas técnicas
        </Column>
        <Column size="half" style={{ display: 'table' }}>
          <h1>Agrega Planos</h1>
          <Dragger {...props}>
            <p className="ant-upload-drag-icon">
              <Icon type="inbox" />
            </p>
            <p className="ant-upload-text">Haga clic o arrastre el archivo a esta área para cargar planos </p>
            {/* <p className="ant-upload-hint">
    Support for a single or bulk upload. Strictly prohibit from uploading company data or other
      band files
    </p> */}
          </Dragger>,
        </Column >
      </Column.Group>

    </>
  )
}





const props = {
  name: 'file',
  multiple: true,
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};




const Datos = [{
  Proyecto: "Gendra", Finalización: Date.now().toString(), UbicaciónEntrega: "Ixmiquilpan",
  Descripción: "Gendra tiene como finalidad.....",
  Imagen: "https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg",
  CondicionesPago: [{ Anticipo: "12", ContraEntrega: "39", CreditoPorDias: "2", }],
  "Materiales/Lotes": [{ Categoria: "www", "NombreMaterial/Lote": "dsad", FechaLimite: Date.now().toString(), Cantidad: 20, UnidadMedida: "Unidad", planos: [] }]
}]

function Vizualizar() {
  const item = Datos[0]
  console.log(item)
  console.log(Datos)
  return (<Column.Group centered>
    <Column size="three-fifths">
    <Item item={item} crear={'crear'} />
    </Column>
    </Column.Group>
  )
}
