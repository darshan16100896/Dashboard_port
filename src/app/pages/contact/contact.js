import Layout from "@/components/Layout";

export default function Contact() {
  return (
    <Layout>
      <h2 className="text-3xl font-bold mb-6">Contact</h2>
      <form className="max-w-lg space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 rounded-lg border dark:bg-gray-800 dark:border-gray-600"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 rounded-lg border dark:bg-gray-800 dark:border-gray-600"
        />
        <textarea
          rows="4"
          placeholder="Your Message"
          className="w-full p-3 rounded-lg border dark:bg-gray-800 dark:border-gray-600"
        />
        <button
          type="submit"
          className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Send
        </button>
      </form>
    </Layout>
  );
}
