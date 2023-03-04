import { useRef, useState } from "react";
import './camera-card.scss'
import { useUserContext } from "context/dashboard-context";
import { Form } from "react-bootstrap";
import AddButton from 'assets/icons/add.svg'
import CreateImg from 'assets/icons/comnata.svg'
import MoreImg from 'assets/icons/more.svg'
import Overlay from 'react-bootstrap/Overlay';
import Popover from 'react-bootstrap/Popover';
import EditBtn from 'assets/icons/edit.svg'
import DeleteBtn from 'assets/icons/delete.svg'

function Task({ task, removeTask, index }) {
    const [show, setShow] = useState(false);
    const [target, setTarget] = useState(null);
    const ref = useRef(null);

    const handleClick = (event) => {
        setShow(!show);
        setTarget(event.target);
    };

    return (
        <div className="task" ref={ref} >
            <img src={CreateImg} alt="" />
            {task.title}
            <div style={{
                cursor: "pointer"
            }} onClick={handleClick}><img src={MoreImg} alt="" /></div>
            <Overlay
                show={show}
                target={target}
                placement="bottom"
                container={ref}
                containerPadding={20}
            >
                <Popover id="popover-contained">
                    <div className="edit-buttons">
                        <img src={EditBtn} alt="" />
                        <h2> Редактировать</h2>
                    </div>
                    <div className="edit-buttons delete">
                        <img src={DeleteBtn} alt="" />
                        <h2 onClick={() => {
                            removeTask(index)
                            setShow(!show)
                        }}>Удалить</h2>
                    </div>
                </Popover>
            </Overlay>
        </div>
    );
}
function Todo() {
    const { tasks, setTasks } = useUserContext()
    const addTask = title => {
        const newTasks = [...tasks, { title }];
        setTasks(newTasks);
    };

    const completeTask = index => {
        const newTasks = [...tasks];
        setTasks(newTasks);
    };

    const removeTask = (index) => {
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks);
    };

    return (
        <div className="todo-container">
            <div className="tasks">
                <div className="create-task" >
                    <CreateTask addTask={addTask} />
                </div>
                <span>Добавленные комнаты</span>
                <div className="tasks-section">
                    {tasks.map((task, index) => (
                        <Task
                            task={task}
                            index={index}
                            completeTask={completeTask}
                            removeTask={removeTask}
                            key={index}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

const CreateTask = ({ addTask }) => {
    const [value, setValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value) return;
        addTask(value);
        setValue("");
    }


    return (
        <div>
            <div className="add-input">
                <Form.Control
                    type="text"
                    className="input w-50"
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    placeholder="Касса" />
                <button className="add-button" onClick={handleSubmit}><img src={AddButton} alt="" /></button>
            </div>
        </div>
    );
}



export default Todo