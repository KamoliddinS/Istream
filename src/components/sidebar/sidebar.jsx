import { useNavigate } from 'react-router-dom'
import './sidebar.scss'
import { HomeIcon, InfracIcon, ModulesIcon, ServiceIcon, SettingsIcon } from 'assets/icons/icons'
const Sidebar = () => {
    const linkNavigation = [
        {
            navigateTo: "/",
            text: "Главная",
            icon: <HomeIcon />
        },
        {
            navigateTo: "/camera",
            text: "Мои инфраструктуры",
            icon: <InfracIcon />
        },
        {
            navigateTo: "/module",
            text: "Мои модули",
            icon: <ModulesIcon />
        },
        {
            navigateTo: "/service",
            text: "Service",
            icon: <ServiceIcon />
        },
        {
            navigateTo: "/settings",
            text: "Настройки",
            icon: <SettingsIcon />
        }
    ]
    const location = window.location.pathname
    const navigate = useNavigate()
    return (
        <>
            <div className="sidebar">
                <div className="sidebar-links">
                    {
                        linkNavigation?.map((item, key) => (
                            <div key={key} className={item?.navigateTo === location ? "navigation-link active" : 'navigation-link'}>
                                {item.icon}
                                <button onClick={() => navigate(item.navigateTo)}>{item.text}</button>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}
export default Sidebar