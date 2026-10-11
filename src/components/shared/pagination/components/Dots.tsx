import Icon from '../../icon';

interface IProps {
  showIf: boolean;
}

function Dots({ showIf }: IProps) {
  return showIf ? <Icon name="three-dots" size={6} /> : null;
}

export default Dots;
