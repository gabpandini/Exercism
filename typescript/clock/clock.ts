export class Clock {
  private readonly hora: number;
  private readonly minuto: number;
  constructor(hour: number, minute?: number) {
    this.hora = this.ajustarHora(hour, minute ?? 0);
    this.minuto = this.ajustarMinuto(minute ?? 0);
  }

  private ajustarMinuto(minute: number): number {
    let minutos: number; 
    minutos = minute %60; // retrona o resto da divisão de minutos por 60

    if (minutos < 0) {
      minutos = minutos + 60;
    }
      return minutos; 
  }

  private ajustarHora(hour: number, minute: number): number {
    let horas: number = hour;

      horas += Math.trunc(minute/60);
    
    if (minute % 60 < 0) {
      horas --;
    }

    horas = horas % 24;

    if (horas < 0) {
      horas = 24 + horas;
    }
      return horas;
  }

  public toString(): string {
    
    return `${this.hora.toString().padStart(2, '0')}:${this.minuto.toString().padStart(2, '0')}`;
  }

  public plus(minutes: number): Clock {
    return new Clock(this.hora, this.minuto + minutes);
  }

  public minus(minutes: number): Clock {
    return new Clock(this.hora, this.minuto - minutes);
  }

  public equals(other: Clock): boolean {
    return (this.hora == other.hora && this.minuto == other.minuto);   
  }
}
