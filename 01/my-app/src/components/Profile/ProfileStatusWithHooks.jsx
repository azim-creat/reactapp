import React, {useState} from 'react';

const  ProfileStatusWithHooks =(props)=> {

    /*В функцию useState передаётся один параметр.
     useState возвращет массив,
     в котором первый элемент хранит аргумент который мы передали,
     второй параметр, хранит функцию которая изменяет этот первый параметр.
     Обычно функция называется setEditMode.
     Таким образом спроектирована функиця useState
    let stateWhithSetState = useState(false); // useState положили в переменную
    
    let[editMode,setEditMode] = useState(false);


    let editMode = stateWhithSetState[0] // взяли у useState первый элемент
    let setEditMode = stateWhithSetState[1] // взяли у useState второй элемент(функцию)
    */

    /*Вышесказанное  и написанное можно реализовать с помощью деструтиризированного присваивания 
     Где первый массив хранит название переменных а второй значения для этих переменных 
     По итогу на выходе у нас имеются две переменные
    */
    let[editMode,setEditMode] = useState(false);

    /**Это делаем для хранения статуса */ 
    let[status,setStatus] = useState(props.status);

    const  activateAditMode = ()=>{
        setEditMode(true) /**Тут мы изменяем наш useState*/
    }
    const  deactevateEditMode = ()=>{
        setEditMode(false) /**Тут мы изменяем наш useState*/
        props.updateStatus(status); /**Тут отправляем в главный стейт изменнёные данные */
    }
    const onStatusChange =(e)=>{
        setStatus(e.currentTarget.value);
    }



        return (
            <div>
                {!editMode &&
                    <div>
                        <span onDoubleClick={activateAditMode}>{ props.status || "-------"}</span>
                    </div>
                }
                {editMode &&
                    <div>
                        <input  onChange={onStatusChange} onBlur={deactevateEditMode} autoFocus={true}  value={status}/>
                    </div>
                }
            </div>
        )
   
}

export default ProfileStatusWithHooks; 