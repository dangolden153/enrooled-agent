
import DashboardNav from './DashboardNav'
import Header from '../Header'
import Sidebar from './Sidebar'

const DashboardLayout = ({ children }) => {
    return (
        <div className='page-layout dashboard-layout container-fluid'>
            <Header />

            <div className="row">
                <DashboardNav />
            </div>

            <div className="d-flex flex-row page-content">
                <div className="col-3">
                    <Sidebar />
                </div>
                <div className="col-9">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default DashboardLayout
