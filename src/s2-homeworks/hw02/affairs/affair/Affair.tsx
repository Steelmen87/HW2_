import React from 'react'
import {AffairType} from '../../HW2'
import s from './Affair.module.css'
import s2 from '../Affairs.module.css'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType
    deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair({affair,deleteAffairCallback}: AffairPropsType) {
    const {_id,priority,name} = affair
    const deleteCallback = () => {
        // need to fix
        deleteAffairCallback(_id)
    }

    const nameClass = s.name + ' ' + s2[priority]
    const buttonClass = s.closeButton + ' ' + s2[priority]
    const affairClass = s.affair + ' ' + s2[priority]

    return (
        <div
            id={'hw2-affair-' + _id}
            className={affairClass}
        >
            <div id={'hw2-name-' + _id} className={nameClass}>
                {/*создаёт студент*/}
                {name}
                {/**/}
            </div>
            <div id={'hw2-priority-' + _id} hidden>
                {priority}
            </div>

            <button
                id={'hw2-button-delete-' + _id}
                className={buttonClass}
                // need to fix
                onClick={deleteCallback}

            >
                {/*текст кнопки могут изменить студенты*/}
                X
                {/**/}
            </button>
        </div>
    )
}

export default Affair
