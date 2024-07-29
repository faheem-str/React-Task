import React, { useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormCheck,
  CFormInput,
  CFormFeedback,
  CFormLabel,
  CFormSelect,
  CFormTextarea,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import { DocsExample } from 'src/components'

const Setting = () => {
  const [validated, setValidated] = useState(false)
  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }
    setValidated(true)
  }
  return (
    <div className="mb-4 card myProfile">
      <div>
        <h4 className="card-title">Update Profile</h4>
      </div>
      <CForm
        className="mt-16 row g-3 needs-validation"
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
      >
        <CCol md={4}>
          <CFormLabel htmlFor="validationCustom01">Name</CFormLabel>
          <CFormInput type="text" id="validationCustom01" defaultValue="" required />
          <CFormFeedback invalid>Please fill the field.</CFormFeedback>
        </CCol>
        <CCol md={4}>
          <CFormLabel htmlFor="validationCustom02">Email</CFormLabel>
          <CFormInput type="email" id="validationCustom02" defaultValue="" required />
          <CFormFeedback invalid>Please fill proper mail id.</CFormFeedback>
        </CCol>
        <CCol md={4}>
          <CFormLabel htmlFor="validationCustom03">City</CFormLabel>
          <CFormInput type="text" id="validationCustom03" required />
          <CFormFeedback invalid>Please fill the field.</CFormFeedback>
        </CCol>
        <CCol md={4}>
          <CFormLabel htmlFor="validationCustom05">No.of Experience</CFormLabel>
          <CFormInput type="text" id="validationCustom05" required />
          <CFormFeedback invalid>Please fill the field.</CFormFeedback>
        </CCol>
        <CCol xs={12}>
          <CButton color="primary" type="submit">
            Update form
          </CButton>
        </CCol>
      </CForm>
    </div>
  )
}

export default Setting
