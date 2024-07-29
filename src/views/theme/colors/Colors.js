import React, { useState } from 'react'
import { CCard, CCardBody, CCol, CCardHeader, CRow } from '@coreui/react'
import {
  CChartBar,
  CChartDoughnut,
  CChartLine,
  CChartPie,
  CChartPolarArea,
  CChartRadar,
} from '@coreui/react-chartjs'
import { DocsCallout } from 'src/components'
import { useSelector, useDispatch } from 'react-redux'
import { fetchData } from '../../../Redux/Action'
import { useEffect } from 'react'
const Colors = () => {
  const random = () => Math.round(Math.random() * 100)
  const dispatch = useDispatch()
  const data = useSelector((state) => state.data.data || [])
  const [skillName, setSkillName] = useState([])
  const [percentageVal, setPercentageVal] = useState([])

  useEffect(() => {
    // Fetch data if not already loaded
    dispatch(fetchData())
  }, [dispatch])

  useEffect(() => {
    console.log(data)
    if (data.length !== 0) {
      const names = data.skills.map((item) => item.techName)
      const percentage = data.skills.map((item) => item.percentage)
      setSkillName(names)
      setPercentageVal(percentage)
    }
  }, [data])
  return (
    <>
      {/* {data.map((item, index) => (
        <li key={index}>{item.projectTech}</li>
      ))} */}
      <CRow>
        <CCol xs={6}>
          <CCard className="mb-4">
            <CCardHeader>Doughnut Chart</CCardHeader>
            <CCardBody>
              <CChartDoughnut
                data={{
                  labels: skillName,
                  datasets: [
                    {
                      backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
                      data: percentageVal,
                    },
                  ],
                }}
              />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Colors
