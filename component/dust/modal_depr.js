import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment } from "react";

function Modal({ addPostModal, setAddPostModal }) {
  console.log(addPostModal);
  return (
    <Transition.Root show={addPostModal} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 insect-0 overflow-y-auto"
        onClose={setAddPostModal}
      >
        <div
          className="flex flex-end justify-center min-h-[800px] sm:min-h-screen pt-4 px-2 pb-20 text-center
        sm:block sm:p-0"
        >
          <Transition.Child
            as={Fragment}
            enterFrom="opacity-0"
            enter="ease-out duration-300"
            enterTo="opacity-100"
            leave="ease-out duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-200 bg-opacity-75 transition-opacity" />
          </Transition.Child>
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter="ease-out duration-300"
            enterTo="opacity-100 sm:translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div
              className="inline-block align-bottom bg-red-500 rounded-lg px-4 pt-5 pb-4 text-left
            overflow-hidden shadow-xl transition-all transform sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6
            "
            >
              <h1 className="">helow</h1>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

export default Modal;
