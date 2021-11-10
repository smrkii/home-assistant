export class ConsumptionOverall{
  isok: boolean;
  data: Data;
}

export class Data{
  history: History[];
  timezone: string;
  history_interval: string;
  history_items: HistoryItems;
  total: number;
  total_ex: number;
  total_r: number;
  total_rex: number;
  total_c: number;
  total_cex: number;
  units: Units;
}

export class History{
  datetime: string;
  consumption: number;
  reversed: number;
  calc: number;
  available: boolean;
  sum: number;
}

export class HistoryItems{}

export class Units{
  consumption: string;
}
