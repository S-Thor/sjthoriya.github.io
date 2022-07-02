

import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import TwitterIcon from '@material-ui/icons/Twitter'
import InstagramIcon from '@material-ui/icons/Instagram';
import {social} from "../../portfolio";
import styles from "./social.module.css";

const Social = () => {
    const SSS = 1;
    return (
        <section className={styles.mainSocial}>
            <h2 className={styles.socialTitle}>Social</h2>
            <div className={styles.iconDiv}>
                {social.github && (
                <a
                    href={social.github}
                    aria-label='github'
                    className={styles.icons}
                >
                    <GitHubIcon style={{fontSize: '30px'}}/>
                </a>
                )}

                {social.linkedin && (
                <a
                    href={social.linkedin}
                    aria-label='linkedin'
                    className={styles.icons}
                >
                    <LinkedInIcon style={{fontSize: '30px'}}/>
                </a>
                )}

                {social.twitter && (
                <a
                    href={social.twitter}
                    aria-label='twitter'
                    className={styles.icons}
                >
                    <TwitterIcon style={{fontSize: '30px'}}/>
                </a>
                )}

                {social.instagram && (
                <a
                    href={social.instagram}
                    aria-label='linkedin'
                    className={styles.icons}
                >
                    <InstagramIcon style={{fontSize: '30px'}}/>
                </a>
                )}
            </div>
        </section>
    )
}

export default Social;