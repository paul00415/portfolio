import type { IconType } from 'react-icons/lib';

interface ResumeCardsProps {
  time?: string;
  image: string;
  title?: string;
  subTiltle?: string;
  description?: string;
  icons: IconType[];
}
export const ResumeCards = ({
  time = '',
  image = '',
  title = '',
  subTiltle = '',
  description = '',
  icons,
}: ResumeCardsProps) => {
  return (
    <div className="text-left border-l-2  border-gray-200">
      <div className="w-4 h-4 rounded-full -ml-2 bg-gray-300" />
      <div className="px-2">
        <p className="text-gray-200">{time}</p>
        <div className="flex flex-row items-center mt-6 px-2">
          <img src={image} className="w-16 h-16" />
          <p className="text-indigo-200  text-center flex place-content-center px-2">{title}</p>
        </div>
        <p className="font-semibold text-2xl mt-6 text-green-200 opacity-90 underline">
          {subTiltle}
        </p>
        <p className="text-xl text-gray-400 mt-6 ">{description}</p>
        <div className="flex flex-row gap-4 sm:gap-8 mt-6 text-white ">
          {icons?.map((IconItem: IconType, index: number) => {
            return <IconItem key={index} className="text-green-500" size={28} />;
          })}
        </div>
      </div>
    </div>
  );
};
