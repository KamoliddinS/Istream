import { SelectData } from 'data/data';
import './camera-inner.scss'
import Form from 'react-bootstrap/Form';
import Todo from 'components/camera/create-room';
import TodoCamera from 'components/camera/create-camera';
import Navigation from 'components/navigation/navigation';

const CameraInner = () => {
    return (
        <>
            <div className="dashboard">
                <Navigation oldpageLink={'/camera'} oldpageText={'Мои инфраструктуры'} currentText={"Добавить"} curruntpageText={'Добавить инфраструктуру'} currentpageLink={"/camera"} />
                <Form>
                    <div className="complated">
                        <div className="name-building">
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Название здания</Form.Label>
                                <Form.Control required type="text" placeholder="Магазин Одежды на Ц-1" />
                            </Form.Group>
                        </div>
                        <div className="countries  mb-3">
                            {SelectData?.map((item, _) => (
                                <>
                                    <Form.Group className="mb-3" controlId="formBasicEmail4">
                                        <Form.Label>Страна</Form.Label>
                                        <Form.Select required aria-label="Default select example4">
                                            {item?.countries.map((item, key) => (
                                                <option key={key} value={item.name}>{item.name}</option>
                                            ))}
                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail1">
                                        <Form.Label>Район</Form.Label>
                                        <Form.Select required aria-label="Default select example1">
                                            {item?.cities.map((item, key) => (
                                                <option key={key} value={item.name}>{item.name}</option>
                                            ))}
                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail2">
                                        <Form.Label>Город</Form.Label>
                                        <Form.Select required aria-label="Default select example2">
                                            {item?.areas.map((item, key) => (
                                                <option key={key} value={item.name}>{item.name}</option>
                                            ))}
                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail3">
                                        <Form.Label>ZIP-code</Form.Label>
                                        <Form.Select required aria-label="Default select example3">
                                            {item?.zipcode.map((item, key) => (
                                                <option key={key} value={item.name}>{item.name}</option>
                                            ))}
                                        </Form.Select>
                                    </Form.Group>
                                </>
                            ))}
                        </div>
                        <div className="name-building">
                            <Form.Group className="mb-3" controlId="address">
                                <Form.Label>Адрес</Form.Label>
                                <Form.Control required type="text" placeholder="Olmazor tumani, Beruniy 10, 14" />
                            </Form.Group>
                        </div>
                    </div>
                    <div className="complated">
                        <h2>Добавить комнату</h2>
                        <Form.Label>Название комнаты</Form.Label>
                        <Todo />
                    </div>
                    <div className="complated">
                        <h2>Добавить камеру</h2>
                        <Form.Label>Выберите комнату</Form.Label>
                        <div className='d-flex justify-content-between flex-wrap'>
                            <Form.Select className='w-50 mb-4' aria-label="Default select example3">
                                <option>Большой зал</option>
                            </Form.Select>
                            <TodoCamera />
                        </div>
                    </div>
                    <div className="submit-btns">
                        <button className='cancel-button me-3'>Отмена</button>
                        <button className='primary-button'>Добавить</button>
                    </div>
                </Form>
            </div>

        </>
    )
}
export default CameraInner