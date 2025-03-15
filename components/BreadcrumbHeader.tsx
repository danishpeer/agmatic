"use client"
import { usePathname } from 'next/navigation'
import React from 'react'
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbSeparator, BreadcrumbLink } from '@/components/ui/breadcrumb';
import { MobileSidebar } from '@/components/Sidebar';

function BreadcrumbHeader() {
  const pathName = usePathname();
  const paths = pathName === "/" ? [""] : pathName.split("/");
  return (
    <div className='flex items-center justify-start'>
      <MobileSidebar/>
      <Breadcrumb>
        <BreadcrumbList>
        {paths.map((path, index) => (
          <React.Fragment key={index}>
            <BreadcrumbLink className='capitalize' href={`/${path}`}>
            {path==="" ? "home" : path}
            </BreadcrumbLink>
          </React.Fragment>
        ))}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  )
}

export default BreadcrumbHeader