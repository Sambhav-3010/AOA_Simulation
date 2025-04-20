import { useState } from "react";

export default function InputForm({ onSchedule }) {
  const [jobs, setJobs] = useState([{ id: "A", profit: 100, deadline: 2 }]);
  const [slots, setSlots] = useState(3);

  const handleChange = (index, field, value) => {
    const updated = [...jobs];
    updated[index][field] = field === "id" ? value : parseInt(value);
    setJobs(updated);
  };

  const addJob = () => {
    setJobs([...jobs, { id: "", profit: 0, deadline: 0 }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSchedule(jobs, slots);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-4">
        {jobs.map((job, index) => (
          <div key={index} className="flex gap-4 items-center">
            <input
              type="text"
              placeholder="Job ID"
              className="p-2 border rounded w-20"
              value={job.id}
              onChange={(e) => handleChange(index, "id", e.target.value)}
              required
            />
            <input
              type="number"
              placeholder="Profit"
              className="p-2 border rounded w-24"
              value={job.profit}
              onChange={(e) => handleChange(index, "profit", e.target.value)}
              required
            />
            <input
              type="number"
              placeholder="Deadline"
              className="p-2 border rounded w-24"
              value={job.deadline}
              onChange={(e) => handleChange(index, "deadline", e.target.value)}
              required
            />
          </div>
        ))}
      </div>

      <div className="flex gap-4 items-center">
        <button
          type="button"
          onClick={addJob}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add Job
        </button>

        <input
          type="number"
          placeholder="Total Slots"
          className="p-2 border rounded w-32"
          value={slots}
          onChange={(e) => setSlots(parseInt(e.target.value))}
          required
        />

        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Start
        </button>
      </div>
    </form>
  );
}
