export const ButtonSpinner = ({
  size,
  color,
}: {
  size: number;
  color: string;
}) => {
  return (
    <div
      className={`inline-block h-${size} w-${size} animate-spin rounded-full border-${
        size / 2
      } border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] text-${color}`}
      role="status"
    >
      <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
        Loading...
      </span>
    </div>
  );
};
