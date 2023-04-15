import React from 'react'
import Layout from './../components/Layout';
import { Col, Form, Input, Row, TimePicker} from 'antd'

const ApplyDoctor = () => {
    const HandleFinish = (values) => {
        console.log(values)
    }
  return ( 
    <Layout>
        <h1 className="text-center">Apply Doctor</h1>
        <Form layout="vertical" onfinish={HandleFinish} className="m-3">
        <h4 className="">Personal Details:</h4>
            <Row gutter={20}>
               
                <Col xs={24} md={24} lg={8}>
                    <Form.Item
                     label="First Name"
                     name="firstName"
                     required
                     rules= {[{ required: true }]}
                     >
                        <Input type="text" placeholder="your first name" />
                    </Form.Item>
                </Col>
                <Col xs={24} md={24} lg={8}>
                    <Form.Item
                      label="Last Name"
                      name="lastname"
                      required
                      rules={[{ required: true }]}
                    >
                        <Input type="text"placeholder="your last name" />

                    </Form.Item>
                </Col>
                <Col xs={24} md={24} lg={8}>
                    <Form.Item
                      label="Phone No "
                      name="phone"
                      required
                      rules={[{ required: true }]}
                    >
                        <Input type="text"placeholder="your contact no" />

                    </Form.Item>
                </Col>
                <Col xs={24} md={24} lg={8}>
                    <Form.Item
                      label="Email"
                      name="email"
                      required
                      rules={[{ required: true }]}
                    >
                        <Input type="email"placeholder="your email address" />

                    </Form.Item>
                </Col>
                <Col xs={24} md={24} lg={8}>
                    <Form.Item
                      label="Website"
                      name="website"
                      required
                      rules={[{ required: true }]}
                    >
                        <Input type="website"placeholder="your website" />

                    </Form.Item>
                </Col>
                <Col xs={24} md={24} lg={8}>
                    <Form.Item
                      label="Address"
                      name="address"
                      required
                      rules={[{ required: true }]}
                    >
                        <Input type="text"placeholder="your clinic address " />

                    </Form.Item>
                </Col>


            </Row>

        </Form>

         <h4 className="">Professional Details:</h4>
            <Row gutter={20}>
               
                <Col xs={24} md={24} lg={8}>
                    <Form.Item
                     label=" Specialization"
                     name="specialization"
                     required
                     rules= {[{ required: true }]}
                     >
                        <Input type="text" placeholder="your specialization" />
                    </Form.Item>
                </Col>
                <Col xs={24} md={24} lg={8}>
                    <Form.Item
                      label="Experience "
                      name="experience"
                      required
                      rules={[{ required: true }]}
                    >
                        <Input type="text"placeholder="your experience" />

                    </Form.Item>
                </Col>
                <Col xs={24} md={24} lg={8}>
                    <Form.Item
                      label="Fees Per Cunsaltation "
                      name="feesPerCunsaltation"
                      required
                      rules={[{ required: true }]}
                    >
                        <Input type="text"placeholder="your feespercunsaltation" />

                    </Form.Item>
                </Col>
                <Col xs={24} md={24} lg={8}>
                    <Form.Item
                      label="Timing"
                      name="timing"
                      required
                      rules={[{ required: true }]}
                    >
                      <TimePicker.RangePicker/>

                    </Form.Item>
                </Col>
            </Row>
            <div className="d-flex justify-content-end">
                <button className="btn btn-primary" type="submit">submit</button>
            </div>
   
    </Layout>
  );
};

export default ApplyDoctor