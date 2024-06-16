import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const CreateServerForm = () => {
    const initialValues = {
        title: '',
        ip: '',
        port: '',
        username: '',
        password: '',
    };

    const validationSchema = Yup.object({
        title: Yup.string().required('Required'),
        ip: Yup.string()
            .required('Required')
            .matches(
                /^(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)$/,
                'Invalid IP address'
            ),
        port: Yup.number()
            .required('Required')
            .min(1, 'Port must be between 1 and 65535')
            .max(65535, 'Port must be between 1 and 65535'),
        username: Yup.string().required('Required'),
        password: Yup.string().required('Required'),
    });

    const onSubmit = async (values, { setSubmitting, resetForm }) => {
        try {
            const response = await axios.post('https://api.example.com/servers', values);
            console.log('Server created:', response.data);
            resetForm();
        } catch (error) {
            console.error('There was an error creating the server!', error);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10">
            <h1 className="text-2xl font-bold mb-5">Create Server</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {({ isSubmitting }) => (
                    <Form className="space-y-4">
                        <div>
                            <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                            <Field type="text" id="title" name="title" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
                            <ErrorMessage name="title" component="div" className="text-red-500 text-sm" />
                        </div>

                        <div>
                            <label htmlFor="ip" className="block text-sm font-medium text-gray-700">IP</label>
                            <Field type="text" id="ip" name="ip" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
                            <ErrorMessage name="ip" component="div" className="text-red-500 text-sm" />
                        </div>

                        <div>
                            <label htmlFor="port" className="block text-sm font-medium text-gray-700">Port</label>
                            <Field type="number" id="port" name="port" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
                            <ErrorMessage name="port" component="div" className="text-red-500 text-sm" />
                        </div>

                        <div>
                            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                            <Field type="text" id="username" name="username" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
                            <ErrorMessage name="username" component="div" className="text-red-500 text-sm" />
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                            <Field type="password" id="password" name="password" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
                            <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
                        </div>

                        <div>
                            <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md" disabled={isSubmitting}>
                                {isSubmitting ? 'Submitting...' : 'Create Server'}
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default CreateServerForm;