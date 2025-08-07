'use client';

import Link from 'next/link';
import { cloneElement, isValidElement, ReactElement } from 'react';
import { usePathname } from 'next/navigation';

type Props = {
  pageUrl: string;
  linkText: string;
  icon?: ReactElement<any, any>;
};

export default function LinkBtns({ pageUrl, linkText, icon }: Props) {
  const currentLocation: string = usePathname();

  const styledIcon =
    isValidElement(icon) &&
    cloneElement(icon as ReactElement<any>, {
      className: `w-5 h-5 mr-2 ${
        currentLocation === pageUrl ? 'text-green-500' : 'text-white'
      }`,
    });

  return (
    <Link href={pageUrl}>
      <button
        className={
          currentLocation === pageUrl
            ? 'flex flex-row p-2 bg-white text-xs text-black font-bold m-2 rounded-tr-lg rounded-br-lg'
            : 'flex flex-row p-2 text-xs text-white font-bold m-2 rounded-tr-lg rounded-br-lg'
        }
      >
        {styledIcon}
        {linkText}
      </button>
    </Link>
  );
}
