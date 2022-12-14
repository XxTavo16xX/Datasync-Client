
// * Dependencies Required 

import { useContext } from "react";
import { MdExpandMore, MdMoreVert, MdDeleteOutline, MdModeEdit, MdRemoveRedEye, MdClose, MdCopyAll, MdCheckBoxOutlineBlank } from "react-icons/md";
import { IoIosRefresh } from "react-icons/io";
import TextField from '@mui/material/TextField';
import Slider from '@mui/material/Slider';

// * Modules Required

import { AppContext } from "../../app/Context";

// * view Styles

import './styles/index.css'

// * Components Required

let userPasswordSchemaReceived = [{
    "currentCategory": 'Correos',
    "categoryElements": [
        {
            "elementName": "Gmail",
            "elementAccount": "tavo14169@gmail.com"

        }, {
            "elementName": "Gmail",
            "elementAccount": "tavo141692@gmail.com"

        }, {
            "elementName": "Gmail",
            "elementAccount": "vengoparamatar@gmail.com"

        }, {
            "elementName": "Gmail Escuela",
            "elementAccount": "20654398@prepaenlinea-sep.edu.mx"

        }, {
            "elementName": "Ionos Web Design Nodes",
            "elementAccount": "armandoperalta@webdesignnodes.com"

        }, {
            "elementName": "Ionos PayAll",
            "elementAccount": "armandoperalta@payall.com.mx"

        }]
}, {
    "currentCategory": 'Redes Sociales',
    "categoryElements": [
        {
            "elementName": "Github",
            "elementAccount": "tavo14169@gmail.com"

        }, {
            "elementName": "Twitter",
            "elementAccount": "tavo14169@gmail.com"

        }, {
            "elementName": "Instagram",
            "elementAccount": "Login with Facebook"

        }, {
            "elementName": "Reddit",
            "elementAccount": "tavo14169@gmail.com"

        }, {
            "elementName": "Twitch",
            "elementAccount": "tavo14169@gmail.com"

        }, {
            "elementName": "LinkedIn",
            "elementAccount": "tavo14169@gmail.com"

        }, {
            "elementName": "Facebook",
            "elementAccount": "tavo14169@gmail.com"

        }]
}, {
    "currentCategory": 'Entretenimiento',
    "categoryElements": [
        {
            "elementName": "Steam",
            "elementAccount": "tavogamer_16"

        },
        {
            "elementName": "Netflix",
            "elementAccount": "tavo14169@gmail.com"

        }, {
            "elementName": "Spotify",
            "elementAccount": "Login with Facebook"

        }, {
            "elementName": "HBO MAX",
            "elementAccount": "tavo14169@gmail.com"

        }, {
            "elementName": "Amazon Prime",
            "elementAccount": "tavo141692@gmail.com"

        }, {
            "elementName": "Disney",
            "elementAccount": "tavo14169@gmail.com"

        }, {
            "elementName": "F1 TV",
            "elementAccount": "tavo14169@gmail.com"

        }]
}]

import SelectBox from "../shared/SelectBox";


// * view to Return

const SafetyBoxView = () => {

    const { context, setContext } = useContext(AppContext)

    return (

        <div className={context.app.current_view === 'Caja Segura' ? 'SafetyBox-Content-Container' : 'Content-Container-Hidded'}>

            <SafetyBoxSearchBar />

            <SafeTyBoxResults />

            <PasswordGeneratorContainer />

        </div>

    )

}

const SafetyBoxSearchBar = () => {

    return (

        <div className="SafetyBox-SearchBar-Container">

            <div className="SafetyBox-SearchBar-Category-Filter-Button">

                <p className="SafetyBox-SarchBar-Category-Filter-Label">Todo</p>

                <MdExpandMore color={'#ffffff'} size={24} />

            </div>

            <div className="SafetyBox-SearchBar-Input-Container">

                <input className="SafetyBox-SearchBar-Input" type="text" placeholder="Buscar contrase??a" />

            </div>

            <div className="SafetyBox-SeachBar-Normal-Button">

                <p className="SafetyBox-SearchBar-Button-Label" >Generar Contrase??a</p>

            </div>

            <div className="SafetyBox-SeachBar-Normal-Button">

                <p className="SafetyBox-SearchBar-Button-Label" >Guardar Contrase??a</p>

            </div>

        </div>

    )

}

const SafeTyBoxResults = () => {

    return <div className="SafetyBox-Results-Container">

        <p className="SafetyBox-Results-Container-Title-Label">Contrase??as Guardadas</p>

        <div className="SafetyBox-Results-Container-List">

            {

                userPasswordSchemaReceived.map(currentElement => {

                    if (currentElement == 'empty') return (

                        <div className="SafetyBox-Results-Container-Empty-List-Container" key={0}>

                            <div className="SafetyBox-Results-Container-Empty-List-Container-Margin">

                                <p className="SafetyBox-Results-Container-Empty-List">Aun no haz guardado ninguna contrase??a</p>

                                <div className="SafetyBox-SeachBar-Normal-Button">

                                    <p className="SafetyBox-SearchBar-Button-Label" >Guardar Contrase??a</p>

                                </div>

                            </div>

                        </div>


                    )

                    const { subCategories } = currentElement;

                    if (subCategories) {

                        console.log('must check');

                    } else {

                        const { currentCategory, categoryElements } = currentElement

                        return (

                            <div className="Password-Manager-Category-Container" key={currentCategory} >

                                <div className="Password-Manager-Category-Title-Container">

                                    <div className="Password-Manager-Category-Title-Container-Margin">

                                        <p className="Password-Manager-Category-Title-Label">{currentCategory}</p>

                                        <MdExpandMore size={34} color={'#000000'} />

                                    </div>

                                </div>

                                <div className="Password-Manager-Category-List-Container">

                                    <div className="Password-Manager-Category-Table-Titles-Container">

                                        <div className="Password-Manager-Category-Table-Titles-Container-Margin">

                                            <div className="Password-Manager-Category-Table-Title-Container">

                                                <p className="Password-Manager-Category-Element-Name-Title-Label">Nombre</p>

                                            </div>

                                            <div className="Password-Manager-Category-Table-Title-Container">

                                                <p className="Password-Manager-Category-Element-Name-Title-Label">Cuenta</p>

                                            </div>

                                            <div className="Password-Manager-Category-Table-Title-Container">

                                                <p className="Password-Manager-Category-Element-Name-Title-Label">Contrase??a</p>

                                            </div>

                                        </div>

                                    </div>

                                    {

                                        categoryElements.map(categoryElement => {

                                            const { elementAccount, elementName } = categoryElement

                                            return (

                                                <div className="Password-Manager-Category-List-Element-Container" key={elementAccount + '_' + elementName}>

                                                    <div className="Password-Manager-Category-Element-Container">

                                                        <div className="Password-Manager-Category-Element-Container-Margin">

                                                            <div className="Password-Manager-Category-Element-Element-Site-Name-Container">

                                                                <p className="Password-Manager-Category-Element-Name-Label">{elementName}</p>

                                                            </div>

                                                            <div className="Password-Manager-Category-Element-Element-Account-Container">

                                                                <p className="Password-Manager-Category-Element-Account-Label">{elementAccount}</p>

                                                            </div>

                                                            <div className="Password-Manager-Category-Element-Element-Password-Representation">

                                                                <p className="Password-Manager-Category-Element-Password-Label">*********</p>

                                                            </div>

                                                            <div className="Password-Manager-Category-Element-Element-Action-Buttons-Container">

                                                                <button className="Password-Action-Button">

                                                                    <MdMoreVert size={20} />

                                                                </button>

                                                            </div>

                                                        </div>

                                                    </div>


                                                </div>

                                            )

                                        })

                                    }</div>

                            </div>

                        )

                    }

                })

            }

        </div>

        <div className="SafetyBox-Results-Container-Recents">



        </div>

    </div >

}

const PasswordGeneratorContainer = () => {

    return (

        <div className="Password-Generator-Container">

            <div className="Password-Generator-Container-Margin">

                <div className="Password-Generator-Title-Bar-Container">

                    <p className="Password-Generator-Container-Title-Label">Generar Contrase??a Segura</p>

                    <div className="Password-Generator-Title-Bar-Close-Button">

                        <MdClose size={20} color={'#ff150d'} />

                    </div>

                </div>


                <div className="Password-Result-Container">

                    <div className="Password-Result-Container-Margin">

                        <input className="Password-Result-Input-Label" type="text" placeholder="*********" />

                        <div className="Password-Result-Action-Button">

                            <IoIosRefresh />

                        </div>

                        <div className="Password-Result-Action-Button">

                            <MdCopyAll />

                        </div>

                    </div>

                </div>

                <div className="Password-Result-Properties-Container">

                    <div className="Password-Result-Properties-Container-Margin">

                        <p className="Password-Generator-Container-Title-Label">Propiedades de contrase??a</p>

                        <div className="Password-Generator-Container-Slider-Container">

                            <p className="Password-Generator-Container-Subtitle-Label">Longitud de Contrase??a</p>

                            <div className="Password-Generator-Container-Slider-Options-Container">

                                <div className="Password-Generator-Container-Slider-Option-Slider-Container">

                                    <Slider defaultValue={15} min={8} max={75} aria-label="Small" valueLabelDisplay="auto" />

                                </div>

                                <div className="Password-Generator-Container-Slider-Option-Input-Container">

                                    <input className="Password-Generator-Container-Slider-Option-Input" type="number" placeholder="15" />

                                </div>


                            </div>


                        </div>

                        <div className="Password-Generator-Properties-Container">

                            <div className="Password-Generator-Property-Container">

                                <p className="Password-Generator-Property-Title-Label">Contrase??a en: </p>

                                <SelectBox defaultOption={'0'} optionsList={['Mayusculas y Minusculas', 'Mayusculas', 'Minusculas']}/>

                            </div>

                            <div className="Password-Generator-Property-Container">

                                <p className="Password-Generator-Property-Title-Label">Debe tener numeros</p>


                            </div>

                            <div className="Password-Generator-Property-Container">

                                <p className="Password-Generator-Property-Title-Label">Debe tener simbolos</p>


                            </div>


                        </div>

                    </div>

                </div>

                <div className="Password-Generator-Save-After-Creation-Container">

                    <p className="Password-Generator-Container-Title-Label">??Guardar contrase??a?</p>

                    <div className="Password-Generator-Container-CheckBox-Button">

                        <MdCheckBoxOutlineBlank size={16} color={"#fff"} />

                    </div>

                </div>

            </div>

        </div>

    )

}

const showPasswordGenerator = () => {



}

export default SafetyBoxView