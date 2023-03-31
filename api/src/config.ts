import dotenv from "dotenv";
dotenv.config({});

class Config {
  public DB_URL: string | undefined;
  public JWT_TOKEN: string | undefined;
  public NODE_ENV: string | undefined;
  public SECRET_KEY_ONE: string | undefined;
  public SECRET_KEY_TWO: string | undefined;
  public CLIENT_URL: string | undefined;

  constructor() {
    this.DB_URL = process.env.DATABASE_URL || this.DB_URL;
    this.JWT_TOKEN = process.env.JWT_TOKEN || this.JWT_TOKEN;
    this.NODE_ENV = process.env.NODE_ENV || this.NODE_ENV;
    this.SECRET_KEY_ONE = process.env.SECRET_KEY_ONE || this.SECRET_KEY_ONE;
    this.SECRET_KEY_TWO = process.env.SECRET_KEY_TWO || this.SECRET_KEY_TWO;
    this.CLIENT_URL = process.env.CLIENT_URL || this.CLIENT_URL;
  }

  public validateConfig(): void {
    console.log("this => ", this);
    for (const [key, value] of Object.entries(this)) {
      if (value === undefined) {
        throw new Error(`The ENV configuration ${key} is undefined.`);
      } else {
        console.log(`${key} exist and has value.`);
      }
    }
  }
}

export const config: Config = new Config();
