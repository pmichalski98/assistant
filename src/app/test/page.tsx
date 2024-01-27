import React from "react";

function Page() {
  return <div>test</div>;
  // <div className="w-full pt-2 dark:border-white/20 md:w-[calc(100%-.5rem)] md:border-transparent md:pt-0 md:dark:border-transparent">
  //   <form className="stretch mx-2 flex flex-row gap-3 last:mb-2 md:mx-4 md:last:mb-6 lg:mx-auto lg:max-w-2xl xl:max-w-3xl">
  //     <div className="relative flex h-full flex-1 items-stretch md:flex-col">
  //       <div>
  //         <div className="ml-1 flex h-full justify-center gap-0 md:m-auto md:mb-4 md:w-full md:gap-2">
  //           <div className="grow">
  //             <div className="absolute bottom-full left-0 mb-4 flex w-full grow gap-2 px-1 pb-1 sm:px-2 sm:pb-0 md:static md:mb-0 md:max-w-none">
  //               <div className="grid w-full grid-flow-row grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-2">
  //                 <div className="flex flex-col gap-2">
  //                   <span
  //                     data-projection-id="110"
  //                     style={{ opacity: 1, transform: "none" }}
  //                   >
  //                     <button className="btn btn-neutral group relative w-full whitespace-nowrap rounded-xl px-4 py-3 text-left text-gray-700 dark:text-gray-300 md:whitespace-normal">
  //                       <div className="flex w-full items-center justify-center gap-2">
  //                         <div className="flex w-full items-center justify-between">
  //                           <div className="flex flex-col overflow-hidden">
  //                             <div className="truncate">
  //                               Design a database schema
  //                             </div>
  //                             <div className="truncate font-normal opacity-50">
  //                               for an online merch store
  //                             </div>
  //                           </div>
  //                           <div className="absolute bottom-0 right-0 top-0 flex items-center rounded-xl bg-gradient-to-l from-gray-50 from-[60%] pl-6 pr-4 text-gray-700 opacity-0 group-hover:opacity-100 dark:from-gray-700 dark:text-gray-200">
  //                             <span className="" data-state="closed">
  //                               <div className="bg-token-surface-primary shadow-xxs rounded-lg p-1 dark:shadow-none">
  //                                 <svg
  //                                   width="24"
  //                                   height="24"
  //                                   viewBox="0 0 24 24"
  //                                   fill="none"
  //                                   className="icon-sm text-token-text-primary"
  //                                 >
  //                                   <path
  //                                     d="M7 11L12 6L17 11M12 18V7"
  //                                     stroke="currentColor"
  //                                     stroke-width="2"
  //                                     stroke-linecap="round"
  //                                     stroke-linejoin="round"
  //                                   ></path>
  //                                 </svg>
  //                               </div>
  //                             </span>
  //                           </div>
  //                         </div>
  //                       </div>
  //                     </button>
  //                   </span>
  //                   <span
  //                     data-projection-id="111"
  //                     style={{ opacity: 1, transform: "none" }}
  //                   >
  //                     <button className="btn btn-neutral group relative w-full whitespace-nowrap rounded-xl px-4 py-3 text-left text-gray-700 dark:text-gray-300 md:whitespace-normal">
  //                       <div className="flex w-full items-center justify-center gap-2">
  //                         <div className="flex w-full items-center justify-between">
  //                           <div className="flex flex-col overflow-hidden">
  //                             <div className="truncate">Help me pick</div>
  //                             <div className="truncate font-normal opacity-50">
  //                               a birthday gift for my mom who likes gardening
  //                             </div>
  //                           </div>
  //                           <div className="absolute bottom-0 right-0 top-0 flex items-center rounded-xl bg-gradient-to-l from-gray-50 from-[60%] pl-6 pr-4 text-gray-700 opacity-0 group-hover:opacity-100 dark:from-gray-700 dark:text-gray-200">
  //                             <span className="" data-state="closed">
  //                               <div className="bg-token-surface-primary shadow-xxs rounded-lg p-1 dark:shadow-none">
  //                                 <svg
  //                                   width="24"
  //                                   height="24"
  //                                   viewBox="0 0 24 24"
  //                                   fill="none"
  //                                   className="icon-sm text-token-text-primary"
  //                                 >
  //                                   <path
  //                                     d="M7 11L12 6L17 11M12 18V7"
  //                                     stroke="currentColor"
  //                                     stroke-width="2"
  //                                     stroke-linecap="round"
  //                                     stroke-linejoin="round"
  //                                   ></path>
  //                                 </svg>
  //                               </div>
  //                             </span>
  //                           </div>
  //                         </div>
  //                       </div>
  //                     </button>
  //                   </span>
  //                 </div>
  //                 <div className="flex flex-col gap-2">
  //                   <span
  //                     data-projection-id="112"
  //                     style={{ opacity: 1, transform: "none" }}
  //                   >
  //                     <button className="btn btn-neutral group relative w-full whitespace-nowrap rounded-xl px-4 py-3 text-left text-gray-700 dark:text-gray-300 md:whitespace-normal">
  //                       <div className="flex w-full items-center justify-center gap-2">
  //                         <div className="flex w-full items-center justify-between">
  //                           <div className="flex flex-col overflow-hidden">
  //                             <div className="truncate">
  //                               Suggest fun activities
  //                             </div>
  //                             <div className="truncate font-normal opacity-50">
  //                               to do indoors with my high-energy dog
  //                             </div>
  //                           </div>
  //                           <div className="absolute bottom-0 right-0 top-0 flex items-center rounded-xl bg-gradient-to-l from-gray-50 from-[60%] pl-6 pr-4 text-gray-700 opacity-0 group-hover:opacity-100 dark:from-gray-700 dark:text-gray-200">
  //                             <span className="" data-state="closed">
  //                               <div className="bg-token-surface-primary shadow-xxs rounded-lg p-1 dark:shadow-none">
  //                                 <svg
  //                                   width="24"
  //                                   height="24"
  //                                   viewBox="0 0 24 24"
  //                                   fill="none"
  //                                   className="icon-sm text-token-text-primary"
  //                                 >
  //                                   <path
  //                                     d="M7 11L12 6L17 11M12 18V7"
  //                                     stroke="currentColor"
  //                                     stroke-width="2"
  //                                     stroke-linecap="round"
  //                                     stroke-linejoin="round"
  //                                   ></path>
  //                                 </svg>
  //                               </div>
  //                             </span>
  //                           </div>
  //                         </div>
  //                       </div>
  //                     </button>
  //                   </span>
  //                   <span
  //                     data-projection-id="113"
  //                     style={{ opacity: 1, transform: "none" }}
  //                   >
  //                     <button className="btn btn-neutral group relative w-full whitespace-nowrap rounded-xl px-4 py-3 text-left text-gray-700 dark:text-gray-300 md:whitespace-normal">
  //                       <div className="flex w-full items-center justify-center gap-2">
  //                         <div className="flex w-full items-center justify-between">
  //                           <div className="flex flex-col overflow-hidden">
  //                             <div className="truncate">Brainstorm names</div>
  //                             <div className="truncate font-normal opacity-50">
  //                               for an orange cat we're adopting from the
  //                               shelter
  //                             </div>
  //                           </div>
  //                           <div className="absolute bottom-0 right-0 top-0 flex items-center rounded-xl bg-gradient-to-l from-gray-50 from-[60%] pl-6 pr-4 text-gray-700 opacity-0 group-hover:opacity-100 dark:from-gray-700 dark:text-gray-200">
  //                             <span className="" data-state="closed">
  //                               <div className="bg-token-surface-primary shadow-xxs rounded-lg p-1 dark:shadow-none">
  //                                 <svg
  //                                   width="24"
  //                                   height="24"
  //                                   viewBox="0 0 24 24"
  //                                   fill="none"
  //                                   className="icon-sm text-token-text-primary"
  //                                 >
  //                                   <path
  //                                     d="M7 11L12 6L17 11M12 18V7"
  //                                     stroke="currentColor"
  //                                     stroke-width="2"
  //                                     stroke-linecap="round"
  //                                     stroke-linejoin="round"
  //                                   ></path>
  //                                 </svg>
  //                               </div>
  //                             </span>
  //                           </div>
  //                         </div>
  //                       </div>
  //                     </button>
  //                   </span>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //       <div className="flex w-full items-center">
  //         <div className="[&:has(textarea:focus)]:border-token-border-xheavy dark:border-token-border-heavy border-token-border-heavy relative flex w-full flex-grow flex-col overflow-hidden rounded-2xl border bg-white shadow-[0_0_0_2px_rgba(255,255,255,0.95)] dark:bg-gray-800 dark:text-white dark:shadow-[0_0_0_2px_rgba(52,53,65,0.95)] [&:has(textarea:focus)]:shadow-[0_2px_6px_rgba(0,0,0,.05)]">
  //           <textarea
  //             id="prompt-textarea"
  //             // tabIndex="0"
  //             data-id="root"
  //             // rows="1"
  //             placeholder="Message ChatGPT…"
  //             className="m-0 w-full resize-none border-0 bg-transparent py-[10px] pl-3 pr-10 placeholder-black/50 focus:ring-0 focus-visible:ring-0 dark:bg-transparent dark:placeholder-white/50 md:py-3.5 md:pl-4 md:pr-12"
  //             // style="max-height: 200px; height: 892px;"
  //           ></textarea>
  //           <button
  //             className="absolute bottom-1.5 right-2 rounded-lg border border-black p-0.5 text-white transition-colors enabled:bg-black disabled:bg-black disabled:text-gray-400 disabled:opacity-10 dark:border-white dark:bg-white dark:hover:bg-gray-900 dark:disabled:bg-white dark:disabled:hover:bg-transparent md:bottom-3 md:right-3"
  //             data-testid="send-button"
  //           >
  //             <span className="" data-state="closed">
  //               <svg
  //                 width="24"
  //                 height="24"
  //                 viewBox="0 0 24 24"
  //                 fill="none"
  //                 className="text-white dark:text-black"
  //               >
  //                 <path
  //                   d="M7 11L12 6L17 11M12 18V7"
  //                   stroke="currentColor"
  //                   stroke-width="2"
  //                   stroke-linecap="round"
  //                   stroke-linejoin="round"
  //                 ></path>
  //               </svg>
  //             </span>
  //           </button>
  //         </div>
  //       </div>
  //     </div>
  //   </form>
  //   <div className="relative px-2 py-2 text-center text-xs text-gray-600 dark:text-gray-300 md:px-[60px]">
  //     <span>
  //       ChatGPT can make mistakes. Consider checking important information.
  //     </span>
  //   </div>
  // </div>
}

export default Page;
