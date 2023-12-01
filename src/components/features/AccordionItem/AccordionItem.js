import Accordion from 'react-bootstrap/Accordion';
import styles from './AccordionItem.module.scss';

function AccordionItem() {
  return (
    <Accordion className={styles.accordion__main} flush>
      <Accordion.Item className={styles.accordion__item} eventKey="0">
        <Accordion.Header className={styles.accordion__header} >Accordion Item #1</Accordion.Header>
        <Accordion.Body className={styles.accordion__body}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item className={styles.accordion__item} eventKey="1">
        <Accordion.Header className={styles.accordion__header}>Accordion Item #2</Accordion.Header>
        <Accordion.Body className={styles.accordion__body}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default AccordionItem;