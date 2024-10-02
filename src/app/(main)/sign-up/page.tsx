import React from "react";
import Container from "@/components/common/ui/Container";
import Image from "next/image";
import Link from "next/link";
import RegisterForm from "@/components/forms/RegisterForm";

const Page = () => {
  return (
    <section className="bg-white py-32 xs:py-40 grid place-items-center">
      <Container>
        <div className="grid sm:grid-cols-2">
          <div className="flex flex-col gap-4 items-center justify-center">
            <div className="flex flex-col items-center gap-2">
              <h3 className="text-2xl text-dark-1 font-semibold">Register</h3>
              <p className="text-dark-1">Let&apos;s create your account!</p>
              <p className="text-dark-1 text-[13px]">
                Already have an account?{" "}
                <Link href="/login" className="text-primary">
                  Login!
                </Link>
              </p>
            </div>
            <RegisterForm />
          </div>
          <div className="hidden sm:block">
            <Image alt="" src={"/assets/login.png"} width={500} height={250} />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Page;
