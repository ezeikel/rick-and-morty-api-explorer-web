import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinnerThird } from '@fortawesome/pro-regular-svg-icons';

const Loader = () => (
  <div
    className="flex items-center justify-center flex-1 w-full h-full"
    data-testid="loader"
  >
    <FontAwesomeIcon
      icon={faSpinnerThird}
      className="text-slate-900 animate-spin"
      size="5x"
    />
  </div>
);

export default Loader;
