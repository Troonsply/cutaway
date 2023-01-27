import React, {FC, useState} from "react";
import './Sidebar.scss';
import Photo from '../../images/photo.jpg';
import Burger from '../../images/burger.png';

type Navigate = {
    id: number,
    label: string
}
const CLASS = 'sidebar'
export const Sidebar: FC = () => {
    const navigate: Navigate[] = [
        {
            id: 0,
            label: 'About',
        },
        {
            id: 1,
            label: 'Skills',
        },
        {
            id: 2,
            label: 'Experience',
        },
        {
            id: 3,
            label: 'Portfolio',
        },
        {
            id: 4,
            label: 'Contacts',
        },
    ];
    const [show, setShow] = useState<boolean>(false);
    const handleShow = () => {
        setShow(!show)
    }
    return <div className={CLASS} style={{backgroundColor: 'inherit'}}>
        <button className={`${CLASS}__button`} onClick={handleShow}>
            <img className={`${CLASS}__button__img`} src={Burger} alt={'Burger'}/>
        </button>
        <div className={CLASS}
             style={{
                 position: 'relative',
                 left: show ? 0 : '-100%',
                 transition: 'left 1s linear'
             }}>
            <div className={`${CLASS}__wrapper-img`}>
                <img
                    className={`${CLASS}__img`}
                    src={Photo}
                    alt="Photo"
                />
                <h3> Siavris Katya </h3>
            </div>
            <div className={`${CLASS}__menu`}>
                {navigate.map((item: Navigate) => {
                    return <a
                        key={item.id}
                        href={`#${item.label}`}
                        className={`${CLASS}__nav`}
                    >
                        {item.label}
                    </a>
                })}
            </div>
        </div>
    </div>
}