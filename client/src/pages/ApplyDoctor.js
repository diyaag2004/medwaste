import React from 'react'
import Layout from './../components/Layout';
import {} from 'antd'

const ApplyDoctor = () => {
    const HandleFinish = (values) => {
        console.log(values)
    }
  return ( 
    <Layout>
        <h1 className="text-center">Apply Doctor</h1>
        <Form layout="vertical" onfinish={HandleFinish}>
            <Row>
                <Col xs={24} md={24} lg={8}>
                    <Form.Item
                     label="First Name">
                        

                    </Form.Item>


                </Col>

            </Row>

        </Form>
     </Layout>
  )
}

export default ApplyDoctor