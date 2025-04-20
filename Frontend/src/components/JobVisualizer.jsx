export default function JobVisualizer({ step, stepIndex, totalSlots }) {
  return (
    <div className="mt-10">
      <h2 className="text-2xl font-semibold mb-6 text-indigo-800 text-center">
        Step {stepIndex + 1}: {step?.message}
      </h2>

      <div className="flex justify-center gap-4 mb-4 flex-wrap">
        {step.slots.map((job, index) => (
          <div
            key={index}
            className={`w-32 h-24 rounded-xl shadow-lg flex flex-col items-center justify-center ${
              job ? "bg-indigo-500 text-white" : "bg-gray-200 text-gray-600"
            }`}
          >
            <p className="font-bold">{job ? `Job ${job.id}` : "Empty"}</p>
            {job && <p className="text-sm">₹{job.profit}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
