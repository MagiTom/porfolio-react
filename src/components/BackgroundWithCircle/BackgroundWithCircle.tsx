import React, { ReactNode } from 'react';
import styles from './BackgroundWithCircle.module.scss';

interface BackgroundWithCircleProps {
    topPosition: string; // Pozycja 'top' dla okręgu
    size?: string;       // Rozmiar okręgu, np. '200px'. Optional, z wartością domyślną.
    children?: ReactNode; // Dzieci, które będą umieszczone w środku komponentu
}

const BackgroundWithCircle: React.FC<BackgroundWithCircleProps> = ({ topPosition, size = '200px', children }) => {
    return (
        <div className={styles.background}>
            <div 
                className={styles.circle} 
                style={{ 
                    top: topPosition, 
                    width: size, 
                    height: size,
                    right: `calc(-${size} / 2)` // Aby środek okręgu był po lewej stronie, zmieniamy także left
                }}
            ></div>
            <div className={styles.content}>
                {children}
            </div>
        </div>
    );
};

export default BackgroundWithCircle;
