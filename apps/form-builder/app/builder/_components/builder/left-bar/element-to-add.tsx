export const ElementToAdd = ({
  title,
  icon: Icon,
}: {
  title: string;
  icon: any;
}) => {
  return (
    <div className="flex flex-col items-center justify-center gap-y-2 cursor-grab w-14">
      <div className="flex items-center justify-center w-full bg-gray-100 select-none rounded-xl aspect-square dark:bg-gray-900">
        <Icon className="w-7 h-7" />
      </div>
      <p className="text-xs text-gray-500 dark:text-gray-400">{title}</p>
    </div>
  );
};
