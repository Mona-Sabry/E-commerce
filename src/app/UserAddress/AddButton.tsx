// 'use client'

// import React from 'react'
// import { Button } from "@/components/ui/button"
// import {
//   Dialog,
//   DialogClose,
//   DialogContent,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog"
// import { Field, FieldGroup } from "@/components/ui/field"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Textarea } from "@/components/ui/textarea"

// type Props = {
//   open: boolean;
//   setOpen: (open: boolean) => void;
// };

// export default function AddButton({ open, setOpen }: Props) {
//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log("submit address");
//   };

//   return (
//     <Dialog open={open} onOpenChange={setOpen}>

//       <DialogTrigger asChild>
//         <Button className="text-white bg-[#16A34A] hover:bg-[#15803D]">
//           + Add Address
//         </Button>
//       </DialogTrigger>

//       <DialogContent className="sm:max-w-sm">

//         <DialogHeader>
//           <DialogTitle className="text-xl font-bold">
//             Add New Address
//           </DialogTitle>
//         </DialogHeader>

//         {/* FORM هنا صح */}
//         <form onSubmit={handleSubmit}>

//           <FieldGroup className="flex flex-col gap-3">

//             {/* Address Name */}
//             <Field>
//               <Label>Address Name</Label>
//               <Input placeholder="e.g. Home, Office" />
//             </Field>

//             {/* Full Address */}
//             <Field>
//               <Label>Full Address</Label>
//               <Textarea placeholder="Street, building, apartment" />
//             </Field>

//             {/* Phone + City */}
//             <div className="flex gap-3">

//               <Field className="w-1/2">
//                 <Label>Phone Number</Label>
//                 <Input placeholder="01xxxxxxxx" />
//               </Field>

//               <Field className="w-1/2">
//                 <Label>City</Label>
//                 <Input placeholder="Cairo" />
//               </Field>

//             </div>

//           </FieldGroup>

//           <DialogFooter className="flex justify-between mt-4">

//             <DialogClose asChild>
//               <Button
//                 type="button"
//                 variant="outline"
//                 className="bg-[#f5f6f9] hover:bg-[#E5E7EB]"
//                  onClick={() => setOpen(false)}
//               >
//                 Cancel
//               </Button>
//             </DialogClose>

//             <Button
//               type="submit"
//               className="bg-[#16A34A] hover:bg-[#15803D]"
//             >
//               Add Address
//             </Button>

//           </DialogFooter>

//         </form>

//       </DialogContent>

//     </Dialog>
//   )
// }
'use client'

import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Field, FieldGroup } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

export default function AddButton({ open, setOpen }: Props) {

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("submit address");
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>

      <DialogContent className="sm:max-w-sm">

        <DialogHeader>
          <DialogTitle className="text-xl font-bold">
            Add New Address
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit}>

          <FieldGroup className="flex flex-col gap-3">

            <Field>
              <Label>Address Name</Label>
              <Input placeholder="e.g. Home, Office"
               className='h-10 border border-gray-200 focus-visible:border-[#16A34A] focus-visible:ring-1 focus-visible:ring-[#16A34A] focus:shadow-emerald-300 '/>
            </Field>

            <Field>
              <Label>Full Address</Label>
              <Textarea placeholder="Street, building, apartment"
             className='h-25 border border-gray-200 focus-visible:border-[#16A34A] focus-visible:ring-1 focus-visible:ring-[#16A34A] focus:shadow-emerald-300 '/>
 
            </Field>

            <div className="flex gap-3">

              <Field className="w-1/2">
                <Label>Phone Number</Label>
                <Input placeholder="01xxxxxxxx" 
                className='h-10 border border-gray-200 focus-visible:border-[#16A34A] focus-visible:ring-1 focus-visible:ring-[#16A34A] focus:shadow-emerald-300 '/>

              </Field>

              <Field className="w-1/2">
                <Label>City</Label>
                <Input placeholder="Cairo" 
                className='h-10 border border-gray-200 focus-visible:border-[#16A34A] focus-visible:ring-1 focus-visible:ring-[#16A34A] focus:shadow-emerald-300 '/>

              </Field>

            </div>

          </FieldGroup>

          <DialogFooter className='mt-5'>
            <DialogClose asChild>
              <Button
                type="button"
                variant="outline"
                className="bg-[#f5f6f9] hover:bg-[#E5E7EB] px-16 py-5"
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
            </DialogClose>

            <Button
              type="submit"
              className="bg-[#16A34A] hover:bg-[#15803D] px-11 py-5"
            >
              Add Address
            </Button>

          </DialogFooter>

        </form>

      </DialogContent>

    </Dialog>
  )
}