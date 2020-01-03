import React from "react";
import TextField from "@material-ui/core/TextField";
import { Form, Input } from 'antd';
import { Input as InputZ } from 'zent';

export const InputMaterial = props => {
  const { id, label, name, required, type, value, onChange } = props;
  return (
    <TextField
      variant="outlined"
      margin="normal"
      required={required}
      value={value}
      onChange={onChange}
      fullWidth
      name={name}
      label={label}
      type={type}
      id={id}
      autoComplete="current-password"
    />
  );
};

export const InputAntd = props => {
  const { getFieldDecorator, label, handleChange, placeholder, message, style } = props
  const changeInput = (e,value) => {

    handleChange(value,e.target.value)
  }
  return (
    <Form.Item label={`${label}`} style={style}>
      {getFieldDecorator ? getFieldDecorator(label, {
        rules: [
          {
            required: true,
            message:`${message}`,
          },
        ],
      })(<Input placeholder={`${placeholder}`} onChange={e=>changeInput(e,label)}/>):<Input placeholder={`${placeholder}`} onChange={e=>changeInput(e,label)}/>}
    </Form.Item>
  )
}
export const InputAntd2 = props => {
  const { getFieldDecorator, label, handleChange, placeholder, message, style } = props
  const changeInput = (e,value) => {

    handleChange(value,e.target.value)
  }
  return (
    <Form.Item label={`${label}`} style={style ,{display:'flex'}}>
      {getFieldDecorator ? getFieldDecorator(label, {
        rules: [
          {
            required: true,
            message:`${message}`,
          },
        ],
      })(<Input placeholder={`${placeholder}`} onChange={e=>changeInput(e,label)}/>):<Input placeholder={`${placeholder}`} onChange={e=>changeInput(e,label)}/>}
    </Form.Item>
  )
}
export const InputSitio = props => {
  const { getFieldDecorator, label, handleChange, placeholder, message, style } = props
  const changeInput = (e,value) => {

    handleChange(value,e.target.value)
  }
  return (
    <Form.Item label={`${label}`} >
      {getFieldDecorator ? getFieldDecorator(label, {
        rules: [
          {
            required: true,
            message:`${message}`,
          },
        ],
      })(<Input  placeholder={`${placeholder}`} onChange={e=>changeInput(e,label)} addonBefore="http://www." />):<InputZ addonBefore="http://www." placeholder={`${placeholder}`} onChange={e=>changeInput(e,label)}/>}
    </Form.Item>
  )
}