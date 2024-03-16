import Button from "@/components/forms/common/Button";

export default function Footer() {
  return (
    <footer className="border-t-1 border-purple-800 flex flex-col h-32 lg:h-40 lg:p-6 text-center text-gray-800">
      <p className="pb-2 sm:pb-7">
        &copy; 2024 <span className="hidden sm:inline">Colin Clark &amp; Francesca DelGuidice</span>
      </p>
      <form className="flex justify-center mx-2">
        <ul className="flex flex-col sm:flex-row">
          <li className="mb-2 mr-2">
            <label htmlFor="mailingList">Sign up for new content:</label>
          </li>
          <li>
            <input type="text" id="mailingList" name="mailingList" className="h-7 outline-yellow-500 px-2 rounded-l-lg" />
            <Button name="Sign up" corners="rounded-r-lg" />
          </li>
        </ul>
      </form>
    </footer>
  )
}
