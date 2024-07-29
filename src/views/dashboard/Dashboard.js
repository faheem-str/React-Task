import React from 'react'
import classNames from 'classnames'
import { useSelector, useDispatch } from 'react-redux'
import { fetchData } from '../../Redux/Action'
import { useEffect } from 'react'
import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CSpinner,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cibGoogle,
  cibFacebook,
  cibLinkedin,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cibTwitter,
  cilCloudDownload,
  cilPeople,
  cilUser,
  cilUserFemale,
} from '@coreui/icons'

import avatar1 from 'src/assets/images/avatars/1.jpg'
import avatar2 from 'src/assets/images/avatars/2.jpg'
import avatar3 from 'src/assets/images/avatars/3.jpg'
import avatar4 from 'src/assets/images/avatars/4.jpg'
import avatar5 from 'src/assets/images/avatars/5.jpg'
import avatar6 from 'src/assets/images/avatars/6.jpg'

import WidgetsBrand from '../widgets/WidgetsBrand'
import WidgetsDropdown from '../widgets/WidgetsDropdown'
import MainChart from './MainChart'

const Dashboard = () => {
  const dispatch = useDispatch()
  const data = useSelector((state) => state.data?.data || []) // Use optional chaining and default

  useEffect(() => {
    dispatch(fetchData())
  }, [dispatch])

  const tableExample = [
    {
      user: {
        name: 'Yiorgos Avraamu',
        new: true,
        registered: 'Jan 1, 2023',
      },
    },
    {
      user: {
        name: 'Avram Tarasios',
        new: false,
        registered: 'Jan 1, 2023',
      },
    },
    {
      user: { name: 'Quintin Ed', new: true, registered: 'Jan 1, 2023' },
    },
    {
      user: { name: 'Enéas Kwadwo', new: true, registered: 'Jan 1, 2023' },
    },
    {
      user: {
        name: 'Agapetus Tadeáš',
        new: true,
        registered: 'Jan 1, 2023',
      },
    },
    {
      user: {
        name: 'Friderik Dávid',
        new: true,
        registered: 'Jan 1, 2023',
      },
    },
  ]

  return (
    <>
      {data.length === 0 ? (
        <div className=" spiner ">
          <CSpinner />
        </div>
      ) : (
        <>
          <div className="mb-4 card myProfile">
            <div className="details card-header">
              <img
                className="myImage"
                src="/src/assets/images/IMG_20240716_180253.jpg"
                width={120}
              />
              <div className="p-16">
                <h4 className="card-title">{data.name}</h4>
                <p className="small text-body-secondary">{data.role}</p>
              </div>
            </div>
            <div>
              <h3 className="card-title mt-16">About me</h3>
              <p className="small">{data.aboutMe}</p>
            </div>
          </div>
          <WidgetsBrand className="mb-4" list={data.tectDetails} />
          <CRow>
            <CCol xs>
              <CCard className="mb-4">
                <CCardHeader>Company List</CCardHeader>
                <CCardBody>
                  <CTable align="middle" className="mb-0 border" hover responsive>
                    <CTableHead className="text-nowrap">
                      <CTableRow>
                        <CTableHeaderCell className="bg-body-tertiary">
                          Company Name
                        </CTableHeaderCell>
                        <CTableHeaderCell className="bg-body-tertiary">Location</CTableHeaderCell>
                        <CTableHeaderCell className="bg-body-tertiary">
                          Woking Experience
                        </CTableHeaderCell>
                      </CTableRow>
                    </CTableHead>
                    <CTableBody>
                      {data &&
                        data.companyList.map((item, index) => (
                          <CTableRow v-for="item in tableItems" key={index}>
                            <CTableDataCell>
                              <div>{item.companyName}</div>
                            </CTableDataCell>
                            <CTableDataCell>
                              <div>{item.Location}</div>
                            </CTableDataCell>
                            <CTableDataCell>
                              <div>{item.workExp + 'Years'}</div>
                            </CTableDataCell>
                          </CTableRow>
                        ))}
                    </CTableBody>
                  </CTable>
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
        </>
      )}
    </>
  )
}

export default Dashboard
