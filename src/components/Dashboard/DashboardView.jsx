
import TopSection from './TopContainerBox'
import DatabaseContainer from "./DatabaseContainer";
import PendingTasksContainer from './PendingTaskContainer'

import { useContext } from "react";
import { AppContext } from '../AppContext';

import './styles/DashboardContainer.css'

const DashboardView = () => {

    const { globalContext, setGlobalContext } = useContext(AppContext);

    return <div className={globalContext.currentViewToDisplay === 'Dashboard' ? 'Dashboard-Content-Container' : 'Content-Container-Hidded'}>

        <div className="Dashboard-Top-Section-Container">

            <TopSection />

        </div>

        <div className="Dashboard-Bottom-Section-Container">

            <DatabaseContainer />
            <PendingTasksContainer />

        </div>

    </div>

}

export default DashboardView