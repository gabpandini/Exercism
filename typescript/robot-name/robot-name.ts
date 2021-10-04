export class Robot {
  private robotName: string = '';
  private readonly listLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  private static listNames = new Set<string>(); 

  constructor() {
    this.resetName();
  }

  private generateName(): string {
    let letters = "";
    let numbers ="";

    for (let i = 0; i < 2; i++) { 
        letters += this.listLetters[Math.floor(Math.random()*26)];
    }

    for (let i = 0; i < 3; i++) {
      numbers += Math.floor(Math.random()*10);
      
    }

    return letters + numbers;
  }

  public get name(): string {
    return this.robotName;
  }

  public resetName(): void {
    var newName = this.generateName()
    while(Robot.listNames.has(newName)) {
      newName = this.generateName();
    }
      Robot.listNames.add(newName);
      this.robotName = newName;
  }

  public static releaseNames(): void { 
    Robot.listNames.clear(); 
  }
}
