import React from 'react';
import './App.css';
import { Form, Input, Button } from 'antd'

function App() {
  const on1FormFinish = async (formData: any) => {
    await fetch('http://38.54.84.102:3001/pdf', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(res => res.blob())
    .then(data => {
      const url = URL.createObjectURL(data)

      let alink = document.createElement('a');
      alink.href = url;
      alink.download = 'document.pdf';
      alink.click();
    })
  }

  const on2FormFinish = async (formData: any) => {
    await fetch('http://38.54.84.102:3001/pdf/receiving', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(res => res.blob())
    .then(data => {
      const url = URL.createObjectURL(data)

      let alink = document.createElement('a');
      alink.href = url;
      alink.download = 'document.pdf';
      alink.click();
    })
  }

  return (
    <div className="container">
        <Form name="form1" onFinish={on1FormFinish} className="column">
          <Form.Item name="firstName">
            <Input placeholder="first name"/>
          </Form.Item>

          <Form.Item name="lastName">
            <Input placeholder="last name"/>
          </Form.Item>

          <Form.Item name="middleName">
            <Input placeholder="middle name"/>
          </Form.Item>

          <Form.Item name="documetSeries">
            <Input placeholder="documet series"/>
          </Form.Item>

          <Form.Item name="documentType">
            <Input placeholder="document type"/>
          </Form.Item>

          <Form.Item name="gender">
            <Input placeholder="gender"/>
          </Form.Item>

          <Form.Item name="birthday">
            <Input placeholder="birthday: DD.MM.YYYY"/>
          </Form.Item>

          <Form.Item name="placeBirth">
            <Input placeholder="place birth"/>
          </Form.Item>

          <Form.Item name="issueDate">
            <Input placeholder="issue date: DD.MM.YYYY"/>
          </Form.Item>

          <Form.Item name="address">
            <Input placeholder="address"/>
          </Form.Item>

          <Form.Item name="startDate">
            <Input placeholder="stop date: DD.MM.YYYY"/>
          </Form.Item>

          <Form.Item name="stopDate">
            <Input placeholder="stop date: DD.MM.YYYY"/>
          </Form.Item>

          <Button type="primary" htmlType="submit">Submit</Button>
        </Form>

        <Form name="form2" onFinish={on2FormFinish} className="column">
          <Form.Item name="firstName">
            <Input placeholder="first name"/>
          </Form.Item>

          <Form.Item name="lastName">
            <Input placeholder="last name"/>
          </Form.Item>

          <Form.Item name="middleName">
            <Input placeholder="middle name"/>
          </Form.Item>

          <Form.Item name="countryOfBirth">
            <Input placeholder="country of birth"/>
          </Form.Item>

          <Form.Item name="birthday">
            <Input placeholder="birthday: DD.MM.YYYY"/>
          </Form.Item>

          <Form.Item name="documentType">
            <Input placeholder="document type"/>
          </Form.Item>

          <Form.Item name="documetSeries">
            <Input placeholder="documet series"/>
          </Form.Item>

          <Form.Item name="documetNumber">
            <Input placeholder="documet number"/>
          </Form.Item>

          <Form.Item name="documentIssueDate">
            <Input placeholder="document issue date: DD.MM.YYYY"/>
          </Form.Item>

          <Form.Item name="documentExpireDate">
            <Input placeholder="document expire date: DD.MM.YYYY"/>
          </Form.Item>

          <Form.Item name="placeOfResidence">
            <Input placeholder="place of residence"/>
          </Form.Item>

          <Form.Item name="area">
            <Input placeholder="area"/>
          </Form.Item>

          <Form.Item name="cityName">
            <Input placeholder="city name"/>
          </Form.Item>

          <Form.Item name="houseNumber">
            <Input placeholder="house number"/>
          </Form.Item>

          <Form.Item name="apartmentNumber">
            <Input placeholder="apartment number"/>
          </Form.Item>

          <Form.Item name="stayDate">
            <Input placeholder="stay date: DD.MM.YYYY"/>
          </Form.Item>

          <Form.Item name="ownerFirstName">
            <Input placeholder="owner first name"/>
          </Form.Item>

          <Form.Item name="ownerLastName">
            <Input placeholder="owner last name"/>
          </Form.Item>

          <Form.Item name="ownerMiddleName">
            <Input placeholder="owner middle name"/>
          </Form.Item>

          <Form.Item name="gender">
            <Input placeholder="gender: M \ Ж"/>
          </Form.Item>

          <Button type="primary" htmlType="submit">Submit</Button>
        </Form>
    </div>

  );
}

export default App;
