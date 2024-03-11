import {GiPencil} from "react-icons/gi"
import { RxCross2 } from "react-icons/rx";
import './index.css'
import { ListContainer,EditDeleteContainer,ButtonIcon } from "./StyledComponents"

const GoalItem=(props)=>{
    const{item,onDelete,onUpdateTask}=props
    

    const deleteTodo=()=>{
        onDelete(item.id)
    }

    const updateTodo=()=>{
        onUpdateTask(item.id,item.counter)
    }
    return <ListContainer>{`${item.todo} (Updated ${item.counter} times)`}
        <EditDeleteContainer>

            <ButtonIcon onClick={updateTodo}>
                <GiPencil className="icon" size={20}/>
            </ButtonIcon>
            <ButtonIcon onClick={deleteTodo}>
                <RxCross2 className="icon-cross" size={20}/>
            </ButtonIcon>
        </EditDeleteContainer>
    </ListContainer>
}
export default GoalItem