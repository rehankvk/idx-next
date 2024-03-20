import Link from "next/link";

export default function NavigationBar() {
  return (
    <>
      <nav
  class="block w-full max-w-screen-xl px-6 py-3 mx-auto text-black bg-white border shadow-md rounded-xl border-white/80 bg-opacity-80 backdrop-blur-2xl backdrop-saturate-200">
  <div class="flex items-center justify-between text-blue-gray-900">
    <Link href="/"
      class="mr-4 block cursor-pointer py-1.5 text-base font-semibold leading-relaxed tracking-normal text-inherit antialiased">
      Material Tailwind
    </Link>
    <div class="block">
      <ul class="flex flex-row gap-2 my-2 lg:mb-0 lg:mt-0 lg:items-center lg:gap-6">
        <li class="block p-1 text-sm antialiased font-medium leading-normal text-blue-gray-900">
          <Link href="/products" class="flex items-center transition-colors hover:text-blue-500">
            Products
          </Link>
        </li>
        <li class="block p-1 text-sm antialiased font-medium leading-normal text-blue-gray-900">
          <Link href="/dashboard" class="flex items-center transition-colors hover:text-blue-500">
            Account
          </Link>
        </li>
      </ul>
    </div>
    </div>
</nav>
    </>
  );
}
