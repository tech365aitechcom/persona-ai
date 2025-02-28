export function ScenarioChoice({ field, scenario, optionA, optionB }) {
  return (
    <div className="space-y-4">
      <p className="font-medium">{scenario}</p>
      <div className="space-y-2">
        <label className="flex items-start gap-2 p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
          <input type="radio" {...field} value="A" className="mt-1" />
          <span>{optionA}</span>
        </label>
        <label className="flex items-start gap-2 p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
          <input type="radio" {...field} value="B" className="mt-1" />
          <span>{optionB}</span>
        </label>
      </div>
    </div>
  );
}
