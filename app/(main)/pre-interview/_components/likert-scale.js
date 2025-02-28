export function LikertScale({ field, label }) {
  return (
    <div className="space-y-2">
      <p className="font-medium">{label}</p>
      <div className="flex justify-between gap-2">
        {[1, 2, 3, 4, 5].map((value) => (
          <label key={value} className="flex flex-col items-center">
            <input
              type="radio"
              {...field}
              value={value}
              className="sr-only peer"
            />
            <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center peer-checked:bg-blue-600 peer-checked:text-white cursor-pointer">
              {value}
            </div>
            <span className="text-xs mt-1">
              {value === 1
                ? "Strongly Disagree"
                : value === 3
                ? "Neutral"
                : value === 5
                ? "Strongly Agree"
                : ""}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
}
