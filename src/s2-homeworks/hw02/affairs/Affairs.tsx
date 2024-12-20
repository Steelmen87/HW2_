import React from 'react'
import Affair from './affair/Affair'
import {AffairType, FilterType} from '../HW2'
import s from './Affairs.module.css'

type AffairsPropsType = {
    data: AffairType[] // need to fix any
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (_id: number) => void
    filter: FilterType
}

function Affairs(props: AffairsPropsType) {
    const setFilter = (filter: FilterType) => {
        props.setFilter(filter)
    }

    const cnFilter = (filter: FilterType) => s.button + ' ' + s[`${filter}`] + (props.filter === filter ? ' ' + s.active : '')

    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))
    type btnType = {
        filter: FilterType
    }
    const btm: btnType[] = [{filter: 'all'}, {filter: 'high'}, {filter: 'middle'}, {filter: 'low'}]

    return (
        <div>
            <div className={s.buttonContainer}>
                {btm.map(el => <button key={el.filter}
                                       id={`hw2-button-${el}`}
                                       onClick={() => setFilter(`${el.filter}`)}
                                       className={cnFilter(`${el.filter}`)}> {el.filter} </button>
                )}
            </div>
            <div className={s.affairs}>{mappedAffairs}</div>
        </div>
    )
}

export default Affairs
