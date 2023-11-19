'use client'

import pcPartsLogo from "@/assets/Black & White Minimalist Business Logo.svg"
import pcPartsLogoLight from "@/assets/Black & White Minimalist Business Logo light.svg"
import energyDrinks from "@/assets/energy_drinks.jpeg"
import gamerJuiceLogo from "@/assets/gamer_juice.svg"
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarShortcut, MenubarTrigger } from '@/components/ui/menubar'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, NavigationMenuViewport } from '@/components/ui/navigation-menu'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useTheme } from 'next-themes'
import Image from 'next/image'

export function NavMenu() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const formatTheme = (theme: string) => {
    return theme.charAt(0).toUpperCase() + theme.slice(1);
  };

  return (
    <>
      <div className="w-full p-2 flex flex-col-4 space-between">
        <Menubar className="mx-4 py-6 pl-2">
          {theme === 'light' ?
            <Image src={pcPartsLogoLight} alt="PC Parts Logo" width={150} />
            :
            <Image src={pcPartsLogo} alt="PC Parts Logo" width={150} />
          }
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Components</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="h-[600px] w-[450px] p-2 flex flex-col flex-wrap gap-2">
                    <Card className="p-2 flex-1">
                      <NavigationMenuLink>
                        <p className="text-bold text-xl"> Memory </p>
                      </NavigationMenuLink>
                      <br />
                      <NavigationMenuLink>
                        Desktop Memory
                      </NavigationMenuLink>
                      <br />
                      <NavigationMenuLink>
                        Laptop Memory
                      </NavigationMenuLink>
                      <br />
                      <NavigationMenuLink>
                        Server Memory
                      </NavigationMenuLink>
                      <br />
                    </Card>

                    <Card className="p-2 flex-1">
                      <NavigationMenuLink>
                        <p className="text-bold text-xl">
                          Graphics Card
                        </p>
                      </NavigationMenuLink>
                      <br />
                      <NavigationMenuLink>
                        AMD Radeon Graphics Cards
                      </NavigationMenuLink>
                      <br />
                      <NavigationMenuLink>
                        NVIDIA Graphics Cards
                      </NavigationMenuLink>
                      <br />
                      <NavigationMenuLink>
                        Intel Graphics Cards
                      </NavigationMenuLink>
                      <br />
                    </Card>

                    <Card className="p-2 flex-1">
                      <NavigationMenuLink>
                        <p className="text-bold text-xl"> Motherboards </p>
                      </NavigationMenuLink>
                      <br />
                      <NavigationMenuLink>
                        AMD Motherboards
                      </NavigationMenuLink>
                      <br />
                      <NavigationMenuLink>
                        Intel Motherboards
                      </NavigationMenuLink>
                      <br />
                    </Card>
                    <Card className="p-2 flex-1">
                      <NavigationMenuLink>
                        <p className="text-bold text-xl">
                          Processors
                        </p>
                      </NavigationMenuLink>
                      <br />
                      <NavigationMenuLink>
                        AMD Processors
                      </NavigationMenuLink>
                      <br />
                      <NavigationMenuLink>
                        Intel Processors
                      </NavigationMenuLink>
                      <br />
                    </Card>

                    <Card className="p-2 flex-1">
                      <NavigationMenuLink>
                        <p className="text-bold text-xl">
                          Power Supplies
                        </p>
                      </NavigationMenuLink>
                      <br />
                      <NavigationMenuLink>
                        All PSUs
                      </NavigationMenuLink>
                      <br />
                      <NavigationMenuLink>
                        Fully Modular
                      </NavigationMenuLink>
                      <br />
                      <NavigationMenuLink>
                        Semi Modular
                      </NavigationMenuLink>
                      <br />
                      <NavigationMenuLink>
                        300W - 400W PSUs
                      </NavigationMenuLink>
                      <br />
                      <NavigationMenuLink>
                        601W - 750W PSUs
                      </NavigationMenuLink>
                      <br />
                      <NavigationMenuLink>
                        751W - 900W PSUs
                      </NavigationMenuLink>
                      <br />
                      <NavigationMenuLink>
                        900W + PSUs
                      </NavigationMenuLink>
                      <br />
                    </Card>

                    <Card className="p-2 flex-1">
                      <NavigationMenuLink>
                        <p className="text-bold text-xl">
                          PC Bundles
                        </p>
                      </NavigationMenuLink>
                      <br />
                      <NavigationMenuLink>
                        Custom PC Bundles
                      </NavigationMenuLink>
                      <br />
                    </Card>

                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Diplay</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="h-80 w-[450px] p-2 flex flex-col flex-wrap gap-2">
                    <Card className="p-2 flex-1">
                      <p className="font-bold text-xl">By size</p>
                      <br />
                      <NavigationMenuLink>19-24&quot;</NavigationMenuLink>
                      <br />
                      <NavigationMenuLink>25-31&quot;</NavigationMenuLink>
                      <br />
                      <NavigationMenuLink>32&quot;+</NavigationMenuLink>
                    </Card>
                    <Card className="p-2 flex-1">
                      <p className="font-bold text-xl">By panel</p>
                      <br />
                      <NavigationMenuLink> TN </NavigationMenuLink>
                      <br />
                      <NavigationMenuLink> VA </NavigationMenuLink>
                      <br />
                      <NavigationMenuLink> IPS </NavigationMenuLink>
                    </Card>
                    <Card className="p-2 flex-1">
                      <p className="font-bold text-xl">By aspect ratio</p>
                      <br />
                      <NavigationMenuLink> 16:9 </NavigationMenuLink>
                      <br />
                      <NavigationMenuLink> 21:9 </NavigationMenuLink>
                      <br />
                      <NavigationMenuLink> 32:9 </NavigationMenuLink>
                    </Card>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Gamer Juice</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[450px] p-2 flex flex-col flex-wrap gap-2">
                      <Image
                        className="mb-2 px-2 rounded-sm"
                        src={gamerJuiceLogo}
                        alt="PC Parts Logo"
                        width={900}
                      />
                    <Card className="p-2">
                      <Image
                        className="mb-2 rounded-sm"
                        src={energyDrinks}
                        alt="PC Parts Logo"
                        width={900}
                      />
                      <div className="grid grid-cols-3">
                        <NavigationMenuLink><p className="font-bold text-xl text-center">Tropical</p></NavigationMenuLink>
                        <NavigationMenuLink><p className="font-bold text-xl text-center">Noob Tears</p></NavigationMenuLink>
                        <NavigationMenuLink><p className="font-bold text-xl text-center">Purple</p></NavigationMenuLink>
                        <NavigationMenuLink><p className="font-bold text-xl text-center">Monkey</p></NavigationMenuLink>
                        <NavigationMenuLink><p className="font-bold text-xl text-center">Mango</p></NavigationMenuLink>
                        <NavigationMenuLink><p className="font-bold text-xl text-center">Banana</p></NavigationMenuLink>
                      </div>
                    </Card>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <MenubarMenu>
            <MenubarTrigger>Options</MenubarTrigger>
            <MenubarContent>
              <MenubarItem onClick={toggleTheme}> Light / Dark</MenubarItem>
              <MenubarItem>New Window</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Share</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Print</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
        <div className="grow" />
        <Button className="mr-4" onClick={toggleTheme}>{theme ? `${formatTheme(theme)} mode` : "Theme"} </Button>
      </div >
    </>
  )
}
