import React from "react";
import "./App.css";
import { Form, Input, Button } from "antd";

function App() {
  const on1FormFinish = async (formData: any) => {
    await fetch("http://38.54.84.102:3001/pdf", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.blob())
      .then((data) => {
        const url = URL.createObjectURL(data);

        let alink = document.createElement("a");
        alink.href = url;
        alink.download = "document.pdf";
        alink.click();
      });
  };

  const on2FormFinish = async (formData: any) => {
    await fetch("http://38.54.84.102:3001/pdf/receiving", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.blob())
      .then((data) => {
        const url = URL.createObjectURL(data);

        let alink = document.createElement("a");
        alink.href = url;
        alink.download = "document.pdf";
        alink.click();
      });
  };

  return (
    <div className="container">
      <Form name="form1" onFinish={on1FormFinish} className="column">
        <Form.Item name="lastName" label="Фамилия">
          <Input placeholder="Фамилия" />
        </Form.Item>

        <Form.Item name="firstName" label="Имя">
          <Input placeholder="Имя" />
        </Form.Item>

        <Form.Item name="middleName" label="Отчество">
          <Input placeholder="Отчество" />
        </Form.Item>

        <Form.Item name="latLastName" label="Фамилия (лат.)">
          <Input placeholder="Фамилия (лат.)" />
        </Form.Item>

        <Form.Item name="latFirstName" label="Имя (лат.)">
          <Input placeholder="Имя (лат.)" />
        </Form.Item>

        <Form.Item name="latMiddleName" label="Отчество (лат.)">
          <Input placeholder="Отчество (лат.)" />
        </Form.Item>

        <Form.Item name="documentSeries" label="Серия Паспорта">
          <Input placeholder="Серия Паспорта" />
        </Form.Item>

        <Form.Item name="documentType" label="Тип документа">
          <Input placeholder="Тип документа" />
        </Form.Item>

        <Form.Item name="gender" label="Пол">
          <Input placeholder="Пол" />
        </Form.Item>

        <Form.Item name="birthday" label="Дата Рождения">
          <Input placeholder="DD.MM.YYYY" />
        </Form.Item>

        <Form.Item name="placeBirth" label="Место Рождения">
          <Input placeholder="Место Рождения" />
        </Form.Item>

        <Form.Item name="documentIssueDate" label="Дата выдачи">
          <Input placeholder="Дата выдачи" />
        </Form.Item>

        <Form.Item name="address" label="Адрес">
          <Input placeholder="Адрес" />
        </Form.Item>

        <Form.Item name="startDate" label="Срок регистрации с">
          <Input placeholder="DD.MM.YYYY" />
        </Form.Item>

        <Form.Item name="stopDate" label="Срок регистрации по">
          <Input placeholder="DD.MM.YYYY" />
        </Form.Item>

        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form>

      <Form name="form2" onFinish={on2FormFinish} className="column">
        <Form.Item name="lastName" label="Фамилия">
          <Input placeholder="Фамилия" />
        </Form.Item>

        <Form.Item name="firstName" label="Имя">
          <Input placeholder="Имя" />
        </Form.Item>

        <Form.Item name="middleName" label="Отчество">
          <Input placeholder="Отчество" />
        </Form.Item>

        <Form.Item name="countryOfBirth" label="Гражданство">
          <Input placeholder="Гражданство" />
        </Form.Item>

        <Form.Item name="birthday" label="Дата Рождения">
          <Input placeholder="DD.MM.YYYY" />
        </Form.Item>

        <Form.Item name="documentType" label="Тип документа">
          <Input placeholder="Тип документа" />
        </Form.Item>

        <Form.Item name="documetSeries" label="Серия документа">
          <Input placeholder="Серия документа" />
        </Form.Item>

        <Form.Item name="documetNumber" label="Номер документа">
          <Input placeholder="Номер документа" />
        </Form.Item>

        <Form.Item name="documentIssueDate" label="Дата выдачи">
          <Input placeholder="DD.MM.YYYY" />
        </Form.Item>

        <Form.Item name="documentExpireDate" label="Срок действия">
          <Input placeholder="DD.MM.YYYY" />
        </Form.Item>

        <Form.Item name="placeOfResidence" label="Область, край, ресублика">
          <Input placeholder="Область, край, ресублика" />
        </Form.Item>

        <Form.Item name="area" label="Район">
          <Input placeholder="Район" />
        </Form.Item>

        <Form.Item name="cityName" label="Город">
          <Input placeholder="Город" />
        </Form.Item>

        <Form.Item name="street" label="Улица">
          <Input placeholder="Улица" />
        </Form.Item>

        <Form.Item name="houseNumber" label="Дом">
          <Input placeholder="Дом" />
        </Form.Item>

        <Form.Item name="apartmentNumber" label="Квартира">
          <Input placeholder="Квартира" />
        </Form.Item>

        <Form.Item name="hullNumber" label="Корпус">
          <Input placeholder="Корпус" />
        </Form.Item>

        <Form.Item name="buildingNumber" label="Строение">
          <Input placeholder="Строение" />
        </Form.Item>

        <Form.Item name="stayDate" label="Заявленный срок пребывания">
          <Input placeholder="DD.MM.YYYY" />
        </Form.Item>

        <Form.Item name="ownerLastName" label="Фамилия принимающей стороны">
          <Input placeholder="DD.MM.YYYY" />
        </Form.Item>

        <Form.Item name="ownerFirstName" label="Имя принимающей стороны">
          <Input placeholder="Имя принимающей стороны" />
        </Form.Item>

        <Form.Item name="ownerMiddleName" label="Отчество принимающей стороны">
          <Input placeholder="Отчество принимающей стороны" />
        </Form.Item>

        <Form.Item name="gender" label="Пол: M \ Ж">
          <Input placeholder="Пол: M \ Ж" />
        </Form.Item>

        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default App;
