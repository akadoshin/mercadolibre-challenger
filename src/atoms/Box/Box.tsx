// import { Col, Container, Row } from 'react-grid-system';

/** Scss styles */
import './Box.scss';

/** White Box for content
 * @param {object} props
 */
const Box: React.FC = ({ children }) => <div className="box">{children}</div>;

export default Box;
