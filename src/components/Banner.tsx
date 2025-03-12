import styles from './banner.module.css'
import Image from 'next/image';

export default function Banner () {
    return (
        <div className={styles.banner}>
            <Image src={'/img/party.jpg'}
            alt='cover'
            fill={true}
            priority
            objectFit='cover'/>
            <div className={styles.bannerText}>
                <h1>where every event finds its venue</h1>
                <h3>This is a space where every event finds its venue, and where every occasion is elevated to its full potential. It is a place where memories are made, and where dreams come true.</h3>
            </div>
        </div>
    );
}