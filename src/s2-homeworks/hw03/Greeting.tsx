import React, {ChangeEvent, FocusEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'
import SuperButton from "../hw04/common/c2-SuperButton/SuperButton";
import SuperInputText from "../hw04/common/c1-SuperInputText/SuperInputText";

type GreetingPropsType = {
    name: string// need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>)=>void // need to fix any
    addUser: ()=>void // need to fix any
    onBlur: (focus:FocusEvent<HTMLInputElement>)=>void // need to fix any
    onEnter: (value:KeyboardEvent<HTMLInputElement>)=>void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
    lastUserName?: string // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {
        name,
        setNameCallback,
        addUser,
        onEnter,
        onBlur,
        error,
        totalUsers,
        lastUserName,
    } // деструктуризация пропсов
) => {
    const inputClass = s.errorInput+' '+s.input // need to fix with (?:)

    return (
        <div id={'hw3-form'} className={s.greetingForm}>
            <div className={s.text}>
                {'Людей добавили: '}
                <span id={'hw3-users-total'}>
                    {totalUsers}
                </span>
            </div>

            <div className={s.inputAndButtonContainer}>
                <div>
                    <SuperInputText
                        id={'hw3-input'}
                        value={name}
                        onChange={setNameCallback}
                        className={inputClass}
                        onKeyDown={onEnter}
                        onBlur={onBlur}
                    />
                    <div id={'hw3-error'} className={s.error}>
                        {error}
                    </div>
                </div>

                <SuperButton
                    id={'hw3-button'}
                    onClick={addUser}
                    disabled={!name.trim()}
                    className={s.button}

                >
                    add
                </SuperButton>
            </div>

            {lastUserName && (
                <div className={s.greeting}>
                    Привет <span id={'hw3-last-user'}>{lastUserName}</span>!
                </div>
            )}
        </div>
    )
}

export default Greeting
