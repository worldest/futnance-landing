import SingleBlog from "@/components/Blog/SingleBlog";
import blogData from "@/components/Blog/blogData";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Link from "next/link";

const HowToPay = () => {
  return (
    <>
      <Breadcrumb
        pageName="News - Blog"
        description="Read Latest sport news"
      />

      <section className="pt-[0px] pb-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
          <Link
            href="./general"
            className="rounded-md bg-primary py-4 px-8 m-1 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
          >
            How to pay (General)
          </Link>
          <Link
            href="./uganda"
            className="rounded-md bg-primary py-4 px-8 m-1 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
          >
            How to pay (Uganda)
          </Link>
          <Link
            href="./nigeria"
            className="rounded-md bg-primary py-4 px-8 m-1 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
          >
            How to pay (Nigeria)
          </Link>
          <Link
            href="./cameroon"
            className="rounded-md bg-primary py-4 px-8 m-1 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
          >
            How to pay (Cameroon)
          </Link>
          <Link
            href="./kenya"
            className="rounded-md bg-primary py-4 px-8 m-1 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
          >
            How to pay (Kenya)
          </Link>
          <Link
            href="./zambia"
            className="rounded-md bg-primary py-4 px-8 m-1 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
          >
            How to pay (Zambia)
          </Link>
          <Link
            href="./ghana"
            className="rounded-md bg-primary py-4 px-8 m-1 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
          >
            How to pay (Ghana)
          </Link>
          </div>

          {/* <div
            className="wow fadeInUp -mx-4 flex flex-wrap"
            data-wow-delay=".15s"
          >
            <div className="w-full px-4">
              <ul className="flex items-center justify-center pt-8">
                <li className="mx-1">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                  >
                    Prev
                  </a>
                </li>
                <li className="mx-1">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                  >
                    1
                  </a>
                </li>
                <li className="mx-1">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                  >
                    2
                  </a>
                </li>
                <li className="mx-1">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                  >
                    3
                  </a>
                </li>
                <li className="mx-1">
                  <a className="flex h-9 min-w-[36px] cursor-not-allowed items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color">
                    ...
                  </a>
                </li>
                <li className="mx-1">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                  >
                    12
                  </a>
                </li>
                <li className="mx-1">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                  >
                    Next
                  </a>
                </li>
              </ul>
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default HowToPay;
