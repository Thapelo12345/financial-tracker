'use client'

import Link from 'next/link';
import { cloneElement, isValidElement, ReactElement } from 'react';
import { usePathname } from 'next/navigation';

type Props = {
  pageUrl: string;
  toolTip: string;
  icon?: ReactElement<any, any>;
};

export default function MobileLinks({ pageUrl, toolTip, icon }: Props){
  const currentLocation: string = usePathname();

  const styledIcon =
    isValidElement(icon) &&
    cloneElement(icon as ReactElement<any>, {
      className: `w-4 h-4  ${
        currentLocation === pageUrl ? 'text-green-500' : 'text-white'
      }`,
    });

  return (
    <Link href={pageUrl}>
      <button
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
      </button>
    </Link>
  );
}