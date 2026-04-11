import { useTranslations } from 'next-intl';
import Icon from '../../icon';
import PaginationButton from './pagination-button';

interface IProps {
  side: 'Left' | 'Right';
  disabled: boolean;
  handleClick: () => void;
}

function ArrowButtons({ side, disabled, handleClick }: IProps) {
  const t = useTranslations('common.pagination');

  return (
    <PaginationButton
      title={t(side === 'Left' ? 'previous' : 'next')}
      disabled={disabled}
      handleClick={handleClick}
    >
      <Icon name={side} size={4} iconClass="group-hover:!bg-primary-400 duration-300" />
    </PaginationButton>
  );
}

export default ArrowButtons;
