import { useRouter } from "next/router";
import { FormEvent } from "react";

function FilterForm() {
  const router = useRouter();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (e.target instanceof HTMLFormElement) {
      const formData = new FormData(e.target);
      const year = formData.get("year")?.toString();
      const month = formData.get("month")?.toString();
      if (!year || !month) return;
      router.push(`/events/${year}/${month}`);
    }
  };

  return (
    <form className="card p-5 bg-neutral" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 xl:grid-cols-[1fr_1fr_200px] gap-5">
        <div className="flex gap-5 items-center">
          <label className="text-lg" htmlFor="year">
            Year
          </label>
          <select name="year" id="year" className="select text-lg w-full">
            <option value="2023">2023</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
          </select>
        </div>
        <div className="flex gap-5 items-center">
          <label className="text-lg" htmlFor="month">
            Month
          </label>
          <select name="month" id="month" className="select text-lg w-full">
            <option value="January">January</option>
            <option value="February">February</option>
            <option value="March">March</option>
            <option value="April">April</option>
            <option value="May">May</option>
            <option value="June">June</option>
            <option value="July">July</option>
            <option value="August">August</option>
            <option value="September">September</option>
            <option value="October">October</option>
            <option value="November">November</option>
            <option value="December">December</option>
          </select>
        </div>
        <button className="btn btn-secondary">Find Event</button>
      </div>
    </form>
  );
}
export default FilterForm;
