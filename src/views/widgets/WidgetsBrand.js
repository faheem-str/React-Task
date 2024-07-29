import React from 'react'
import PropTypes from 'prop-types'
import { CWidgetStatsD, CRow, CCol } from '@coreui/react'
import { CChart } from '@coreui/react-chartjs'
import CIcon from '@coreui/icons-react'
import { cilCalendar } from '@coreui/icons'

const WidgetsBrand = (props) => {
  const { list } = props

  const chartOptions = {
    elements: {
      line: {
        tension: 0.4,
      },
      point: {
        radius: 0,
        hitRadius: 10,
        hoverRadius: 4,
        hoverBorderWidth: 3,
      },
    },
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
  }

  return (
    <CRow className={props.className} xs={{ gutter: 3 }}>
      {list.map((item, index) => (
        <CCol sm={6} xl={4} xxl={3} key={index}>
          <CWidgetStatsD
            {...(props.withCharts && {
              chart: (
                <CChart
                  className="position-absolute w-100 h-100"
                  type="line"
                  data={{
                    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                    datasets: [
                      {
                        backgroundColor: 'rgba(255,255,255,.1)',
                        borderColor: 'rgba(255,255,255,.55)',
                        pointHoverBackgroundColor: '#fff',
                        borderWidth: 2,
                        data: [65, 59, 84, 84, 51, 55, 40], // Replace this with dynamic data if available
                        fill: true,
                      },
                    ],
                  }}
                  options={chartOptions}
                />
              ),
            })}
            icon={
              item.name === 'React' ? (
                <img src="/src/assets/images/pngwing.com.png" height={100} />
              ) : item.name === 'Angular' ? (
                <img src="/src/assets/images/Angular.png" height={100} />
              ) : (
                <img src="/src/assets/images/others.png" height={100} />
              )
            } // Replace with appropriate icon or image
            values={[
              { title: 'Project', value: `${item.project}` },
              { title: 'Experience', value: `${item.exp.toString()} Years` },
            ]}
            style={{
              '--cui-card-cap-bg': '#3b5998', // Customize this color as needed
            }}
          />
        </CCol>
      ))}
    </CRow>
  )
}

WidgetsBrand.propTypes = {
  className: PropTypes.string,
  withCharts: PropTypes.bool,
  list: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      exp: PropTypes.number.isRequired,
      project: PropTypes.number.isRequired,
    }),
  ).isRequired,
}

export default WidgetsBrand
