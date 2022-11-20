// import { ThreeBounce } from "better-react-spinkit";
import Image from "next/image";

function Loader() {
  console.log(process.env.NEXT_PUBLIC_NEXTAUTH_URL);

  return (
    <div className="h-screen bg-black">
      <div className="pt-40 flex flex-col items-center space-y-4">
        <span className="relative w-[400px] h-[250px] lg:w-[550px] lg:h-[240px]">
          <Image
            src="https://rb.gy/y9mwtb"
            width={600}
            height={250}
            layout="fill"
            objectFit="contain"
            className="animate-pulse"
          />
        </span>
        {/* <ThreeBounce size={23} color="#15883e" /> */}
      </div>
    </div>
  );
}

export default Loader;
