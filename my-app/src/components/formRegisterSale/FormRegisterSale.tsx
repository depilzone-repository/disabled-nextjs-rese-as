"use client "

"use client"
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

import { toast } from "sonner";
import { IFormRegisterSale } from "./types";
import validateForm, { fields } from "./validateForm";


const FormRegisterSale = () => {
  const initialValues: IFormRegisterSale = {
     purchaseDate:'',
     orderNumber:'',
     clientName:'',
     clientNumber:'',
     advisor:'',
     advisorNumber:'',
     clientType:'',
     service:'',
     promotion:'',
     promotionCoupon:'',
     sede:'',
     appointmentDate:   '',
     appointmentHour: '',
     observation: '',
  };

  const onSubmit = (values: IFormRegisterSale) => {
    console.log("Datos enviados: ", values);
    toast.success("Usuario registrado con éxito");
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validateForm}
      onSubmit={onSubmit}
    >
       {({ isSubmitting }) => (
        <Form className="w-auto md:max-w-[60%] mx-auto my-8 p-6 bg-white rounded-lg shadow-md">
            <h1 className="text-center text-2xl font-bold text-cyan-500 pb-5">REGISTROS DE VENTAS</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {fields.map((field) => (
            <div key={field.name} className="mb-4">
              <label className="block text-sm font-medium text-gray-700">{field.label}</label>
              {field.type === "select" ? (
                <Field
                  as="select"
                  name={field.name}
                   autoComplete="off"
                  className="mt-1 px-4 py-2 border border-gray-300 bg-white rounded-md  w-full hover:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                >
                  <option value="">Selecciona una opción</option>
                  {field.options?.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </Field>
              ) : (
                <Field
                  name={field.name}
                  type={field.type}
                    autoComplete="off"
                  className="mt-1 px-3 py-2 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              )}

              <ErrorMessage
                name={field.name}
                component="p"
                className="text-red-500 text-sm mt-2"
              />
            </div>
          ))}
            </div>


          <div className="mt-4 flex justify-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full md:w-[40%] bg-cyan-500 hover:bg-cyan-600 text-white py-2 px-4 rounded-md shadow "
            >
              ENVIAR
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default FormRegisterSale;
