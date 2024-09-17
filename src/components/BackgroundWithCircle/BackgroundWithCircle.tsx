import React, { ReactNode } from 'react';
import styles from './BackgroundWithCircle.module.scss';

interface BackgroundWithCircleProps {
    topPosition: string; 
    size?: string;       
    children?: ReactNode; 
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
                    right: `calc(-${size} / 2)` 
                }}
            ></div>
            <div className={styles.content}>
                {children}
            </div>
        </div>
    );
};

export default BackgroundWithCircle;
