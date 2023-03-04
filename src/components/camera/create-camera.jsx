import './camera-card.scss'
import { useRef, useState } from "react";
import { Form } from "react-bootstrap";
import { useUserContext } from "context/dashboard-context";
import MoreImg from 'assets/icons/more.svg'
import Overlay from 'react-bootstrap/Overlay';
import Popover from 'react-bootstrap/Popover';
import EditBtn from 'assets/icons/edit.svg'
import DeleteBtn from 'assets/icons/delete.svg'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CameraIcon from 'assets/icons/camera.svg'
import AddCameraIcon from 'assets/icons/add-video.svg'

const Task = ({ task, removeTask, index }) => {
    const [show, setShow] = useState(false);
    const [target, setTarget] = useState(null);
    const ref = useRef(null);
    const handleClick = (event) => {
        setShow(!show);
        setTarget(event.target);
    };

    return (
        <div className="task d-block camera" ref={ref} >
            <div className="d-flex justify-content-between mb-2 align-items-center">
                <img src={CameraIcon} alt="" />
                <h2 className="m-0"> Камера над дверю</h2>
                <div style={{
                    cursor: "pointer"
                }} onClick={handleClick}><img src={MoreImg} alt="" /></div>
            </div>
            <div className="d-flex align-items-center justify-content-between">
                <h4>
                    <span>
                        IP:
                    </span>
                    {task.title}
                </h4>
                <h4 className="ms-2">
                    <span>
                        №:
                    </span>
                    {index + 1}
                </h4>
            </div>

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
const CreateTask = ({ addTask }) => {
    const [value, setValue] = useState("");
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value) return;
        addTask(value);
        setValue("");
        handleClose()
    }


    return (
        <div className="w-50">
            <div className="d-flex add-camera">
                <Button style={{
                    background: "rgba(255, 193, 7, 0.16)",
                    border: "1px solid #FFC107",
                    borderRadius: "6px",
                    color: "black"
                }} className="ms-4" variant="primary" onClick={handleShow}>
                    <img src={AddCameraIcon} alt="" />  Добавить камеру
                </Button>
                <p className="ms-2 mb-0">Выбранную комнату будет привязаться несколько камер</p>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header style={{
                    border: "none"
                }} closeButton>
                </Modal.Header>
                <Form onSubmit={handleSubmit} className="p-4">
                    <Form.Control required
                        type="text"
                        className="input"
                        placeholder="Касса" />
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Название  камеры</Form.Label>
                        <Form.Control required type="text" placeholder="Камера на против окна" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail2">
                        <Form.Label>Название здания</Form.Label>
                        <Form.Control required type="text" placeholder="Магазин Одежды на Ц-1" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail3">
                        <Form.Label>IP - камеры</Form.Label>
                        <Form.Control required
                            value={value}
                            onChange={e => setValue(e.target.value)} type="text" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail4">
                        <Form.Label>User name</Form.Label>
                        <Form.Control required type="text" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail5">
                        <Form.Label>Пароль камеры</Form.Label>
                        <Form.Control required type="password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail6">
                        <Form.Label>Доп. информация</Form.Label>
                        <Form.Control required type="text" />
                    </Form.Group>
                    <Modal.Footer style={{
                        border: "none"
                    }}>
                        <Button className="cancel-button" variant="secondary" onClick={handleClose}>
                            Отмена
                        </Button>
                        <Button className="primary-button" type="submit" variant="primary">
                            Добавить
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </div >
    );
}

const TodoCamera = () => {
    const { camera, setCamera } = useUserContext()
    const addTask = title => {
        const newTasks = [...camera, { title }];
        setCamera(newTasks);
    };

    const completeTask = index => {
        const newTasks = [...camera];
        setCamera(newTasks);
    };

    const removeTask = (index) => {
        const newTasks = [...camera];
        newTasks.splice(index, 1);
        setCamera(newTasks);
    };

    return (
        <>
            <CreateTask addTask={addTask} />
            <div className="w-100">
                <span>Выберите комнату</span>
                <div className="tasks-section">
                    {camera.map((task, index) => (
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
        </>
    );
}
export default TodoCamera