export const EmptySection: React.FC = () => {
  return (
    <div className="p-4 rounded-2xl bg-lightgray flex items-center h-64 text-darkviolet">
      <div className="text-center w-full flex justify-center flex-col">
        <b className="text-lg">Coś pusto tutaj...</b>
        <br />
        Może chciał(a)byś coś napisać? Prześlij swój artykuł poprzez formularz!
      </div>
    </div>
  );
};
