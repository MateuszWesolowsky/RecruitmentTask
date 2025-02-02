import { Button } from './Button';

export const Pagination = () => {
  return (
    <div className="flex gap-4 justify-center items-center mt-4">
      <Button onClick={() => console.log('-')}>Previous</Button>
      <p className="text-center">Page 1 of 2</p>
      <Button onClick={() => console.log('+')}>Next</Button>
    </div>
  );
};
