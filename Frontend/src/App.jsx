import { useState } from "react";
import InputForm from "./components/InputForm";
import JobVisualizer from "./components/JobVisualizer";
import { scheduleJobsStepwise } from "./utils/scheduleJobs";

export default function App() {
  const [allSteps, setAllSteps] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [slots, setSlots] = useState(0);
  const [jobs, setJobs] = useState([]);
  const [started, setStarted] = useState(false);

  const handleSchedule = (jobList, totalSlots) => {
    const steps = scheduleJobsStepwise(jobList, totalSlots);
    setAllSteps(steps);
    setCurrentStep(0);
    setSlots(totalSlots);
    setJobs(jobList);
    setStarted(true);
  };

  const handleNextStep = () => {
    if (currentStep < allSteps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-blue-100 p-6 font-sans">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-extrabold text-center text-indigo-700 mb-10 drop-shadow-md">
          Job Scheduling Visualizer
        </h1>

        <InputForm onSchedule={handleSchedule} />

        {started && (
          <div className="flex justify-center mt-8">
            <button
              onClick={handleNextStep}
              disabled={currentStep >= allSteps.length - 1}
              className="bg-indigo-600 text-white px-8 py-3 rounded-xl shadow-lg hover:bg-indigo-700 transition disabled:opacity-50"
            >
              Reveal Step
            </button>
          </div>
        )}

        {started && (
          <JobVisualizer
            step={allSteps[currentStep]}
            stepIndex={currentStep}
            totalSlots={slots}
          />
        )}
      </div>
    </div>
  );
}
