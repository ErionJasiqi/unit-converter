

export const conversionTable = new Map<string, number>();
conversionTable.set("centimeter", 0.01);
conversionTable.set("meter", 1);
conversionTable.set("inch", 0.0254);
conversionTable.set("foot", 0.3048);
conversionTable.set("yard", 0.9144);
conversionTable.set("furlong", 201.168);
conversionTable.set("mile", 1609.34);
conversionTable.set("league", 5556);


export function convertToMeters(value: number, unit: string): number {
  let centimeters: number,
    meters: number,
    inches: number,
    feet: number,
    yards: number,
    furlongs: number,
    miles: number,
    league: number;

  switch (unit) {
    case "league":
      miles = (conversionTable.league[0] as number) * value;
      yards = (conversionTable.mile[0] as number) * miles;
      feet = (conversionTable.yard[0] as number) * yards;
      inches = (conversionTable.foot[0] as number) * feet;
      centimeters = inches * (conversionTable.inch[0] as number);
      meters = centimeters * (conversionTable.centimeter[0] as number);
      break;
    case "mile":
      yards = (conversionTable.mile[0] as number) * value;
      feet = (conversionTable.yard[0] as number) * yards;
      inches = (conversionTable.foot[0] as number) * feet;
      centimeters = inches * (conversionTable.inch[0] as number);
      meters = centimeters * (conversionTable.centimeter[0] as number);
      break;
    case "yard":
      feet = (conversionTable.yard[0] as number) * value;
      inches = (conversionTable.foot[0] as number) * feet;
      centimeters = inches * (conversionTable.inch[0] as number);
      meters = centimeters * (conversionTable.centimeter[0] as number);
      break;
    case "foot":
      inches = (conversionTable.foot[0] as number) * value;
      centimeters = inches * (conversionTable.inch[0] as number);
      meters = centimeters * (conversionTable.centimeter[0] as number);
      break;
    case "inch":
      centimeters = (conversionTable.inch[0] as number) * value;
      meters = centimeters * (conversionTable.centimeter[0] as number);
      break;
    case "centimeter":
      meters = (conversionTable.centimeter[0] as number) * value;
      break;
    case "meter":
      meters = value;
      break;
    default:
      throw new Error(`unknown unit: ${unit}`);
  }
  return meters;
}
