export default function JobVisualizer({ step, stepIndex, totalSlots }) {
  return (
    <div className="mt-10">
      <h2 className="text-2xl font-semibold mb-6 text-indigo-800 text-center">
        Step {stepIndex + 1}: {step?.message}
      </h2>
      {step.currentJob && (
        <div className="flex justify-center mb-6">
          <div
            className={`w-48 h-24 rounded-xl shadow-md flex flex-col items-center justify-center animate-bounce transition-all duration-300 ${
              step.status === 'placed' ? 'bg-green-300' : 'bg-red-300'
            }`}
          >
            <p className="font-bold">Trying: Job {step.currentJob.id}</p>
            <p className="text-sm">Deadline: {step.currentJob.deadline}</p>
            <p className="text-sm">₹{step.currentJob.profit}</p>
          </div>
        </div>
      )}
      <div className="flex justify-center gap-4 mb-2 flex-wrap">
        {step.slots.map((_, index) => (
          <div key={index} className="w-32 text-center">
            <p className="text-sm font-semibold text-gray-700">Slot {index + 1}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-4 mb-6 flex-wrap">
        {step.slots.map((job, index) => (
          <div
            key={index}
            className={`w-32 h-28 rounded-xl shadow-lg flex flex-col items-center justify-center bg-purple-800 text-white`}
          >
            {job ? (
              <>
                <p className="font-bold">Job {job.id}</p>
                <p className="text-sm">Deadline: {job.deadline}</p>
                <p className="text-sm">₹{job.profit}</p>
              </>
            ) : (
              <p className="font-semibold">Empty</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
