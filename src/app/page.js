import QuizForm from "@/components/QuizForm";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1 className="flame-text  mb-4">Which Infamous Historical Figure Are You Most Like?</h1>
      <QuizForm />
    </main>
  );
}
