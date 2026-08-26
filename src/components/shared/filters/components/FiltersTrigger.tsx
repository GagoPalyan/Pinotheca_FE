import Button from '@/components/ui/button';

function FiltersTrigger() {
  return (
    <>
      <Button variant="secondary" size="small" customClass="w-fit" prependIcon="filter">
        Filters
      </Button>
    </>
  );
}

export default FiltersTrigger;
