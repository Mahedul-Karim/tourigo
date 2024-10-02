import Container from "@/components/common/ui/Container";
import LoginForm from "@/components/forms/LoginForm";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <section className="bg-white py-32 xs:py-40 grid place-items-center">
      <Container>
        <div className="grid sm:grid-cols-2">
          <div className="flex flex-col gap-4 items-center justify-center">
            <div className="flex flex-col items-center gap-2">
              <h3 className="text-2xl text-dark-1 font-semibold">Log In</h3>
              <p className="text-dark-1">We&apos;re glad to see you again!</p>
              <p className="text-dark-1 text-[13px]">
                Don&apos;t have an account?{" "}
                <Link href="/sign-up" className="text-primary">
                  Sign Up!
                </Link>
              </p>
            </div>
            <LoginForm />
            
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
