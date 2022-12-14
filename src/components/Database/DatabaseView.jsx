
import { getDateInHumanFormatByTimestamp } from '../../lib/Calendar';

import TopSearchContainer from './TopSearchContainer'
import AcentButtonForDBTools from './AcentButtonForDBTools'
import FormContainer from './FormContainer';
import { DatabasePDFReader } from './DatabasePDFReader';

import { useContext } from "react";
import { AppContext } from '../../app/Context';

import './styles/DatabaseView.css'
import './styles/DatabaseForm.css'

const dbOrdersElements = [
    {
        orderNumberCop: 15900,
        orderCreatioDate: 1671071896,
        orderState: 'En entrega',
        orderProducts: [{
            orderProductName: "Papel Bond",
            orderProductAmount: 2,
            orderProductUnitPrice: 145.32,
            orderProductPriceInFiat: 'USD'
        },
        {
            orderProductName: "Bolsa de papel",
            orderProductAmount: 500000,
            orderProductUnitPrice: 0.32,
            orderProductPriceInFiat: 'USD'
        }, {
            orderProductName: "Papel Bond",
            orderProductAmount: 2,
            orderProductUnitPrice: 145.32,
            orderProductPriceInFiat: 'USD'
        },
        {
            orderProductName: "Bolsa de papel",
            orderProductAmount: 500000,
            orderProductUnitPrice: 0.32,
            orderProductPriceInFiat: 'USD'
        }],
        orderProvider: 'CAM-SAN IMPRESORES, S.A. DE C.V.',
        orderInvoice: 'CAM-SAN IMPRESORES, S.A. DE C.V.',
        orderConsign: 'CAM-SAN IMPRESORES, S.A. DE C.V.',

    },
    {
        orderNumberCop: 15899,
        orderCreatioDate: 1671071896,
        orderState: 'Completado',
        orderProducts: [{
            orderProductName: "Papel Bond",
            orderProductAmount: "2 Toneladas",
            orderProductUnitPrice: 145.32,
            orderProductPriceInFiat: 'USD'
        }],
        orderProvider: 'PRODUCTOS ARPAPEL, SA DE CV',
        orderInvoice: 'PRODUCTOS ARPAPEL, SA DE CV',
        orderConsign: 'PRODUCTOS ARPAPEL, SA DE CV',

    },
    {
        orderNumberCop: 15898,
        orderCreatioDate: 1669689496,
        orderState: 'Completado',
        orderProducts: [{
            orderProductName: "Papel Bond",
            orderProductAmount: "2 Toneladas",
            orderProductUnitPrice: 145.32,
            orderProductPriceInFiat: 'USD'
        }],
        orderProvider: 'CORPORACION DE PRODUCTOS INDUSTRIALES, S.A. DE C.V.',
        orderInvoice: 'CORPORACION DE PRODUCTOS INDUSTRIALES, S.A. DE C.V.',
        orderConsign: 'CORPORACION DE PRODUCTOS INDUSTRIALES, S.A. DE C.V.',

    },
    {
        orderNumberCop: 15897,
        orderCreatioDate: 1651938613,
        orderState: 'En entrega',
        orderProducts: [{
            orderProductName: "Papel Bond",
            orderProductAmount: "2 Toneladas",
            orderProductUnitPrice: 145.32,
            orderProductPriceInFiat: 'USD'
        }],
        orderProvider: 'CAM-SAN IMPRESORES, S.A. DE C.V.',
        orderInvoice: 'CAM-SAN IMPRESORES, S.A. DE C.V.',
        orderConsign: 'CAM-SAN IMPRESORES, S.A. DE C.V.',

    },
    {
        orderNumberCop: 15896,
        orderCreatioDate: 1651938413,
        orderState: 'Completado',
        orderProducts: [{
            orderProductName: "Papel Bond",
            orderProductAmount: "2 Toneladas",
            orderProductUnitPrice: 145.32,
            orderProductPriceInFiat: 'USD'
        }],
        orderProvider: 'PRODUCTOS ARPAPEL, SA DE CV',
        orderInvoice: 'PRODUCTOS ARPAPEL, SA DE CV',
        orderConsign: 'PRODUCTOS ARPAPEL, SA DE CV',

    },
    {
        orderNumberCop: 15895,
        orderCreatioDate: 1651538413,
        orderState: 'Completado',
        orderProducts: [{
            orderProductName: "Papel Bond",
            orderProductAmount: "2 Toneladas",
            orderProductUnitPrice: 145.32,
            orderProductPriceInFiat: 'USD'
        }],
        orderProvider: 'CORPORACION DE PRODUCTOS INDUSTRIALES, S.A. DE C.V.',
        orderInvoice: 'CORPORACION DE PRODUCTOS INDUSTRIALES, S.A. DE C.V.',
        orderConsign: 'CORPORACION DE PRODUCTOS INDUSTRIALES, S.A. DE C.V.',

    },
    {
        orderNumberCop: 15894,
        orderCreatioDate: 1651938613,
        orderState: 'En entrega',
        orderProducts: [{
            orderProductName: "Papel Bond",
            orderProductAmount: "2 Toneladas",
            orderProductUnitPrice: 145.32,
            orderProductPriceInFiat: 'USD'
        }],
        orderProvider: 'CAM-SAN IMPRESORES, S.A. DE C.V.',
        orderInvoice: 'CAM-SAN IMPRESORES, S.A. DE C.V.',
        orderConsign: 'CAM-SAN IMPRESORES, S.A. DE C.V.',

    },
    {
        orderNumberCop: 15893,
        orderCreatioDate: 1651938413,
        orderState: 'Completado',
        orderProducts: [{
            orderProductName: "Papel Bond",
            orderProductAmount: "2 Toneladas",
            orderProductUnitPrice: 145.32,
            orderProductPriceInFiat: 'USD'
        }],
        orderProvider: 'PRODUCTOS ARPAPEL, SA DE CV',
        orderInvoice: 'PRODUCTOS ARPAPEL, SA DE CV',
        orderConsign: 'PRODUCTOS ARPAPEL, SA DE CV',

    },
    {
        orderNumberCop: 15892,
        orderCreatioDate: 1651538413,
        orderState: 'Completado',
        orderProducts: [{
            orderProductName: "Papel Bond",
            orderProductAmount: "2 Toneladas",
            orderProductUnitPrice: 145.32,
            orderProductPriceInFiat: 'USD'
        }],
        orderProvider: 'CORPORACION DE PRODUCTOS INDUSTRIALES, S.A. DE C.V.',
        orderInvoice: 'CORPORACION DE PRODUCTOS INDUSTRIALES, S.A. DE C.V.',
        orderConsign: 'CORPORACION DE PRODUCTOS INDUSTRIALES, S.A. DE C.V.',

    }
]

const selectAllElementsInList = () => {

    const table = document.getElementById('dbResultsTable')

    const globalCheckBox = table.querySelector('input[type=checkbox]');

    const checkBoxes = table.querySelectorAll('input[type=checkbox]');

    // * Checking if the globalCheckBox is checked

    if (globalCheckBox.checked) {

        for (var i = 0; i < checkBoxes.length; i++) {
            checkBoxes[i].checked = true;
        }

        return


    } else {

        for (var i = 0; i < checkBoxes.length; i++) {
            checkBoxes[i].checked = false;
        }

    }

}

const DatabaseView = () => {

    const { context, setContext } = useContext(AppContext);

    return <div className={context.app.current_view == 'Base de datos' ? 'Database-View-Container' : 'Content-Container-Hidded'}>

        <div className="Database-View-Tools-Container">

            <div className="Database-View-Tools-Top-Container">

                <TopSearchContainer />

                <AcentButtonForDBTools />

            </div>

            <div className="Database-Results-Container">

                <table className='Database-Results-Table' id='dbResultsTable' >

                    <thead>

                        <tr className='Database-Table-Head-Row'>
                            <th className='Database-Table-Head-Title-Label'><input type="checkbox" name="" id="" onClick={selectAllElementsInList} /></th>
                            <th className='Database-Table-Head-Title-Label'>Copnum</th>
                            <th className='Database-Table-Head-Title-Label'>Fecha</th>
                            <th className='Database-Table-Head-Title-Label'>Estado</th>
                            <th className='Database-Table-Head-Title-Label'>Productos</th>
                            <th className='Database-Table-Head-Title-Label'>Provedor</th>
                            <th className='Database-Table-Head-Title-Label'>Facturado</th>
                            <th className='Database-Table-Head-Title-Label'>Consignado</th>
                        </tr>

                    </thead>

                    <tbody>

                        {
                            dbOrdersElements.map(({ orderNumberCop, orderCreatioDate, orderState, orderProducts, orderProvider, orderInvoice, orderConsign }) => {

                                return <tr className='Database-Table-Body-Row' key={orderNumberCop}>
                                    <td><input type="checkbox" name="" id="" /></td>
                                    <td className='Database-Table-Body-Title-Label'>{orderNumberCop}</td>
                                    <td className='Database-Table-Body-Title-Label'>{getDateInHumanFormatByTimestamp(orderCreatioDate)}</td>
                                    <td className='Database-Table-Body-Title-Label'>{orderState}</td>
                                    <td className='Database-Table-Body-Title-Label Database-Table-Body-Products-Container'>{

                                        <button className="Database-Table-Body-Products-Button">

                                            <p className='Database-Table-Body-Products-Button-Label'>Ver Productos</p>

                                        </button>

                                    }</td>
                                    <td className='Database-Table-Body-Title-Label'>{orderProvider}</td>
                                    <td className='Database-Table-Body-Title-Label'>{orderInvoice}</td>
                                    <td className='Database-Table-Body-Title-Label'>{orderConsign}</td>
                                </tr>

                            })
                        }

                    </tbody>

                </table>

            </div>

        </div>

        <FormContainer />

        <DatabasePDFReader />


    </div>

}

export default DatabaseView