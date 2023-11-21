import { CustomInput } from '@/components/ui/customInput'
import { Popover, PopoverContent, PopoverTrigger, } from "@/components/ui/popover"
import { useState } from 'react'

export function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  return(
    <CustomInput className="w-full" onSubmit={(e) => console.log(e.target, "awdhjk")} onChange={(e) => {
      console.log(e.target.value)
      setSearchTerm(e.target.value)
    }} placeholder="Search" >
      <div className="absolute w-full">
        <Popover open={searchTerm.length > 0}>
          <PopoverTrigger>
          </PopoverTrigger>
          <PopoverContent className="w-[702px] max-h-[200px] overflow-hidden" onOpenAutoFocus={(e) => e.preventDefault()}>
            {searchTerm}
          </PopoverContent>
        </Popover>
      </div>
    </CustomInput>
  )
}
