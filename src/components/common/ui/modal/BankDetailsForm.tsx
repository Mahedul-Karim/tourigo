import React from "react";
import Modal from './Modal'
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { Form, FormField, FormItem, FormMessage } from "@/components/ui/form";

import AnimatedInput from "@/components/forms/inputs/AnimatedInput";

interface Props {
  onModalClose: (val: boolean) => void;
  onModalAction: () => void;
}

const BankDetailsForm: React.FC<Props> = ({ onModalClose, onModalAction }) => {
  const form = useForm();

  const {
    formState: { errors, isSubmitting },
    getValues,
    reset,
  } = form;

  const onSubmit = async (values: any) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(values);
    reset();
    onModalClose(false);
  };

  return (
    <Modal
      className="h-[80vh] showScrollbar overflow-auto"
      onModalClose={onModalClose}
    >
      <h3 className="text-xl text-center sm:text-2xl font-medium text-dark-1">
        Add Withdraw Method
      </h3>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-1"
        >
          <FormField
            control={form.control}
            name="bankName"
            render={({ field }) => (
              <FormItem className="mt-6">
                <AnimatedInput
                  labelBg="bg-white"
                  label={"Bank Name"}
                  text={getValues("bankName")}
                  error={errors?.bankName?.message || ""}
                  {...field}
                  type="text"
                  disabled={isSubmitting}
                />

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="bankCountry"
            render={({ field }) => (
              <FormItem className="mt-6">
                <AnimatedInput
                  labelBg="bg-white"
                  label={"Bank Country"}
                  text={getValues("bankCountry")}
                  error={errors?.bankCountry?.message || ""}
                  type="text"
                  {...field}
                  disabled={isSubmitting}
                />

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="bankSwiftCode"
            render={({ field }) => (
              <FormItem className="mt-6">
                <AnimatedInput
                  labelBg="bg-white"
                  label={"Bank Swift Code"}
                  text={getValues("bankSwiftCode")}
                  error={errors?.bankSwiftCode?.message || ""}
                  type="text"
                  {...field}
                  disabled={isSubmitting}
                />

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="bankAccountNumber"
            render={({ field }) => (
              <FormItem className="mt-6">
                <AnimatedInput
                  labelBg="bg-white"
                  label={"Bank Account Number"}
                  text={getValues("bankAccountNumber")}
                  error={errors?.bankAccountNumber?.message || ""}
                  type="text"
                  {...field}
                  disabled={isSubmitting}
                />

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="bankHolderName"
            render={({ field }) => (
              <FormItem className="mt-6">
                <AnimatedInput
                  labelBg="bg-white"
                  label={"Bank Holder Name"}
                  text={getValues("bankHolderName")}
                  error={errors?.bankHolderName?.message || ""}
                  type="text"
                  {...field}
                  disabled={isSubmitting}
                />

                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="text-xs xs:text-sm bg-primary disabled:bg-disabled hover:bg-primary w-full rounded-xl mt-[20px]"
            disabled={isSubmitting}
            size={"lg"}
          >
            Submit
          </Button>
        </form>
      </Form>
    </Modal>
  );
};

export default BankDetailsForm;
