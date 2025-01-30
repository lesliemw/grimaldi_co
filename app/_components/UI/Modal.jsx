"use client";

import { Dialog, DialogPanel } from "@headlessui/react";
import { FaXmark } from "react-icons/fa6";

export default function Modal({ open, setOpen, children }) {
  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      className="relative z-10"
    >
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-full  items-center justify-center p-4 text-center">
          <DialogPanel className="w-full max-w-3xl transform overflow-hidden rounded-lg bg-white p-6 text-left align-middle shadow-xl transition-all">
            <>
              <span className="object-left-top cursor-pointer">
                <FaXmark onClick={setOpen} />
              </span>
              {children}
            </>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
