import React from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"

const NewMemberForm = () => (
  <div>
    <h1>Add Member</h1>
    <Formik
      initialValues={{ fullName: "", location: "", class: "" }}
      validate={(values) => {
        const errors = {}
        if (!values.fullName) {
          errors.fullName = "Required"
        }

        if (!values.location) {
          errors.location = "Required"
        }

        if (!values.class) {
          errors.class = "Required"
        }

        return errors
      }}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values)
        setSubmitting(false)
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field
            type="text"
            name="fullName"
            className="px-2 py-1 rounded-lg border-2 mr-2"
          />
          <ErrorMessage name="fullName" component="div" />

          <Field
            name="location"
            as="select"
            placeholder="Choose location"
            className="px-2 py-1 rounded-lg border-2 mr-2"
          >
            <option value="JT-BOR">JT BOR</option>
            <option value="JT-L-BLOCK">JT L-BLOCK</option>
            <option value="UMT">UMT</option>
            <option value="OTHERS">Others</option>
          </Field>
          <ErrorMessage name="location" component="div" />

          <Field
            name="class"
            as="select"
            placeholder="Choose class"
            className="px-3 py-2 rounded-lg border-2 mr-2"
          >
            <option value="JAIZA_PASS">Jaiza Pass</option>
            <option value="CIRCLE">Circle</option>
            <option value="FORUM">Forum</option>
            <option value="MADANI_HALL">Madani Hall</option>
            <option value="MATWAQEE_MADOO">Matwaqee Madoo</option>
          </Field>
          <ErrorMessage name="class" component="div" />

          <button
            type="submit"
            disabled={isSubmitting}
            className="px-2 py-1 rounded-lg border-2 mr-2 bg-blue-500 text-blue-100"
          >
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </div>
)

export default NewMemberForm
