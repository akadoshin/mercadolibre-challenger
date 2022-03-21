/** Styles */
import './Loading.scss';

const Loading = (): JSX.Element => (
  <div data-testid="loading" className="loading">
    <div className="loading-item" />
    <div className="loading-item" />
    <div className="loading-item" />
    <div className="loading-item" />
  </div>
);

export default Loading;
