export default function Education() {
  return (
    <div>
      <div className="ps-2 my-2 first:mt-0">
        <h1 className="text-xl font-bold text-gray-500 dark:text-gray-100">
          My Education 👨🏼‍🎓
        </h1>
      </div>
      <div className="flex flex-col">
        <div className="flex gap-x-3 w-full">
          {/* Icon */}
          <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
            <div className="relative z-10 w-7 h-7 flex justify-center items-center">
              <div className="w-2 h-2 rounded-full bg-gray-400 dark:bg-neutral-600"></div>
            </div>
          </div>
          <div className="w-full pb-8 pt-2">
            <div className="flex gap-4">
              <img
                className="h-12 w-12 rounded object-cover object-center bg-slate-100"
                src="/NITJ-Logo-2.png"
                alt="NITJ Logo"
                width={20}
              />
              <div className="text-base font-medium w-full">
                <h3 className="font-medium">
                  National Institute of Technology, Jalandhar, Punjab
                </h3>
                <div className="flex flex-col sm:flex-row justify-between font-normal text-sm text-gray-400">
                  <p>
                    <span>Bachelor of Technology in Biotechnology</span>
                    {/* <span className="mx-1">|</span>
                    <span>CGPA: 9.0</span> */}
                  </p>
                  <p>2020 - 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-x-3">
          {/* Icon */}
          <div className="relative last:after:hidden dark:after:bg-neutral-700">
            <div className="relative z-10 w-7 h-7 flex justify-center items-center">
              <div className="w-2 h-2 rounded-full bg-gray-400 dark:bg-neutral-600"></div>
            </div>
          </div>
          <div className="w-full pb-8 pt-2">
            <div className="flex gap-4">
              <img
                className="h-12 w-12 rounded object-cover object-center bg-slate-100"
                src="/SBP-LOGO.png"
                alt="SBP Logo"
              />
              <div className="text-base font-medium w-full">
                <h3 className="font-medium">SBP Vidya Vihar, Banks, Bihar</h3>
                <div className="flex flex-col sm:flex-row justify-between font-normal text-sm text-gray-400">
                  <p>
                    <span>Intermediate in PCM</span>
                    {/* <span className="mx-1">|</span>
                    <span>Percentage: 84%</span> */}
                  </p>
                  <p>2017 - 2019</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Additional Items as needed */}
        {/* Repeat similarly structured items here, updating content as required */}
      </div>
    </div>
  );
}
