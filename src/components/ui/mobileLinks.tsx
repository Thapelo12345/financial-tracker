import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { cloneElement, isValidElement } from 'react';
import type { ReactElement } from 'react';

type Props = {
  pageUrl: string;
  toolTip: string;
  icon?: ReactElement;
};

export default function MobileLinks({ pageUrl, toolTip, icon }: Props){

const location = useLocation()
const currentLocation: string = location.pathname;

    const styledIcon =
      isValidElement(icon) &&
      cloneElement(icon as ReactElement<{ className?: string }>, {
        className: `w-5 h-5 mr-2 ${
          currentLocation === pageUrl ? 'text-green-500' : 'text-white'
        }`,
      });

    return(
        <Link 
        to={pageUrl}
        className=
        {
          `flex flex-row p-2 text-xs m-2 ${currentLocation === pageUrl ?
          'inline-block border-b-2 border-green-500 text-green-400 bg-white rounded-tr-lg rounded-tl-lg' :
          'text-white'
          }`
        }
        title={toolTip}
        >
        {styledIcon}
        </Link>
    )
}