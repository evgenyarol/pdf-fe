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
        <Form.Item name="lastName">
          <Input placeholder="Фамилия" />
        </Form.Item>

        <Form.Item name="firstName">
          <Input placeholder="Имя" />
        </Form.Item>

        <Form.Item name="middleName">
          <Input placeholder="Отчество" />
        </Form.Item>

        <Form.Item name="documetSeries">
          <Input placeholder="Серия Паспорта" />
        </Form.Item>

        <Form.Item name="documentType">
          <Input placeholder="Тип документа" />
        </Form.Item>

        <Form.Item name="gender">
          <Input placeholder="Пол" />
        </Form.Item>

        <Form.Item name="birthday">
          <Input placeholder="Дата Рождения: DD.MM.YYYY" />
        </Form.Item>

        <Form.Item name="placeBirth">
          <Input placeholder="Место Рождения" />
        </Form.Item>

        <Form.Item name="issueDate">
          <Input placeholder="Дата выдачи" />
        </Form.Item>

        <Form.Item name="address">
          <Input placeholder="Адрес" />
        </Form.Item>

        <Form.Item name="startDate">
          <Input placeholder="Срок регистрации с: DD.MM.YYYY" />
        </Form.Item>

        <Form.Item name="stopDate">
          <Input placeholder="Срок регистрации по: DD.MM.YYYY" />
        </Form.Item>

        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form>

      <Form name="form2" onFinish={on2FormFinish} className="column">
        <Form.Item name="lastName">
          <Input placeholder="Фамилия" />
        </Form.Item>

        <Form.Item name="firstName">
          <Input placeholder="Имя" />
        </Form.Item>

        <Form.Item name="middleName">
          <Input placeholder="Отчество" />
        </Form.Item>

        <Form.Item name="countryOfBirth">
          <Input placeholder="Гражданство" />
        </Form.Item>

        <Form.Item name="birthday">
          <Input placeholder="Дата Рождения: DD.MM.YYYY" />
        </Form.Item>

        <Form.Item name="documentType">
          <Input placeholder="Тип документа" />
        </Form.Item>

        <Form.Item name="documetSeries">
          <Input placeholder="Серия документа" />
        </Form.Item>

        <Form.Item name="documetNumber">
          <Input placeholder="Номер документа" />
        </Form.Item>

        <Form.Item name="documentIssueDate">
          <Input placeholder="Дата выдачи: DD.MM.YYYY" />
        </Form.Item>

        <Form.Item name="documentExpireDate">
          <Input placeholder="Срок действия: DD.MM.YYYY" />
        </Form.Item>

        <Form.Item name="placeOfResidence">
          <Input placeholder="Область, край, ресублика" />
        </Form.Item>

        <Form.Item name="area">
          <Input placeholder="Район" />
        </Form.Item>

        <Form.Item name="cityName">
          <Input placeholder="Город" />
        </Form.Item>

        <Form.Item name="houseNumber">
          <Input placeholder="Дом" />
        </Form.Item>

        <Form.Item name="apartmentNumber">
          <Input placeholder="Квартира" />
        </Form.Item>

        <Form.Item name="stayDate">
          <Input placeholder="Заявленный срок пребывания: DD.MM.YYYY" />
        </Form.Item>

        <Form.Item name="ownerLastName">
          <Input placeholder="Фамилия принимающей стороны" />
        </Form.Item>

        <Form.Item name="ownerFirstName">
          <Input placeholder="Имя принимающей стороны" />
        </Form.Item>

        <Form.Item name="ownerMiddleName">
          <Input placeholder="Отчество принимающей стороны" />
        </Form.Item>

        <Form.Item name="gender">
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
