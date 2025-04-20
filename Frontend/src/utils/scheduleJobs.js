export function scheduleJobsStepwise(jobs, totalSlots) {
  const sortedJobs = [...jobs].sort((a, b) => b.profit - a.profit);
  const slots = Array(totalSlots).fill(null);
  const steps = [];

  steps.push({
    message: "Starting Job Scheduling...",
    slots: [...slots],
    currentJob: null,
    status: null,
  });

  for (let i = 0; i < sortedJobs.length; i++) {
    const job = sortedJobs[i];
    let placed = false;

    for (let j = Math.min(totalSlots, job.deadline) - 1; j >= 0; j--) {
      if (!slots[j]) {
        slots[j] = job;
        placed = true;
        break;
      }
    }

    steps.push({
      message: `Trying to place Job ${job.id} with profit ₹${job.profit} and deadline ${job.deadline}${placed ? " — Placed" : " — Rejected"}`,
      slots: [...slots],
      currentJob: job,
      status: placed ? 'placed' : 'rejected',
    });
  }

  steps.push({
    message: "No more jobs left to be placed.",
    slots: [...slots],
    currentJob: null,
    status: null,
  });

  return steps;
}
