import { useState } from "react"
import {v4 as uuid} from "uuid"
import {MainContainer,Heading,Input,TodoButton,TodosULContainer} from "./StyledComponents"
import GoalItem from "../GoalItem"


const DayGoals=()=>{

    const [todoList,setTodoList]=useState([])
    const [todo,setTodo]=useState("")
    const givenTodo=(event)=>{
        setTodo(event.target.value)
        
    }

    const onDelete=(id)=>{

        const filterList=todoList.filter((item)=>item.id!==id)
        setTodoList(filterList)
    }

    const onUpdateTask=(id,prevCount)=>{
            
        setTodoList((prev)=>prev.map((item)=>{
            if(item.id===id)
            {
                return {...item,counter:prevCount+1}
            }
            return item
        }))
    }

    const addTodo=()=>{
        const temp=[]
        let  taskTimes=1
        if(todo!=="")
        {                        
             taskTimes=Number(todo[todo.length-1])
            console.log(taskTimes)
            if(taskTimes>1)
            {
                for (let i=0;i<taskTimes;i++)
                {
                    const uid=uuid()
                    const object={
                        id:uid,
                        todo:todo.slice(0,todo.length-1),
                        counter:0,
                     }
                    temp.push(object)
                }
            }
            else{
                    const uid=uuid()
                    const object={
                        id:uid,
                        todo:todo,
                        counter:0,
                     }

                temp.push(object)
            }   
            
            
            
            setTodoList([...todoList,...temp])
        }

        

    }
    
    
return <MainContainer>
    <Heading>Day Goals!</Heading>
    <Input onChange={givenTodo} type="text" placeholder="Add a Todo"/>
    <TodoButton onClick={addTodo}>Add Todo</TodoButton>
    <TodosULContainer>
        {todoList.map((item)=><GoalItem key={item.id} item={item} onUpdateTask={onUpdateTask} onDelete={onDelete}/>)}
        </TodosULContainer>
</MainContainer>

}
export default DayGoals 