import PropTypes from 'prop-types';
import styles from './ContactElem.module.css';

const ContactElem = ({title, children}) => {
    return (
        <>
            <div className={styles.card}>
                <h2 className={styles.title}>{title}</h2>
                {children}
            </div>
        </>
    );
};
ContactElem.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

export default ContactElem