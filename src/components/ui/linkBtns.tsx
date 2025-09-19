import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { cloneElement, isValidElement } from "react";
import type { ReactElement } from "react";

type Props = {
  pageUrl: string;
  linkText: string;
  icon?: ReactElement;
};

export default function LinkBtns({ pageUrl, linkText, icon }: Props) {
  const location = useLocation();
  const currentLocation: string = location.pathname;

  const styledIcon =
    isValidElement(icon) &&
    cloneElement(icon as ReactElement<{ className?: string }>, {
      className: `w-5 h-5 mr-2 ${
        currentLocation === pageUrl ? "text-green-500" : "text-white"
      }`,
    });

  return (
    <Link
      className={
        currentLocation === pageUrl
          ? "flex flex-row p-2 bg-white text-xs w-fit pr-4 text-black font-bold m-2 rounded-tr-lg rounded-br-lg"
          : "flex flex-row p-2 text-xs text-white font-bold m-2 rounded-tr-lg rounded-br-lg"
      }
      to={pageUrl}
    >
      {styledIcon}
      {linkText}
    </Link>
  );
}
