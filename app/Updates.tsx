"use client";

import { useEffect, useState } from "react";
import { FC, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  FaInstagram,
  FaWhatsapp,
  FaFacebookSquare,
  FaLinkedin,
} from "react-icons/fa";
import { fetchEventsData } from "./retrieveEvents";

interface UpdatesPageProps {
  isOpen: boolean;
  onClose: () => void;
}

const UpdatesPage: FC<UpdatesPageProps> = ({ isOpen, onClose }) => {
  const [updates, setUpdates] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchEventsData();
      setUpdates(
        data || [
          {
            id: 1,
            name: "Unable to fetch",
            description: "Sunshine",
            date: "2021-10-10",
            href: "https://sunshine.iith.ac.in",
          },
        ]
      );
    };

    fetchData();
  }, []);

  return (
    <Transition.Root show={isOpen} as={Dialog} onClose={onClose}>
      <Transition.Child
        as={Fragment}
        enter="ease-in-out duration-500"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in-out duration-500"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      </Transition.Child>
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                <div className="flex h-full flex-col overflow-y-auto bg-white shadow-xl">
                  <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                    <div className="flex items-start justify-between">
                      <Dialog.Title className="text-lg font-bold text-gray-900">
                        Recent Updates
                      </Dialog.Title>
                      <div className="ml-3 flex h-7 items-center">
                        <button
                          type="button"
                          className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                          onClick={onClose}
                        >
                          <span className="absolute -inset-0.5" />
                          <span className="sr-only">Close panel</span>
                          <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                    <div className="mt-8">
                      <div className="flow-root">
                        <ul
                          role="list"
                          className="-my-6 divide-y divide-gray-200"
                        >
                          {updates.map((update) => (
                            <li key={update.id} className="flex py-6">
                              <div className="ml-4 flex flex-1 flex-col">
                                <div>
                                  <div className="flex justify-between text-base font-medium text-gray-900">
                                    <h3 className="text-ellipsis">
                                      <a href={update.href}>{update.name}</a>
                                    </h3>
                                    <p className="ml-4 text-gray-600">
                                      {update.date}
                                    </p>
                                  </div>
                                  <p className="mt-1 text-sm text-gray-500">
                                    {update.description.length > 100
                                      ? `${update.description.slice(0, 100)}...`
                                      : update.description}
                                  </p>
                                </div>
                                <div className="flex flex-1 items-end justify-between text-sm mt-1">
                                  <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href={update.href}
                                    className="font-medium text-indigo-600 hover:text-indigo-500 flex items-center"
                                  >
                                    View &rarr;
                                  </a>
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="border-t border-gray-200 px-4 py-4 sm:px-6">
                    <div className="flex justify-center space-x-4">
                      <a
                        href="https://www.linkedin.com/company/sunshine-iith/"
                        className="flex bg-white text-sky-700 hover:text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                      >
                        <FaLinkedin size={24} />
                      </a>
                      <a
                        href="https://www.facebook.com/sunshineiith"
                        className="flex bg-white text-blue-500 hover:text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                      >
                        <FaFacebookSquare size={24} />
                      </a>
                      <a
                        href="https://www.instagram.com/sunshine_iith/"
                        className="flex bg-white text-pink-400 hover:text-pink-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                      >
                        <FaInstagram size={24} />
                      </a>
                      <a
                        href={`https://wa.me/918331036053`}
                        className="flex bg-white text-green-500 hover:text-green-700 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                      >
                        <FaWhatsapp size={24} />
                      </a>
                    </div>
                    {/* <div className="flex justify-center space-x-4">
                      <a
                        href="#"
                        className="flex items-center justify-center rounded-full border border-transparent bg-indigo-600 px-3 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                      >
                        <FaInstagram className="w-5 h-5" />
                      </a>
                      <a
                        href="#"
                        className="flex items-center justify-center rounded-full border border-transparent bg-indigo-600 px-3 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                      >
                        <FaFacebook className="w-5 h-5" />
                      </a>
                      <a
                        href="#"
                        className="flex items-center justify-center rounded-full border border-transparent bg-indigo-600 px-3 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                      >
                        <FaWhatsapp className="w-5 h-5" />
                      </a>
                      <a
                        href="#"
                        className="flex items-center justify-center rounded-full border border-transparent bg-indigo-600 px-3 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                      >
                        <FaTwitter className="w-5 h-5" />
                      </a>
                    </div> */}
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </div>
    </Transition.Root>
  );
};

export default UpdatesPage;
