import React from "react";

export default function Sidebar() {
  return (
    <>
      <aside
        id="default-sidebar"
        class="fixed left-4 top-24 z-40 w-80 max-lg:w-64 max-md:w-56 transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div class="h-full px-3 py-4 rounded-2xl overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul class="space-y-2 font-medium">
            <li>
              <a
                href="#"
                class="flex items-center h-14 p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span class="ms-3">Dashboard</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex h-14 items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span class="flex-1 ms-3 whitespace-nowrap">Kanban</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex h-14 items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span class="flex-1 ms-3 whitespace-nowrap">Inbox</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex h-14 items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span class="flex-1 ms-3 whitespace-nowrap">Inbox</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex h-14 items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span class="flex-1 ms-3 whitespace-nowrap">Inbox</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex h-14 items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span class="flex-1 ms-3 whitespace-nowrap">Inbox</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex h-14 items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span class="flex-1 ms-3 whitespace-nowrap">Inbox</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex h-14 items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span class="flex-1 ms-3 whitespace-nowrap">Inbox</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex h-14 items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span class="flex-1 ms-3 whitespace-nowrap">Inbox</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
      
    </>
  );
}
