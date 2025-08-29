import clsx from "clsx";

interface props {
  reverse?: boolean
  className?: string
}
const Spinner = ({reverse, className}:props) => {
  return (
    <div className="flex items-center justify-center  ">
      <div className={clsx(
        "animate-spin rounded-full h-4 w-4 border-4 !border-t-transparent border-black dark:border-white",
        reverse && "border-white dark:border-black",
        className
      )}></div>
    </div>
  );
};

export default Spinner;

