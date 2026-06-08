"use client"

import { toast } from "sonner"

export function toastMessage(
  message: string,
  type?: "success" | "normal" | "error"
) {
  if (type === "success") {
    toast.success(message, {
      action: {
        label: "X",
        onClick: () => console.log("Undo"),
      },
    })
  } else if (type === "error") {
    toast.error(message, {
      action: {
        label: "X",
        onClick: () => console.log("Undo"),
      },
    })
  } else {
    // normal toast
    toast(message, {
      action: {
        label: "X",
        onClick: () => console.log("Undo"),
      },
    })
  }
}