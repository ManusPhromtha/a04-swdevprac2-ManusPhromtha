import styles from './card.module.css'
import Image from 'next/image';

export default function Productcard() {
    return (
        <div className={styles.card}>
            <div className={styles.cardimg}>
                <Image src={'/img/fireworks.jpg'}
                alt='Product picture'
                fill={true}
                objectFit='cover'/>

            </div>
            <div className={styles.cardtext}>
                <h4>Firework Festival</h4>
                Celebration of spectacular pyrotechnic displays.
            </div>
        </div>
    );
}