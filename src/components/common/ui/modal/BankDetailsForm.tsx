import React from "react";
import Modal from "./Modal";
import { Button } from "@/components/ui/button";
import SpinnerButton from "../SpinnerButton";
import { useForm } from "react-hook-form";
import { Form, FormField, FormItem, FormMessage } from "@/components/ui/form";

import AnimatedInput from "@/components/forms/inputs/AnimatedInput";
import { useCtx } from "@/context/ContextProvider";
import { toast } from "sonner";
import { addBankDetails } from "@/lib/actions/vendor";

interface Props {
  onModalClose: (val: boolean) => void;
  setBankDetails: (val: any) => void;
}

const BankDetailsForm: React.FC<Props> = ({ onModalClose, setBankDetails }) => {
  const form = useForm();

  const { user } = useCtx();

  const {
    formState: { errors, isSubmitting },
    getValues,
    reset,
  } = form;

  const onSubmit = async (values: any) => {
    const {
      bankName,
      bankCountry,
      bankSwiftCode,
      bankAccountNumber,
      bankHolderName,
    } = values;

    const userId = user?.id;

    try {
      const data = await addBankDetails({
        name: bankName,
        country: bankCountry,
        swiftCode: bankSwiftCode,
        bankAccountNumber: bankAccountNumber,
        bankHolderName: bankHolderName,
        userId: userId as string,
      });

      if (!data.success) {
        throw new Error(data.message);
      }

      setBankDetails(data.bankData);

      toast.success("Success!", {
        description: "Bank details added successfully!",
      });
    } catch (err: any) {
      toast.error("Error!", {
        description: err.message,
      });
    } finally {
      reset({
        bankName: "",
        bankCountry: "",
        bankSwiftCode: "",
        bankAccountNumber: "",
        bankHolderName: "",
      });
      onModalClose(false);
    }
  };

  return (
    <Modal
      className="max-h-[80vh] showScrollbar overflow-auto"
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
          <div className="flex items-center gap-2 mt-[20px] justify-end">
            <Button
              type="button"
              variant={"outline"}
              className="hover:bg-transparent bg-transparent rounded-xl"
              onClick={onModalClose.bind(null, false)}
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="text-xs xs:text-sm bg-primary disabled:bg-disabled hover:bg-primary rounded-xl flex items-center gap-2"
              disabled={isSubmitting}
              size={"lg"}
            >
              {isSubmitting && <SpinnerButton />} Submit
            </Button>
          </div>
        </form>
      </Form>
    </Modal>
  );
};

export default BankDetailsForm;
