"use client"

import {CoinsIcon, HomeIcon, Layers2Icon, MenuIcon, ShieldCheckIcon } from 'lucide-react'
import React, { useState } from 'react'
import Logo from '@/components/Logo'
import Link from 'next/link'
import { Button, buttonVariants } from '@/components/ui/button'
import { usePathname } from 'next/navigation'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

const routes = [
    {
        href: "",
        label: "Home",
        icon: HomeIcon
    },
    {
        href: "workflows",
        label: "Workflows",
        icon: Layers2Icon
    },
    {
        href: "credentials",
        label: "Credentials",
        icon: ShieldCheckIcon
    },
    {
        href: "billing",
        label: "Billing",
        icon: CoinsIcon
    }
]

function DesktopSidebar() {
    const pathName  = usePathname();

    const activeRoute = routes.find( (route) => route.href.length > 0 && pathName.includes(route.href)) || routes[0];
  return (
    <div className='hidden relative md:block min-w-[280px] h-screen overflow-hidden
                    w-full max-w-[280px] bg-primary/5 dark:bg-secondary/30 dark:text-foreground text-muted-foreground
                    border-r-2 border-separate'>
        <div className='flex items-center justify-center gap-2 border-b-[1px] 
                        border-separate p-4'>
            <Logo />
        </div>
        <div className='p-2'>Todo : CREDITS</div>
        <div className='flex flex-col p-2'>
            {routes.map(route => (
                <Link key={route.href} href={route.href} className={buttonVariants({
                    variant: activeRoute.href === route.href ? "sideBarActiveItem" : "sideBarItem"
                })}>
                    <route.icon size={29} />
                    {route.label}
                </Link>
            ))}
        </div>
    </div>
  )
}

export function MobileSidebar(){
    const [isOpen, setOpen] = useState(false);
    const pathName  = usePathname();
    const activeRoute = routes.find( (route) => route.href.length > 0 && pathName.includes(route.href)) || routes[0];

   return (
    <div className='block border-separate bg-background md:hidden'>
        <nav className='flex container items-center justify-between px-2'>
            <Sheet open={isOpen} onOpenChange={setOpen}>
                <SheetTrigger asChild>

                    <Button variant={"ghost"} size={"icon"}>
                        <MenuIcon/>
                    </Button>
                </SheetTrigger>
                <SheetContent className='w-[400px] sm:w-[540px] space-y-4' side={"left"}>
                  <Logo />
                  <div className='flex flex-col gap-1 pt-10'>
                  {routes.map(route => (
                        <Link key={route.href} 
                            href={route.href} 
                            className={buttonVariants({
                            variant: activeRoute.href === route.href ? "sideBarActiveItem" : "sideBarItem"
                            })}
                            onClick={()=> setOpen(prev => !prev)}
                        >
                            <route.icon size={29} />
                            {route.label}
                        </Link>
                    ))}

                  </div>
                </SheetContent>
            </Sheet>
        </nav>
    </div>
   )
}

export default DesktopSidebar