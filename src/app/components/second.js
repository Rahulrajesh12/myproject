
import Image from "next/image";
import att_phone from "../components/images/attachment/phone.webp"
import web from "../components/images/attachment/web.webp"
export default function ZigzagPhones() {
  return (
    <div className="bg-[#305433] w-full h-auto">
      {/* Desktop Image */}
      <div className="hidden lg:block w-full h-full">
        <Image
          src={att_phone}
          alt="Phone 7 - Desktop"
          width={1000}
          height={1000}
          layout="responsive" // Ensures the image scales properly
          className=" "
        />
      </div>

      {/* Mobile Image */}
      <div className="block lg:hidden ">
        <Image
         src={web}
          alt="Phone 7 - Mobile"
          width={500}
          height={500}
          layout="responsive" // Ensures the image scales properly
          className=" "
        />
      </div>
    </div>
  );
}
