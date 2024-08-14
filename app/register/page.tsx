import RegisterationForm from "@/components/RegisterationForm";

const Page = () => {
  return (
    <section className="container max-w-3xl ">
      <h1 className="text-2xl font-semibold flex items-center justify-center mb-6">
        Sign up
      </h1>
      <RegisterationForm />
    </section>
  );
};

export default Page;
