type MyRequired<T> = {
  [K in keyof T]-?: T[K];
};
interface IT {
  a?: number;
  b?: string;
};
type TO = MyRequired<IT>
//2

type ProcessStatus = "Строка1" | "Строка2" | "Строка3" | "Строка4";

function processStatus(status: ProcessStatus | never): string {
  switch (status) {
    case "Строка1":
      return "Это была строка1";
    case "Строка2":
      return "А это была строка 2";
    case "Строка3":
      return "Строка3";
    case "Строка4":
      return "Четыре";
    default:
        let unknown: never = status;
        throw new Error(`Неизвестное значение${unknown}`);
  }
}
console.log(processStatus('Строка1'));
// console.log(processStatus('Строка5'));